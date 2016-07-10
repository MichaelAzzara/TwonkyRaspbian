
// ------------------------
// initial setup page
// ------------------------

function initialSetup() {
	// load the footer of the page
	loadFooterHtml();
	
	// is the page in an iframe?
	if (top != self) {
		// page is in an iFrame; show no header and footer
		$("#headWrapper").hide();
		$("#footer").hide();
	}
	
	// identify browser and OS
	browserIdentification();
	osIdentification();
	rpcData["privacypolicy"] = "http://twonky.com/legal/dataCollection";

	// add click event to every object with the class toggleButton
	// this shows or hide the content of a subheader
	$(".toggleButton").live("click", function(obj){
		toggleContainer($(obj.currentTarget));
	});
	
	getConvertReadmeFile();
    makeGetRequest("/rpc/get_language_file", {}, function(data, parameter){
		if (!(data == "")) {
			var s = data.split("|");
			for (var i=1;i+1<s.length;i=i+2) {
				if (serverLanguageFile[s[i]]) {
					continue;
				}
				var t = s[i+1];
				var t1 = t.replace(/\r\n/,"");
				serverLanguageFile[s[i]] = t1;
			}
			onLanguageFetched();
			loadInitialSetup();
		}
    });
}


function loadInitialSetup(){
    returnedCalls = 0;
    expectedCalls = 1;
    saveHandler = "submitInitialSetupData();"
	inputFieldClicked = false;
    changesMade = false;

	showLoadingGraphic();
    
	// first get the keys and values from the ini file
    makeGetRequest("/rpc/get_all", {}, function(response, parameter){
        parseSeparatedData(response, rpcData, rpcDataOrig, "=");
        returnedCalls++;
        if (expectedCalls == returnedCalls) {
			loadInitialSetupHtml();
			hideLoadingGraphic();
		}
    });
}

function loadInitialSetupHtml(){
    makeGetRequest("/webconfig/initialsetup.htm", {}, function(response, parameter){
        var responseHtml = $(response);
        replaceStrings(responseHtml);
        replaceData(responseHtml, rpcData, handleInitialSetupData);       
  		showToggleButtons(responseHtml);
        $(".serverSettingsContentWrapper").html(responseHtml);

		$("input", "#initialSetupContainer").live("click", onEventClick);
		$("input,select", "#initialSetupContainer").live("change", onEventChange);
  	    
		$("#login").hide();
		$("#settingsNav").hide();

		// add the languages
		makeGetRequest("/webconfig/setupLanguage.htm", {}, function(response){
			var responseHtml = $(response);
			replaceStrings(responseHtml);
			$("#languageSelectBox").html(responseHtml);
            replaceData($(".serverSettingsContentWrapper"), rpcData, handleInitialSetupData);
			$("input", "#languageContainer").live("click", onEventClick);
			$("input,select", "#languageContainer").live("change", onEventChange);
		});
	});
}


function handleInitialSetupData(element, key, data){
    switch (key) {
        case "friendlyname":
            element.val(data);
            break;
        case "language":
            var matchingLanguage = $("[value=" + data + "]", element);
            matchingLanguage.attr("selected", "yes");
            break;
        case "contentdir":
			folderBrowseDialogMsg = 1;
			updateSharedFolderList(element, data);
            break;
        case "licensestatus":
			// enter the license key
			// licensestatus 0=Trial, 2=OEM, -201..-207=error
			// licenseregistered 0=not registered, 1=registered
			if (rpcData["licenseregistered"] == "1") break;	// license is registered
            if (data >= 2) break;	// OEM
			var returnValue = "";
			returnValue += '<div class="boxHeader">\
			<span class="titleWrapper">\
				<span class="title">' + getString("licensekey") + '</span>\
			</span>\
			<div class="clear" />\
			</div>\
			<div><div>' +
			getString("licensekeycaption") +
			'</div><br />';
			if (os != "Mac") {
				// Windows, Linux: show 8 fields for license key
				for (var i = 0; i < 8; i++) {
					returnValue += '<input type="text" class="licenseKeyInput floatL" maxchars="4" onkeyup="onLicenseInputKeyUp(event, $(this))"></input>'
				}
			} else {
				// Mac: show one field for license key
				returnValue += '<input type="text" class="licenseKeyInputMac floatL" maxchars="39" onkeyup="onLicenseInputKeyUpMac(event)"></input>'
			}
			
			returnValue += '<a class="actionbtn floatL" onclick="saveLicenseKey()" onmousedown="onButtonMouseDown(this)" onmouseup="onButtonMouseUp(this)">\
					<span class="actionbtn_l"></span>\
					<span class="actionbtn_c">' + getString("enter") + '</span>\
					<span class="actionbtn_r"></span>\
				</a>\
				<div class="clear"></div>'
			
			// licensestatus 0=Trial OR -201..-207=error
			if (data >= 0) {
				returnValue += "<div class='error'>" + rpcData["licensedays"] + " " + getString("daysremaining") + "</div>";
			} else {
				// show the text of the errorcode (license-201, license-203, ...)
				returnValue += "<div class='error'>" + getString("license" + data) + "</div>";
			}
			returnValue += '</div><div class="serverContentSpacer"></div>';
			element.html(returnValue);
            break;
    }
}


function submitInitialSetupData(){
    returnedCalls = 0;
	expectedCalls = 1;	// set_all
    resetChanged();
	
	var data = "";
	showLoadingGraphic();
    hideActionButtons();

	// Server Name
	if (rpcDataOrig["friendlyname"] != $("#servername").val()) {
		data += "friendlyname=" + $("#servername").val() + "\n";
		rpcData["friendlyname"] = $("#servername").val();
	}
	// Language
	var newLanguage = $("#language").val();
	if (newLanguage != null && rpcDataOrig["language"] != newLanguage) {
		data += "language=" + newLanguage + "\n";
		setReloadSide = true;
	}	
	
	// build contentdir based on the shared folders
	// format: +M|C:\Users\mgran.PV\Music,+P|C:\Users\mgran.PV\Pictures,+V|C:\Users\mgran.PV\Videos dbdir=C:\ProgramData\TwonkyServer\dbFormat: 
    var shareFoldersList = $(".sharingRowWrapper", $("#share_folders_container"));
	var emptyPath = false;
	var contentDirKey = "contentdir=";
    var contentDir = "";
	var audiobooklocations = "";
	var locations = new Array();	// collect the shared folders in this array
    $.each(shareFoldersList, function(i, value){
        var dirInput = $(".pathInput", value);
        var dirPath = dirInput.val();
		locations[locations.length] = dirPath;
        if (dirPath) {
            var sharedCheckbox = $(".sharedCheckbox", value);
            var enabledKey;
			if (sharedCheckbox.is(":checked")) {
				enabledKey = "+";
			}
			else {
				enabledKey = "-";
			}
            var mediaKey = $(".contentTypeDropdown", value).val();
			// audiobook is saved with the media key "M". The audiobook paths are stored via set_option?audiobooklocations=<list with paths>.
			if (mediaKey == "B") {
				mediaKey = "M";
				if (audiobooklocations == "") audiobooklocations = dirPath;
				else audiobooklocations += "," + dirPath;
			}
			if (contentDir == "") contentDir += enabledKey + mediaKey + "|" + dirPath;
			else contentDir += "," + enabledKey + mediaKey + "|" + dirPath;
        }
		else emptyPath = true;
    });
	data += contentDirKey + contentDir + "\n";
	rpcData["contentdir"] = contentDir;	
	rpcDataOrig["contentdir"] = rpcData["contentdir"];

	if (data == "") {
		returnedCalls++;
		if (expectedCalls == returnedCalls)  {
			setInitialFlag();
		}
	} else {			
		makePostRequest("/rpc/set_all", {}, data, function(){
			returnedCalls++;
			if (expectedCalls == returnedCalls)  {
				setInitialFlag();
			}
		});
	}
	
}

// initial setup was done
function setInitialFlag() {
	rpcData["initialsetupdone"] = 1;
	var data = "initialsetupdone=1\n";
	makePostRequest("/rpc/set_all", {}, data, function(){
		hideLoadingGraphic();
		finishSaving();
		navigateTo('status');
	});	
}
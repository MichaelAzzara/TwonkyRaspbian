(function(e){var t,n,r;(function(e){function c(e,t){var n=t&&t.split("/"),r=o.map,i=r&&r["*"]||{},s,u,a,f,l,c,h;if(e&&e.charAt(0)==="."&&t){n=n.slice(0,n.length-1),e=n.concat(e.split("/"));for(l=0;h=e[l];l++)if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))return!0;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}if((n||i)&&r){s=e.split("/");for(l=s.length;l>0;l-=1){u=s.slice(0,l).join("/");if(n)for(c=n.length;c>0;c-=1){a=r[n.slice(0,c).join("/")];if(a){a=a[u];if(a){f=a;break}}}f=f||i[u];if(f){s.splice(0,l,f),e=s.join("/");break}}}return e}function h(t,n){return function(){return l.apply(e,a.call(arguments,0).concat([t,n]))}}function p(e){return function(t){return c(t,e)}}function d(e){return function(t){i[e]=t}}function v(t){if(s.hasOwnProperty(t)){var n=s[t];delete s[t],u[t]=!0,f.apply(e,n)}if(!i.hasOwnProperty(t))throw new Error("No "+t);return i[t]}function m(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=c(e.slice(0,i),t),e=e.slice(i+1),r=v(n),r&&r.normalize?e=r.normalize(e,p(t)):e=c(e,t)):e=c(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function g(e){return function(){return o&&o.config&&o.config[e]||{}}}var i={},s={},o={},u={},a=[].slice,f,l;f=function(t,n,r,o){var a=[],f,l,c,p,y,b;o=o||t;if(typeof r=="function"){n=!n.length&&r.length?["require","exports","module"]:n;for(b=0;b<n.length;b++){y=m(n[b],o),c=y.f;if(c==="require")a[b]=h(t);else if(c==="exports")a[b]=i[t]={},f=!0;else if(c==="module")l=a[b]={id:t,uri:"",exports:i[t],config:g(t)};else if(i.hasOwnProperty(c)||s.hasOwnProperty(c))a[b]=v(c);else if(y.p)y.p.load(y.n,h(o,!0),d(c),{}),a[b]=i[c];else if(!u[c])throw new Error(t+" missing "+c)}p=r.apply(i[t],a);if(t)if(l&&l.exports!==e&&l.exports!==i[t])i[t]=l.exports;else if(p!==e||!f)i[t]=p}else t&&(i[t]=r)},t=n=l=function(t,n,r,i){return typeof t=="string"?v(m(t,n).f):(t.splice||(o=t,n.splice?(t=n,n=r,r=null):t=e),n=n||function(){},i?f(e,t,n,r):setTimeout(function(){f(e,t,n,r)},15),l)},l.config=function(e){return o=e,l},r=function(e,t,n){t.splice||(n=t,t=[]),s[e]=[e,t,n]},r.amd={jQuery:!0}})(),r("lib/almond.js",function(){}),r("localization/beam/en",[],function(){return{ERROR_UNSUPPORTED_BROWSER:"ERROR: This browser is currently not supported by the Twonky Beam Button."}}),r("localization/beam/zh",[],function(){return{ERROR_UNSUPPORTED_BROWSER:"&#20986;&#38169;&#20102;&#65306;Beam&#25353;&#38062;&#29616;&#22312;&#36824;&#19981;&#25903;&#25345;&#24744;&#20351;&#29992;&#30340;&#28216;&#35272;&#22120;"}}),function(e){function f(t){return typeof a[t]=="function"&&(a[t]=a[t](e,i,s)),a[t]}function l(t,n,r){a[t]=r?n(e,i,s):n}function c(e,t){var r=!1,i=e.charAt(0).toUpperCase()+e.slice(1),s=n.length,o=t.style;if(typeof o[e]=="string")r=!0;else while(s--)if(typeof o[n[s]+i]=="string"){r=!0;break}return r}function h(e){if(e)while(e.lastChild)e.removeChild(e.lastChild);return e}function p(e,n){var r=typeof e[n];return r=="object"?!!e[n]:!t[r]}var t={"boolean":1,number:1,string:1,"undefined":1},n=["Webkit","Moz","O","ms","Khtml"],i=p(e,"document")&&e.document,s=i&&p(i,"createElement")&&i.createElement("DiV"),o=typeof exports=="object"&&exports,u=typeof module=="object"&&module,a={};f.add=l,f.clearElement=h,f.cssprop=c,f.isHostType=p,f._tests=a,f.add("dom",function(e,t,n){return t&&n&&p(e,"location")&&p(t,"documentElement")&&p(t,"getElementById")&&p(t,"getElementsByName")&&p(t,"getElementsByTagName")&&p(t,"createComment")&&p(t,"createElement")&&p(t,"createTextNode")&&p(n,"appendChild")&&p(n,"insertBefore")&&p(n,"removeChild")&&p(n,"getAttribute")&&p(n,"setAttribute")&&p(n,"removeAttribute")&&p(n,"style")&&typeof n.style.cssText=="string"});try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){}typeof r=="function"&&typeof r.amd=="object"&&r.amd?r("has",[],function(){return f}):o?u&&u.exports==o?(u.exports=f).has=f:o.has=f:e.has=f}(this),r("script",[],function(){var e=function(){var e=null,t=function(e,t){var n,r=e&&e.length||0;if(typeof t!="function")return;for(n=r-1;n>=0;n-=1)if(e[n]&&t.call(this,e[n],n))break};return t(document.getElementsByTagName("script"),function(t,n){if(t.getAttribute("src"))return e=t,!0}),e}();return e}),r("runtimeSettings",["script"],function(t){var n=function(){var n="data-",r="beam-",i={},s=function(e){return typeof e=="string"?i[e.toLowerCase()]:i},o=function(e){var t,r={};if(!e||!e.attributes||!e.attributes.length)return r;for(t=0;t<e.attributes.length;t+=1)e.attributes[t]&&typeof e.attributes[t].name=="string"&&e.attributes[t].name.toLowerCase().indexOf(n.toLowerCase())===0&&(r[e.attributes[t].name.substr(n.length).toLowerCase()]=e.attributes[t].value);return r},u=function(){var t={},n=null,i=/\+/g,s=new RegExp(r+"([^&=]+)=?([^&]*)","g"),o=function(e){return decodeURIComponent(e.replace(i," "))},u=e.location.search.substring(1);n=s.exec(u);while(n)t[o(n[1]).toLowerCase()]=o(n[2]),n=s.exec(u);return t},a=function(e,t){var n=null;if(!e||!t)throw new TypeError;for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};return a(i,o(t)),a(i,u()),s}();return n}),r("environment",["has","runtimeSettings"],function(e,t){var n=function(){var e={APPLICATION_PATH:"../ui/application.html",BUTTON_CSS_PATH:"../ui/css/button.css",BUTTON_MOBILE_CSS_PATH:"../ui/css/phone_button.css",EMBEDDED:t("embedded")==="true",GA_ACCOUNT_ID:"none",PVX_BASE_PATH:"/pro"},n={APPLICATION_PATH:"./ui/application.html",BUTTON_CSS_PATH:"./ui/css/button.css",BUTTON_MOBILE_CSS_PATH:"./ui/css/phone_button.css",EMBEDDED:t("embedded")==="true",GA_ACCOUNT_ID:t("gaid")||"UA-25602051-1",PVX_BASE_PATH:t("pvx")||"/"};return n}();return n}),r("LoggerLevel",[],function(){var e={TRACE:"trace",DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error",FATAL:"fatal"};return e}),r("Logger",["LoggerLevel","runtimeSettings"],function(t,n){var r=e.console&&(typeof e.console.log=="function"||typeof e.console.log=="object"),i=r&&(e.console.firebug||e.console.exception),s=e.JSON&&typeof JSON.stringify=="function",o=function(){var t,n,o;if(!r)return;o=[(new Date).getTime()+" ms",this.source()];for(t=0;t<arguments.length;t+=1){t===0&&(o=o.concat(arguments[t]));for(n=0;t>0&&arguments[t]&&n<arguments[t].length;n+=1)o=o.concat(arguments[t][n])}if(!i&&s)try{o=JSON.stringify(o)}catch(u){}e.console.log(o)},u=function(){},a=function(e){e=e||"",this.source=function(){return e}};return a.setLevel=function(e){var n=a.prototype;switch(e){case t.TRACE:n[t.TRACE]=o,n[t.DEBUG]=o,n[t.INFO]=o,n[t.WARN]=o,n[t.ERROR]=o,n[t.FATAL]=o;break;case t.DEBUG:n[t.TRACE]=u,n[t.DEBUG]=o,n[t.INFO]=o,n[t.WARN]=o,n[t.ERROR]=o,n[t.FATAL]=o;break;case t.INFO:n[t.TRACE]=u,n[t.DEBUG]=u,n[t.INFO]=o,n[t.WARN]=o,n[t.ERROR]=o,n[t.FATAL]=o;break;case t.WARN:n[t.TRACE]=u,n[t.DEBUG]=u,n[t.INFO]=u,n[t.WARN]=o,n[t.ERROR]=o,n[t.FATAL]=o;break;case t.ERROR:n[t.TRACE]=u,n[t.DEBUG]=u,n[t.INFO]=u,n[t.WARN]=u,n[t.ERROR]=o,n[t.FATAL]=o;break;case t.FATAL:n[t.TRACE]=u,n[t.DEBUG]=u,n[t.INFO]=u,n[t.WARN]=u,n[t.ERROR]=u,n[t.FATAL]=o;break;default:}},a.setLevel(t.INFO),a.setLevel(n("logger-level")),a}),r("platform",[],function(){var e=function(){function c(){return l===undefined&&(l=navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase(),l=l||""),l}function h(){return e===undefined&&(e=c().search("android")>-1),e}function p(){return o===undefined&&(o=c().search("mobile")>-1),o}function d(){return t===undefined&&(t=h()&&p()),t}function v(){return n===undefined&&(n=h()&&!p()),n}function m(){return i===undefined&&(i=c().search("ipad")>-1),i}function g(){return s===undefined&&(s=c().search("iphone")>-1&&!m()),s}function y(){return r===undefined&&(r=m()||g()),r}function b(){return u===undefined&&(u=d()||g()),u}function w(){return a===undefined&&(a=c().search("silk")>-1),a}function E(){return f===undefined&&(f=v()||m()||w()),f}var e,t,n,r,i,s,o,u,a,f,l;return{isAndroid:h,isAndroidPhone:d,isAndroidTablet:v,isIpad:m,isIphone:g,isIos:y,isPhone:b,isTablet:E}}();return e}),r("localizer",["Logger","platform","runtimeSettings","script"],function(e,t,r,i){var s=function(){var s="en",o={Default:"Default",Tablet:"Tablet",Phone:"Phone"},u=[o.Phone,o.Tablet,o.Default],a=function(){var e=i&&typeof i.src=="string"&&i.src.match(/([^\/]+).js/);return e&&e[1]}(),f=null,l=r("language")||navigator&&(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage)||s,c=new e("localizer"),h=t.isPhone()?o.Phone:t.isTablet()?o.Tablet:o.Default,p=this,d=function(){c.trace("format",arguments);var e,t=arguments[0],n;for(e=0;e<arguments.length-1;e+=1)n=new RegExp("\\{"+e+"\\}","gi"),t=t.replace(n,arguments[e+1]);return t},v=function(){c.trace("get",arguments);var e=arguments&&arguments[0],t=Array.prototype.slice.call(arguments,1),n="";if(typeof e!="string")throw new TypeError("Missing or invalid dictionary key.");try{f===null&&(f=m()),n=typeof f[e]=="string"?f[e]:f[e][h]}catch(r){c.error("Error while reading dictionary.",r&&r.message,e,a,l,h)}return arguments.length>1&&(n=d.apply(p,Array.prototype.concat([n],t))),n||e},m=function(){c.trace("getDictionary",arguments);if(!a)throw new Error("Must call setContext first!");var e,t=[l],r;l.length===5&&t.push(l.substr(0,2)),l!==s&&t.push(s);for(e=0;e<t.length;e+=1)try{r="localization/"+a+"/"+t[e],f=n(r),c.info("Dictionary loaded.",[r]);break}catch(i){if(e>=t.length)throw i}return f},g=function(e){c.debug("setContext",arguments);if(typeof e!="string")throw new TypeError;a=e},y=function(e){c.debug("setDomain",arguments);if(typeof newPlatform!="string"||o[e]===undefined)throw new TypeError;h=e},b=function(e){c.debug("setLanguage",arguments);if(typeof e!="string")throw new TypeError;l=e};return c.trace("CTOR"),{get:v}}();return s}),r("MessageChannel",["Logger"],function(t){var n=function(n){if(!e.JSON||typeof JSON.parse!="function"||typeof JSON.stringify!="function")throw new Error("JSON is missing.");if(typeof e.postMessage!="function"&&typeof e.postMessage!="object")throw new Error("Messaging is not supported.");if(typeof n!=typeof e)throw new TypeError("The given targetWindow is not valid.");var r=new t("MessageChannel"),i=function(t){r.debug("attach",arguments);try{e.addEventListener("message",t,!1)}catch(n){r.fatal("detach",arguments)}},s=function(t){r.debug("attachFallback",arguments);try{e.attachEvent("onmessage",t,!1)}catch(n){r.fatal("detach",arguments)}};this.post=function(e){r.trace("post",arguments);try{n.postMessage(JSON.stringify(e),"*")}catch(t){r.error("post",t)}},this.listen=function(t){r.debug("listen",arguments);var n=function(e){r.debug("listener",arguments);try{t.apply(e.source,[JSON.parse(e.data)])}catch(n){r.fatal("listener",n)}};if(typeof t!="function")return;if(e.addEventListener){i(n);return}e.attachEvent&&s(n)}};return n}),r("utils",["Logger","script"],function(t,n){var r=null,i=null,s=new t("utils"),o=function(){return r===null&&(r=l(a(l(e.location.href),n&&n.getAttribute("src")||"./")),s.debug("baseUrl",[r])),r},u=function(){if(i===null){try{i=e.parent&&e.parent.location&&e.parent.location.href}catch(t){s.debug("getHostUrl",[t])}i=i||document.referrer,s.debug("hostUrl",[i])}return i},a=function(e,t){var n,r;if(!e)throw new TypeError("Invalid URL to resolve: "+e);return t?(e=l(e),t.match(/^(https?:)?\/\//i)?r=t:(n=document.createElement("a"),t&&t.indexOf(".")===0?n.href=e+t:(n.href=e,n.pathname=t||""),r=n.href),s.debug("resolveUrl",[e,t,r]),r):a(o(),e)},f=function(e,t){return e&&e.length>t?e.substring(0,t).trim()+"&hellip;":e},l=function(e){var t;if(typeof e!="string")throw new TypeError("String expected: "+e);return e=e.split("#")[0],e=e.split("?")[0],t=e.split("/"),t.pop(),t.join("/")+"/"};return{getBaseUrl:o,getHostUrl:u,resolveUrl:a,truncateStr:f,truncateUrl:l}}),r("Bootstrapper",["environment","localizer","Logger","MessageChannel","platform","runtimeSettings","utils"],function(t,n,r,i,s,o,u){var a=function(){var a="TwonkyBeamBrowser",f="pv-twonky-beam",l=["embed","iframe","img","span"],c="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",h=15,p=null,d=null,v=null,m=null,g=null,y=this,b=typeof e.ontouchstart!="undefined",w=function(e){return typeof e=="string"||typeof e=="number"?e+"px":null},E=function(t,r,i){m.debug("beam",arguments);var s;if(i>=h){s=n.get("ERROR_UNSUPPORTED_BROWSER"),e.alert(s),E=function(t,n,r){e.alert(s)};return}if(g===null){setTimeout(function(){E(t,r,i>=1?i+1:1)},1e3);return}if(r["data-collection-callback"]){setTimeout(function(){try{var e,t=r["data-collection-callback"].match(/^(javascript:)(.+);$/i);e=t&&t[2]?t[2]:r["data-collection-callback"],e=(new Function("return "+e))(),y.beamCollection(M(e.call()))}catch(n){m.warn("",[r["data-collection-callback"],r,n])}},1);return}g.post({type:"beam",data:r})},S=function(){var e=u.resolveUrl(t.APPLICATION_PATH),n=null,r=o(),i=null;for(n in r)r.hasOwnProperty(n)&&(i=i===null?"":i+"&",i+=encodeURIComponent("beam-"+n)+"="+encodeURIComponent(r[n]));return i&&(e=e+"?"+i),m.debug("applicationPath",[e]),e},x=function(e){m.debug("getData",arguments);var t=e&&e.attributes?e.attributes.length:0,n={},r=0;if(t===0)return null;for(;r<t;r+=1)typeof e.attributes[r].name=="string"&&e.attributes[r].name.match(/^data-/i)&&(n[e.attributes[r].name]=e.attributes[r].value);return n},T=function(e){m.debug("getElementsByClassName",arguments);var t=[],n,r,i,s=["div","span"],o;if(document.body.getElementsByClassName)t=document.body.getElementsByClassName(e);else{i=new RegExp("\\b"+e+"\\b","i");for(n=0;n<s.length;n+=1){o=document.getElementsByTagName(s[n]);for(r=0;o&&r<o.length;r+=1)o[r].className&&o[r].className.match(i)&&t.push(o[r])}}return t},N=function(){return m.debug("genId",arguments),c.replace(/[xy]/g,function(e){var t=Math.random()*16|0,n=e==="x"?t:t&3|8;return n.toString(16)})},C=function(e){m.debug("getLayout",arguments);var t={overlay:e.className.match(/\bpv_bb_overlay(_hover)?\b/ig)?!0:!1,hover:e.className.match(/\bpv_bb_overlay_hover\b/ig)?!0:!1,top_left:e.className.match(/\bpv_bb_top_left\b/ig)?!0:!1,top_right:e.className.match(/\bpv_bb_top_right\b/ig)?!0:!1,bottom_left:e.className.match(/\bpv_bb_bottom_left\b/ig)?!0:!1,bottom_right:e.className.match(/\bpv_bb_bottom_right\b/ig)?!0:!1};return t},k=function(e){m.debug("injectButton",arguments);var t=null,n=null,r=null,i=0,s=null;t=document.createElement("span"),t.setAttribute("id",N()),t.className="beam-button";for(;i<l.length;i+=1){r=e.getElementsByTagName(l[i]);if(r&&r.length>0){n=r[0];break}}s=C(e),n&&s.overlay&&(e.style.height=w(n.clientHeight),e.style.width=w(n.clientWidth),s.top_left?(t.style.top=w(-(n.clientHeight*.9)),t.style.marginLeft=w(n.clientWidth*.1)):s.bottom_left?(t.style.top=w(-(n.clientHeight*.25)),t.style.marginLeft=w(n.clientWidth*.1)):s.bottom_right?(t.style.top=w(-(n.clientHeight*.25)),t.style.marginRight=w(n.clientWidth*.1),t.style.cssFloat="right"):(t.style.top=w(-(n.clientHeight*.9)),t.style.marginRight=w(n.clientWidth*.1),t.style.cssFloat="right"),s.hover&&!b&&(t.style.visibility="hidden",e.onmouseover=function(){try{t.style.visibility="visible"}catch(e){m.error("onmouseover",[e&&e.message])}},n.onmouseout=function(){try{t.style.visibility="hidden"}catch(e){m.error("onmouseout",[e&&e.message])}})),O()||(t.onclick=function(){try{m.debug("onclick",arguments),E(t,x(e))}catch(n){m.error("onclick",[n&&n.message])}}),e.appendChild(t)},L=function(){m.debug("injectCss",arguments);var e,n,r,i;r=!document.head||!document.head.appendChild,n=r?document.getElementsByTagName("head")[0]:document.head,e=document.createElement(r?"style":"link"),i=u.resolveUrl(s.isPhone()?t.BUTTON_MOBILE_CSS_PATH:t.BUTTON_CSS_PATH),e.setAttribute("type","text/css"),r||(e.setAttribute("rel","stylesheet"),e.setAttribute("href",i)),n.appendChild(e),r&&e.styleSheet.addImport(i)},A=function(){m.debug("injectApplication",arguments),p!==null&&document.body.removeChild(p),p=document.createElement("iframe"),p.setAttribute("id",N()),p.setAttribute("src",S()),p.setAttribute("scrolling","no"),p.setAttribute("frameBorder","0"),p.setAttribute("allowTransparency",!0),P("Closed"),document.body.appendChild(p),p.onload=function(){setTimeout(function(){try{g=new i(p.contentWindow),g.listen(_)}catch(e){m.fatal("injectApplication.onload.error",[e&&e.message])}},500)}},O=function(){var e;try{d===null&&(e=navigator&&navigator.userAgent,m.info("userAgent",[e]),d=e&&e.match(new RegExp(a,"i"))?!0:!1)}catch(t){m.error("isBeamBrowser",[t]),d=!1}return m.debug("isBeamBrowser",[d]),d},M=function(e){return typeof e=="string"?JSON.parse(e):e},_=function(e){try{m.debug("messageHandler",arguments);if(!e)return;switch(e.type){case"setState":P(e.state);break;default:m.warn("Unknown message type.",[e])}}catch(t){m.error("messageHandler",[t])}},D=function(){try{m.debug("onReady");var e,t,n;if(document.readyState!=="complete"){m.debug("document.readyState",[document.readyState]);return}L(),O()||A(),t=[],t=T(f),e=t.length;for(n=0;n<e;n+=1)H(t[n],n)}catch(r){m&&m.fatal("onReady",[r])}},P=function(e){m.debug("setApplicationState",arguments),e=e||"default",p.className="pv-bb-application-frame pv-bb-application-state-"+e.toLowerCase()},H=function(e,t){m.debug("setupBeamButton",arguments);var n=null,r=e.getElementsByTagName("span"),i;for(i=0;r&&i<r.length;i+=1)r[i].className&&r[i].className.match(/(^|\s)beam-button($|\s)/i)&&(n=r[i]);if(n===null){k(e);return}O()||(n.onclick=function(){try{m.debug("onclick",arguments),E(n,x(e))}catch(t){m.error("onclick",[t&&t.message])}})};this.beamCollection=function(e){m.info("beamCollection",arguments);try{if(g===null)throw new Error("BEAM is not ready.");g.post({type:"beamCollection",data:M(e)})}catch(t){return m.warn("beamCollection",[t,e]),!1}return!0},this.beamItem=function(e){return m.info("beamItem",arguments),y.beamCollection({items:[M(e)]})},this.bind=function(e){m.info("bind",arguments);var t,n;try{e=e.length?e:[e],n=e.length;for(t=0;t<n;t+=1)H(e[t])}catch(r){return m.warn("bind",[r,e]),!1}return!0},this.disableReporting=function(){m.info("disableReporting");if(!g)return;g.post({type:"disableReporting"})},this.getPlayerState=function(e){return m.info("getPlayerState",arguments),!0},this.listen=function(e,t){return m.info("listen",arguments),!0};try{m=new r("Bootstrapper"),m.info("environment",[t]),document.readyState==="complete"?D():typeof document.onreadystatechange=="function"||typeof document.onreadystatechange=="object"?document.onreadystatechange=D:v=setInterval(function(){m.debug("document.readyState",[document.readyState]),document.readyState==="complete"&&(clearInterval(v),D())},250)}catch(B){m&&m.fatal("CTOR",[B])}m.debug("CTOR")};return a}),n.config({baseUrl:"../src/js",paths:{has:"./lib/has"}}),r("beam",["Bootstrapper"],function(t){var n;return e.BEAM?e.BEAM:(n=new t,{beamCollection:n.beamCollection,beamItem:n.beamItem,bind:n.bind,disableReporting:n.disableReporting,getPlayerState:n.getPlayerState,listen:n.listen})}),e.BEAM=n("beam")})(window)
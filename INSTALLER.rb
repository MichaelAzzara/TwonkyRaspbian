#!/usr/bin/env ruby
#
# Tool we will be using for directory manipulation
require 'fileutils'
#
#key/values -- can modify values to create multiple instances of twonky (w.i.p) requires a lot more code and modification of ini.script ect...
name = "TwonkyRaspbian"
init = "twonkystartup"
twonky_dir = "/home/twonky"
#
#
# feedback
puts "Prepairing Twonky install"
#
# 1. Move Twonky Starter into the /etc/init.d dir and make it executable
FileUtils.install init, '/etc/init.d/', :mode => 0755, :verbose => true
puts "1. Success"

# 2. Set Twonky to load at boot
system "update-rc.d /etc/init.d/#{init} defaults"
puts "2. Success"

# 3. Create user to run twonky
system "adduser --system --disabled-password --ingroup pi --disabled-login twonky"
puts "3. Success"

# 4. Make Twonky files Execuable and change folder permissions
system "chmod 700 twonkys* cgi-bin/* plugins/*"
system "chown twonky:pi /usr/share/#{name} -R"
puts "4. Success"

# 5. Create appdata folder to host databases ect.
FileUtils.mkdir(twonky_dir) unless File.directory?(twonky_dir)
system "chown twonky:pi #{twonky_dir} -R"
puts "5. Success"

# 6. Install dependencies
system "apt-get install software-properties-common"
puts "6. Success, rebooting"

# 7. reboot on success
system "reboot"

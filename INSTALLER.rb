#!/usr/bin/env ruby
#
# Tool we will be using for directory manipulation
require 'fileutils'
# why not..
print "Prepairing Twonky install"
#
# 1. Move Twonky Starter into the /etc/init.d dir and make it executable
FileUtils.install 'twonkyinit', '/etc/init.d', :mode => 0755, :verbose => true
puts "1. Success"

# 2. Set Twonky to load at boot
system "update-rc.d /etc/init.d/twonkyinit defaults"
puts "2. Success"

# 3. Make Twonky files Execuable
system "chmod 700 twonkys* cgi-bin/* plugins/*"
puts "3. Success"

# 4. Create user to run twonkys
system "adduser --system --disabled-password --ingroup pi --disabled-login twonky"
puts "4. Success"

# 5. Create appdata folder to host databases ect.
twonky_dir = "/home/twonky"
FileUtils.mkdir(twonky_dir) unless File.directory?(twonky_dir)
system "chown twonky:pi /home/twonky -R"
puts "5. Success"

# 6. Install dependencies
system "apt-get install software-properties-common"
puts "6. Success, rebooting"

# 7. reboot on success
system "reboot"

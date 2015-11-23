require 'fileutils'
Dir.glob("vendor/**/*").each do |file_path|
  if file_path =~ /\.js/
     file_name = file_path.match(/[a-z\._-]+\.js/).to_s
     puts file_name
  end
end
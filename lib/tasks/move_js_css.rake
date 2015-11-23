namespace :move_js_css do
  
  desc "Do"
  task :run => :environment do
    puts Dir.glob(Rails.root + "/vendor/assets/**")
  end
    
  
end

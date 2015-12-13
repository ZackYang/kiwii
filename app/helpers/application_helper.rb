module ApplicationHelper
  
  def language_to_contry
    hash = {
        "zh-CN" => "cn",
        "en" => "au"
    }
    hash[I18n.locale.to_s]
  end
  
end

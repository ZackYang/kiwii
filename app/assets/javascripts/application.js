// This is a manifest file that'll be compiled into application, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap

// for template

//= require smartresize
//= require owl.carousel
//= require jquery.sticky
//= require jquery.validate
//= require jquery.magnific-popup.min
//= require detectmobilebrowser
//= require skrollr
//= require jquery.easing
//= require main
//= require isotope.pkgd.min
//= require portfolio
//= require testimonials  
//= require_tree .
//= require_self
  
$(function() {
  
  $(".language-selector").on("click", function(e) {
    document.cookie = "locale=" + $(this).attr("data-language");
    location.reload();
  });
  
})  

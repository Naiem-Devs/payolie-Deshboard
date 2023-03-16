(function($) {
  "use strict";
  
 // menu 
 $(".side_nav").hover(function(){

  $("body").addClass("side_nav_active");  
}, function () {
  $("body").removeClass("side_nav_active");
});


$("a.m_nav_btn").click(function (){
  $(".side_nav").toggleClass("active")
  $("body").toggleClass("side_nav_active")
})

  $('select').niceSelect();
})(jQuery);

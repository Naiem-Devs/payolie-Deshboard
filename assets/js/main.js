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


  function LessMoreBtns() {
    let Elements = document.querySelectorAll('.truncates')
    if (Elements.length > 0) { 
      Elements.forEach(el => {
          let btn = el.querySelector('button')
          btn.addEventListener('click', () => {
              el.classList.toggle('make_it_big')
          })
      })
    }
  }
  LessMoreBtns()










})(jQuery);

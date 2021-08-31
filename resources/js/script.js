$(document).ready(function(){

/*    For the stick navigation      */

  var waypoint = new Waypoint({
      element: document.querySelector('.js--section-features'),
      handler: function(direction) {
      if(direction == "down"){
        $('nav').addClass('stick');
      } 
      else {
        $('nav').removeClass('stick');
      } 
    }, 
        offset:80
  });
/*    For Scroll To Top      */

  var waypoint = new Waypoint({
      element: document.querySelector('.js--section-steps'),
      handler: function(direction) {
      if(direction == "down"){
        $('.section-steps').addClass('stick-top');
      } 
      else {
        $('.section-steps').removeClass('stick-top');
      } 
    }, 
        offset:80
  });

          /*    Scroll on buttons*/

    $('.js--scroll-to-plan').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });
    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });
    $('.js--scroll-to-food-delivery').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });
    $('.js--scorll-to-how-it-works').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
  });
    $('.js--scroll-to-our-cities').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000);
  });
    $('.js--scroll-to-sign-up').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
  });
    $('.js--scroll-to-top').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-top').offset().top}, 1000);
  });
    $('.js--scroll-btn-to-top').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-top').offset().top}, 1000);
});

/*        Animation       */

$('.js--wp-1').waypoint(function(){
  $('.js--wp-1').addClass('animate__animated animate__fadeIn');
},{offset:'50%'});

$('.js--wp-2').waypoint(function(){
  $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
},{offset:'50%'});

$('.js--wp-3').waypoint(function(){
  $('.js--wp-3').addClass('animate__animated animate__pulse');
},{offset:'50%'});

/*   Mobile Nav   */

  $('.js--nav-icon').click(function(){
  var nav = $('.main-nav');
  var icon = document.querySelector('.mobile-nav-icon-btn');

  nav.slideToggle(200);

  if(icon.name == 'menu-outline') {
    icon.name = 'close-outline';
  }else{
    icon.name = 'menu-outline';
  }

  });

});
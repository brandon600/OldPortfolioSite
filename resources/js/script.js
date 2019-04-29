$(document).ready(function() {

  $('.js--wp-cs-l').waypoint(function(direction) {
        $('.js--wp-cs-l').addClass('animated fadeIn');
    }, {
        offset: '70%'
      });


  $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {
        offset: '50%'
      });

  $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated lightSpeedIn');
    }, {
        offset: '50%'
      });


  $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated pulse');
    }, {
        offset: '70%'
      });

  $('.js--portfolio-section').waypoint(function(direction) {
      if (direction =='down') {
          $('.nav-bar').addClass('sticky');
      } else {
          $('.nav-bar').removeClass('sticky');
        }
   }, { offset: '60px'

       });

  $('.js--web-dev-wp').waypoint(function(direction) {
        $('.js--web-dev-wp').addClass('animated fadeIn');
  }, {
      offset: '70%'
  });

  $('.js--ios-dev-wp').waypoint(function(direction) {
        $('.js--ios-dev-wp').addClass('animated fadeIn');
  }, {
      offset: '70%'
  });

  $('.js--books-written-wp').waypoint(function(direction) {
        $('.js--books-written-wp').addClass('animated fadeIn');
  }, {
      offset: '70%'
  });



  $('.vid-icon').click(function(direction) {
    $('#popup').addClass('animated bounceIn');
  });


  $('.close-icon').click(function(direction) {
    $('#popup').addClass('animated bounceOut', function() {
      $('#popup').removeClass('fixedP');
    });
  });

  $('.js--nav-icon').click(function() {
           var nav = $('.js--nav-bar');
           var icon = $('.js--nav-icon i');
           var welcome = $('.js--welcome');
           var largeBG = $('.large-background');
           var portBG = $('.portfolio-background');

           nav.slideToggle(100);

           if (icon.hasClass('ion-navicon-round')) {
               icon.addClass('ion-close-round');
               icon.removeClass('ion-navicon-round');
               welcome.removeClass('welcome-margin-top');
               largeBG.addClass('small-background');
               portBG.addClass('small-background');
           } else {
               icon.addClass('ion-navicon-round');
               icon.removeClass('ion-close-round');
               welcome.addClass('welcome-margin-top');
               largeBG.removeClass('small-background');
               portBG.removeClass('small-background');
           }

       });


});

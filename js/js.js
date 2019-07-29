$(document).ready(function(){
    $(".fa-bars").click(function(){
      $(".menu").slideToggle();
      $(".nav-h").show();
      
    });
    $(".nav-h").click(function(){
      $('.nav-h').hide();
      $(".fa-bar").show();
      $(".menu").slideToggle()
    })
    $(".s3Heading").click(function(){
      $(this).toggleClass("active").siblings().removeClass("active");
      $(this).toggleClass("cer").siblings().removeClass("cer");
    }); 
       
    $(".one").click(function(){
      $(".full3,.full2,.full4,.full5").hide();
      $(".full1").show();
    }); 
    $(".two").click(function(){
      $(".full3,.full1,.full4,.full5").hide();
      $(".full2").show();
     
    }); 
    $(".three").click(function(){
      $(".full1,.full2,.full4,.full5").hide();
      $(".full3").show();
    }); 
    $(".four").click(function(){
      $(".full3,.full2,.full1,.full5").hide();
      $(".full4").show();
    }); 
    $(".five").click(function(){
      $(".full3,.full2,.full4,.full1").hide();
      $(".full5").show();
    
    }); 




  
  $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();
  
      $('section').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
              $('.dot li a').removeClass('certen');
              $('.dot li a').eq(i).addClass('certen');
          }
      });
      if($(window).scrollTop()>80 ) {
        $('.hd').addClass('topMenu');

      }
      else {
      }
      if( $(window).scrollTop()<552) {
        $('img.mobile').addClass('animation1');
        $('img.tum').addClass('animation2');

      }
      else {
        $('img.mobile').removeClass('animation1');
        $('img.tum').removeClass('animation2');
      }

  })
  























    
    
});



















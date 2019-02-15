$(function() {  
    'use strict'
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 100){
            $('.navbar').addClass ('scroll-nav');
			$('.back-to-top').addClass ('visible');
			
        }else if (scrollTop < 100){
            $('.navbar').removeClass('scroll-nav');
			$('.back-to-top').removeClass ('visible');
        };
    });
	$('.back-to-top').click (function(){
		$('body , html').animate({
			scrollTop:0
		},800);
    });
     
    $("html").niceScroll({
        cursorcolor: "#f4c9e2",
        cursorwidth: "5px",
        cursorborder: "1px solid rgba(250, 0, 118, 0.8) ", 
        cursorborderradius: "5px",
        scrollspeed: 66
    });
    $('.timer').countTo();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:1,
               
            },
            1000:{
                items:1,
               
            }
        }
      });

      $('.video-popup').magnificPopup({
        items: {
               src: 'https://www.youtube.com/watch?v=13fv-xEAFmY&list=PLDoPjvoNmBAxr5AqK3Yz4DWYKVSmIFziw'
           },
        type: 'iframe',
        iframe: {
                  markup: '<div class="mfp-iframe-scaler">'+
                          '<div class="mfp-close"></div>'+
                          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                          '</div>', 
              patterns: {
                  youtube: {
                        index: 'youtube.com/', 
                        id: 'v=', 
                        src: '//www.youtube.com/embed/13fv-xEAFmY' 
                      }
                   },
                   srcAction: 'iframe_src', 
           }
      });
      /*$('#videolink').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
      });*/

      
});
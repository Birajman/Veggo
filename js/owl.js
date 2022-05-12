$(document).ready(function(){
    $(".owl_services").owlCarousel({
        items:4,
        margin:50,
        loop:true,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true,
            autoplay:true,
            autoplayTimeout:2500
        }
    }
    });
    
  });
  

//---Scroll Menu---
window.addEventListener("scroll", function() {
    var nav = document.querySelector("header");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });


  // Carousel Products Best Seller
  $('.products-seller').owlCarousel({
    loop:true,
    nav:false,
    autoplayTimeout: 5000,
    smartSpeed: 400,
    //center: true,
    autoplay:true,
    //autoplayTimeout:1000,
    autoplayHoverPause:true,   
    //nav: false,
    //rewind: false,    
    
    dotsEach:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:10,
        },
        400:{
            items:1,
            margin:30,
        },
        768:{
            items:3,
           // margin:10,
        },
        1000:{
            items:3,
            //margin:-50,
            //stagePadding:40,
        }
    }
})

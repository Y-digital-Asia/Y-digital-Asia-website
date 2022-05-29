    $(document).ready(function(){
      $('.slideshow-inner').slick({
        autoplay: true,
        arrows: false, 
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 3000,
        // dots: true
      });
      $('.slide-text').slick({
        autoplay: true,
        arrows: false, 
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 3000,
        fade: true,
        dots: true
      });
    })
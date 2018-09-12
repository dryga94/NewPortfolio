document.addEventListener("DOMContentLoaded", function (event){
  DEBUG = true
  // SCROLLBAR INIT


    if ($('.scrollbar-inner').length) {
        $('.scrollbar-inner').scrollbar();
        console.log('ready');
    }
    if ($('.scrollbar-outer').length) {
        $('.scrollbar-outer').scrollbar();
        console.log('ready');
    }

    // SWIPER INIT

    if ($('.gallery-top').length) {
      var galleryTop = new Swiper('.gallery-top', {
          slidesPerView: 1,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        galleryTop.controller.control = galleryTop;
    }
    if ($('.gallery-thumbs').length & $('.gallery-top').length) {
      var galleryTop = new Swiper('.gallery-top', {
        slidesPerView: 1,
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      });
      galleryThumbs.controller.control = galleryTop;
      galleryTop.controller.control = galleryThumbs;
    }


      
      

      // wow = new WOW(
      //   {
      //   boxClass:     'wow',      // default
      //   animateClass: 'animated', // default
      //   offset:       0,          // default
      //   mobile:       true,       // default
      //   live:         true        // default
      // }
      // )
      // wow.init();
      // console.log('readywow');


      
});
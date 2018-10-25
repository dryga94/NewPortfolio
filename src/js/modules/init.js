document.addEventListener("load", function (event) {
    let DEBUG = true;

    // GOOGLE MAP INIT
    if ($('.map__holder').length != 0) {
        var mapContainer = $('.map__holder')[0];
        var mapOptions = {
            center: {
                lat: 46.953772,
                lng: 31.994300
            },
            zoom: 15,
            disableDefaultUI: true
        };
        let map = new google.maps.Map(mapContainer, mapOptions);
    }

    //  VIDEO Player INIT
    if ($('.blog__video').length != 0) {
        let video = $('.player');
        video.each(function () {
            let player = new Plyr(this, {
                controls: ['play', 'progress', 'volume', 'captions', 'mute']
            });
            player.volume = 0.5;
            player.muted = true;
            player.clickToPlay = true;
            player.on('doubleclik', function () {
                this.fullscreen.enter()
            });
        })
    }
    // SCROLLBAR INIT

    let holder = new HolderTransition();
    if ($('.scrollbar-inner').length) {
        $('.scrollbar-inner').scrollbar();
        console.log('ready');
    }
    if ($('.scrollbar-outer').length) {
        $('.scrollbar-outer').scrollbar();
        console.log('ready');
    }

    // MASONRY
    var elem = document.querySelector('.blog');
    var msnry = new Masonry(elem, {
        itemSelector: '.col'
    });

    // SWIPER INIT
    if ($('.gallery-blog').length) {
        var galleryBlog = new Swiper('.gallery-blog', {
            slidesPerView: 1,
            autoHeight: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChangeTransitionEnd: function () {
                    msnry.layout();
                },
                init: function () {
                    msnry.destroy();
                    msnry = new Masonry(elem, {
                        itemSelector: '.col'
                    });
                }
            }
        });
    }
    if ($('.gallery-top').length) {
        var galleryTop = new Swiper('.gallery-top', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    if ($('.gallery-thumbs').length & $('.gallery-top').length) {
        var galleryTop = new Swiper('.gallery-top', {
            slidesPerView: 1,
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
});
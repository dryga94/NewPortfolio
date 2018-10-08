$('.js-dropdown').on('click', function (){
    $(this).parent().find('.js-dropdown__body').slideToggle();
})
$(document).mouseup(function (close){ 
    var div = $(".js-dropdown__body"); 
    if (!div.is(close.target)
        && !$('.js-dropdown').is(close.target)
        && !$('.js-dropdown').find('.fas').is(close.target) 
        && div.has(close.target).length === 0) 
        { 
        div.slideUp(); 
        
    }
});
$('.nav__hamburger').on('click', function (){
    $(this).toggleClass('is-active');
    if ($('.nav__wrapper--open').length) {
        $(this).parent().parent().find('.nav__wrapper').removeClass('nav__wrapper--open');
    } else {
        $(this).parent().parent().find('.nav__wrapper').addClass('nav__wrapper--open')
    };
});
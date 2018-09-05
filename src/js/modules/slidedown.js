$('.js-dropdown').on('click', function (){
    $('.js-dropdown__body').slideToggle();
})
$(document).mouseup(function (close){ 
    var div = $(".js-dropdown__body"); 
    if (!div.is(close.target)
        && !$('.js-dropdown').is(close.target) 
        && div.has(close.target).length === 0) { 
        div.slideUp(); 
    }
});

    
$('.js-dropdown').on('click', function (){
    $(this).parent().find('.js-dropdown__body').slideToggle();
    console.log($('.js-dropdown').find('.fas'))
})
$(document).mouseup(function (close){ 
    var div = $(".js-dropdown__body"); 
    if (!div.is(close.target)
        && !$('.js-dropdown').is(close.target)
        // && !$('.js-dropdown').find('.fas').is(close.target) 
        && div.has(close.target).length === 0) 
        { 
        div.slideUp(); 
        
    }
});

    
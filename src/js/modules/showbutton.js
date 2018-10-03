$('.btn--show').on('click', function(){
    $(this).parent().parent().removeClass('container--hidden');
    $(this).parent().parent().toggleClass('scrollbar-inner');
    $('.scrollbar-inner').scrollbar();
});
$('.main__link').on('touchstart touchmove hover', function(){
    $(this).focus()
});

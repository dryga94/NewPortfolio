$('.btn--show').on('click', function(){
    $(this).parent().parent().removeClass('container--hidden');
    $(this).parent().parent().toggleClass('scrollbar-inner');
    $('.scrollbar-inner').scrollbar();
});
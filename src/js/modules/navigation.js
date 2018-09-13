$('.filter__list').on('click', '.filter__radio', function(){
    $('.main__holder').parent().removeClass('is-hidden').removeClass('col--3').removeClass('col--4').toggleClass('col--4');
    var currentId = $(this).attr('id');
    arr = $('.main__holder');
    i = 0;
    if (currentId != 'all') {
        do {
            neededId = $(arr[i]).attr('id');
            if (currentId != neededId) {
                $(arr[i]).parent().toggleClass('is-hidden');
            } else {
                $(arr[i]).parent().removeClass('is-hidden').removeClass('col--4').toggleClass('col--3');
            }
            i++;
        }
        while(i <= arr.length)
    } 
});

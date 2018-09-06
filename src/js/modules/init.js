document.addEventListener("DOMContentLoaded", function (event){
    if ($('.scrollbar-inner').length) {
        $('.scrollbar-inner').scrollbar();
        console.log('ready');
    }

});
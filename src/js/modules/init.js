document.addEventListener("DOMContentLoaded", function (event){
    if ($('.scrollbar-inner').length) {
        $('.scrollbar-inner').scrollbar();
        console.log('ready');
    }
    if ($('.scrollbar-outer').length) {
        $('.scrollbar-outer').scrollbar();
        console.log('ready');
    }
});
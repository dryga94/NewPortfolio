class HolderTransition{
    constructor (){
        this._el = $('.main__holder');
        this._container = $('.main__holder').parent();
        this._currentId;
        this._filter_list = $('.filter__list');
        this._filter_radio = '.filter__radio';
        this.Init();
    }
    Init(){
        let filtered;
        $(this._filter_list).on('click', this._filter_radio, ()=>{
            this.TransitionStart();
            this._currentId = $(event.target).attr('id');
            setTimeout(() => {
                this.TranstionEnd();
                filtered = this.Filter(this._currentId);
                $(filtered).addClass('ready');
            }, 500);
            setTimeout(() => {
                $('.ready').removeClass('ready');
            }, 500);
        });
    }
    Filter(currentId){
        console.log('filter start');
        if (currentId != 'all') {
            for (let i = 0; i < $(this._el).length; i++) {
                const element = $(this._el)[i];
                if ($(element).data('id').indexOf(currentId) != -1) {
                    $(element).parent().removeClass('is-hidden');
                }
            }
            return $("[data-id="+currentId+"]");
        } else {
            $('.main__holder').parent().removeClass('is-hidden');
            return $('.main__holder');
        }
    }
    TranstionEnd(){
        console.log('remove scale out');
        $(this._el).removeClass('scale-out');
        $(this._container).addClass('is-hidden');
    }
    TransitionStart(){
        console.log('add scale out');
        $(this._el).addClass('scale-out');
    }
}

// $('.filter__list').on('click', '.filter__radio', function () {
//     var currentId = $(this).attr('id');
//     init()
//     function init (){
//         if ($('.main__holder').parent().not('.is-hidden')) {
//             $('.main__holder').parent().not('.is-hidden').find('.main__holder').toggleClass('scale-out');
//         }
//     }
//     $('.main__holder').on('transitionend', function () {
//         $('.main__holder').parent().not('.is-hidden').toggleClass('is-hidden');
//         $('.main__holder').removeClass('scale-out');
//         filter();
//     })
    
//     function filter() {
//         if (currentId != 'all') {
//             console.log(23);
//             $("[data-id="+currentId+"]").parent().removeClass('is-hidden');
//         } else {
//             $('.main__holder').parent().removeClass('is-hidden')
//         }
//         $('.main__holder').toggleClass('ready');
//     }
// });

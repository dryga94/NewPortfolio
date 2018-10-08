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


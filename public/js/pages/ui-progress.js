/* ui-progressbar page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running ui-progressbar page javascript');
        $(document).ready(function() {
            $('.progress .progress-bar').progressbar();
            $('.progress.bsprog-filltext .progress-bar').progressbar({display_text: 'fill'});
        });
        me.onclicks();
    };
    
    me.onclicks = function() {
        $('#reload').on('click', function() { window.location.reload(); });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
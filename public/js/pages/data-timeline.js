/* data-timeline page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-timeline javascript');
        $('#align-left').on('click', function() {
            $('.timeline').removeClass('timeline-right');
            $('.timeline').addClass('timeline-left');
        });
        $('#align-right').on('click', function() {
            $('.timeline').removeClass('timeline-left');
            $('.timeline').addClass('timeline-right');
        });
        $('#align-centre').on('click', function() {
            $('.timeline').removeClass('timeline-left');
            $('.timeline').removeClass('timeline-right');
        });
    };

    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
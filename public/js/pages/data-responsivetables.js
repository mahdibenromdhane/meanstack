/* data-responsivetable page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-responsivetable page javascript');
        $(function() {
            me.footable();
            me.stacktable();
        });
    };
    
    me.footable = function() {
        $('.footable-basic').footable();
        $('.footable-advanced').footable();
    };
    
    me.stacktable = function() {
        $('.stacktable').stacktable();
        $('.stacktable-cards').cardtable();
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
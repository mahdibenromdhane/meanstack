/* ui-tabs page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running ui-tabs page javascript');
        hljs.initHighlightingOnLoad();
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
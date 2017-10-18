/* data-treeview page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-treeview page javascript');
        $(function() {
            me.jstree();
            me.fancytree();
        });
    };
    
    me.jstree = function() {
        $('#jstree-data').jstree();
    };
    
    me.fancytree = function() {
        $('#fancytree-data').fancytree();
    };

    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
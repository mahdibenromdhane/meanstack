/* site-map page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running site-map page javascript');
        me.search();
        me.onclicks();
    };
    
    me.search = function() {
        $('#site-map-query').on('input', function(el) {
            var search = $(this).val();
            $('#site-map a').each(function() {
                $(this).velocity('stop', true);
                $(this).css('color', '#000');
                $(this).children("span").css('display', 'block');                
                if (search && search.length>= 2) {
                    var regex = new RegExp(search, 'i');
                    if (regex.test($(this).html())) {
                        var span = $(this).children("span");
                        span.css('display', 'block');
                        var li = $(this).parent();
                        li.children().velocity("callout.shake", {duration: 500});
                        li.children().css('color', '#f00');
                    }
                }
            });
        });
    };
    
    me.onclicks = function() {
        $('#search_button').on('click', function() { highlightSearch(); });
    };

    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
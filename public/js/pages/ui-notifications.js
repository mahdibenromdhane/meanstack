/* ui-notifications page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running ui-notifications page javascript');
        $("#notifybetter").notify_better({
            interval: 1000,
            overrideAjax: function() {
                value = Math.floor((Math.random()*100)+1);
                titleclear();
                changeFavicon(value);
                $("#notifybetter").html(value);
            },
            updateTitle: true, // Dynamically Add notification count to your website's title
            updateFavicon: { // Enable you to show notification on top of your favicon dynamically
                id: "favicon",  // the ID of your favicon link tag (as shown above)
                backgroundColor: "#f1e40f", // Background color of your notification count
                textColor: "#5d350b", // Text color of your notification count
                location: "full", // Position of your notification count. Can be "full", "ne", "se", "sw", "nw". The default is full.
                shape: "circle" // Shape of the notification counter. Can be circle or square.
            },
        });

        $(".ajax-call").loadingbar({
            target: "#loadingbar-frame",
            direction: "right",
        });
        
        $('body').on('click', '.jbpopupcenter', function() {
            new jBox('Notice', {
                title: "<i class='fa fa-comments fa-lg'></i> You have a message...",
                content: "Toast to the top (no autoclose, with an overlay)!",
                position: {
                    x: 'center',
                    y: 'top',
                },
                offset: {
                    x: 0, 
                    y: 15
                },
                color: "blue",
                overlay: true,
                closeOnClick: true,
                autoClose: false,
            });
        });
        $('body').on('click', '.jbpopupright', function() {
            new jBox('Notice', {
                title: "<i class='fa fa-exclamation-triangle fa-lg'></i> Warning!",
                content: "Toast to the top right (autoclose, zooming)!",
                attributes: {
                    x: 'right',
                    y: 'top',
                },
                color: "red",
                animation: "zoomIn",
            });
        });
        $('body').on('click', '.jbpopupbottom', function() {
            new jBox('Notice', {
                title: "<i class='fa fa-facebook fa-lg'></i> &nbsp;New Message",
                content: "Toast to the bottom right (autoclose, flipping)!",
                attributes: {
                    x: 'right',
                    y: 'bottom',
                },
                color: "green",
                animation: "flip",
            });
        });
        $('body').on('click', '.jbpopupmiddle', function() {
            new jBox('Notice', {
                content: "<h1 style='margin:10px 20px;color:yellow;'>Toast in your face!</h1>",
                position: {
                    x: 'center',
                    y: 'center',
                },
                animation: "tada",
                closeOnClick: true,
            });
        });
        $('body').on('click', '.jbpopupelement', function() {
            new jBox('Notice', {
                content: "Toast on an element<br>(autoclose, top left, + close icon)",
                target: $('#jbtarget'),
                position: {
                    x: 'left',
                    y: 'top',
                },
                offset: {
                    x: 5, 
                    y: 5
                },
                color: "yellow",
                closeButton: "box",
            });
        });
        
        $('body').on('click', '.jbbpopupcenter', function() {
            new jBox('Notice', {
                title: "<i class='fa fa-envelope fa-lg'></i>&nbsp; New mail",
                content: "Toast to the top (no autoclose)!",
                position: {
                    x: 'center',
                    y: 'top',
                },
                offset: {
                    x: 0, 
                    y: 55
                },
                color: "blue",
                closeOnClick: true,
                theme: "NoticeBorder",
            });
        });
        $('body').on('click', '.jbbpopupright', function() {
            new jBox('Notice', {
                title: "<i class='fa fa-bolt fa-lg'></i> ERROR!",
                content: "Toast to the top right (autoclose, sliding)!",
                attributes: {
                    x: 'right',
                    y: 'top',
                },
                offset: {
                    x: 0, 
                    y: 35
                },
                color: "red",
                animation: "slide",
                theme: "NoticeBorder",
            });
        });
        $('body').on('click', '.jbbpopupbottom', function() {
            new jBox('Notice', {
                title: "<i class='fa fa-check fa-lg text-green'></i> Success!",
                content: "Toast to the middle left (autoclose, sliding)!",
                position: {
                    x: 'left',
                    y: 'center',
                },
                offset: {
                    x: 15, 
                    y: 0
                },
                color: "green",
                animation: "slide",
                theme: "NoticeBorder",
            });
        });
        $('body').on('click', '.jbbpopupmiddle', function() {
            new jBox('Notice', {
                title: "<div style='text-align:center;margin-top:10px;'><i class='fa fa-cutlery fa-3x'></i></div>",
                content: "<h1 style='margin:10px 20px;color:yellow;'>Toast for breakfast!</h2>",
                position: {
                    x: 'center',
                    y: 'center',
                },
                color: "yellow",
                animation: "tada",
                theme: "NoticeBorder",
            });
        });
        $('body').on('click', '.jbbpopupelement', function() {
            new jBox('Notice', {
                content: "Toast on an element (autoclose, top right)",
                target: $('#jbtarget2'),
                position: {
                    x: 'right',
                    y: 'top',
                },
                offset: {
                    x: 5, 
                    y: 5
                },
                color: "yellow",
                closeButton: "box",
                theme: "NoticeBorder",
            });
        });
        
        $('body').on('click', '.notifybar-et', function() {
            $.notifyBar({
                html: "&nbsp; ERROR code ZB456118922x ...surely you know what that means!",
                delay: 2000,
                animationSpeed: "normal",
                cssClass: "error",
            });
        });
        $('body').on('click', '.notifybar-wt', function() {
            $.notifyBar({
                html: "&nbsp; Action cancelled",
                delay: 2000,
                animationSpeed: "normal",
                cssClass: "warning",
            });
        });
        $('body').on('click', '.notifybar-st', function() {
            $.notifyBar({
                html: "&nbsp; Your data has been changed!",
                delay: 2000,
                animationSpeed: "normal",
                cssClass: "success",
            });
        });
        $('body').on('click', '.notifybar-eb', function() {
            $.notifyBar({
                html: "&nbsp; ERROR code ZB456118922x ...surely you know what that means! (click to close)",
                delay: 2000,
                animationSpeed: "normal",
                cssClass: "error",
                position: "bottom",
                close: true,
            });
        });
        $('body').on('click', '.notifybar-sb', function() {
            $.notifyBar({
                html: "&nbsp; Your data has been changed! (click to close)",
                delay: 2000,
                animationSpeed: "normal",
                cssClass: "success",
                position: "bottom",
                close: true,
            });
        });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
/* ui-animation page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running ui-animation page javascript');
        me.animate_elements();
    };
    
    me.animate_elements = function() {
        // panels
        $('#panelcolour').on('click', function() { 
            $('#panelcolour-t').css({ 'position': 'relative' });
            $('#panelcolour-t').velocity({ backgroundColor: "#837935", color: "#ede8cc" }, { duration: 1000, loop: 1 });
            $('#panelcolour-t b').velocity({ color: "#ede8cc" }, { duration: 1000, loop: 1 });
            $('#panelcolour-t .panel-heading').velocity({ backgroundColor: "#564b08", color: "#e5ddad" }, { duration: 1000, loop: 1 });
        });
        // chaining example
        $('#chaining-t').on('click', function() { 
            $('#chaining').velocity({ marginTop: "10px", marginBottom: "30px" }, { delay: 500, duration: 1000, easing: "ease-in-out" }).velocity("reverse")
                          //.velocity({ rotateZ: "-5deg", marginTop: "10px", marginBottom: "30px" }, { duration: 2000, easing: "ease-in-out" }).velocity("reverse")
                          .velocity({ rotateZ: "-10deg", marginTop: "10px", marginBottom: "30px" }, { duration: 2000, easing: "ease-in-out" })
                          .velocity({ rotateZ: "10deg", marginTop: "20px", marginBottom: "20px" }, { duration: 3000, easing: "ease-in-out" })
                          .velocity({ rotateZ: "-10deg", marginTop: "10px", marginBottom: "30px" }, { duration: 2500, easing: "ease-in-out" })
                          .velocity({ rotateZ: "2deg" }, { duration: 2000, easing: "ease-in-out" })
                          .velocity({ rotateZ: "5deg", marginTop: "20px", marginBottom: "20px" }, { duration: 1500, easing: "ease-in-out" })
                          //.velocity({ marginTop: "0px", marginBottom: "40px" }, { duration: 1000, easing: "ease-in-out" }).velocity("reverse")
                          //.velocity({ rotateZ: "-3deg", marginTop: "10px", marginBottom: "10px" }, { duration: 3000, easing: "ease-in-out" })
                          .velocity({ rotateZ: "50deg", width: "105%" }, { duration: 800, easing: "ease-in-out" })
                          .velocity({ rotateZ: "80deg", width: "200%", translateX: "-200px", translateY: "-600px" }, { duration: 700 })
                          .velocity({ opacity: "0" })
                          .velocity({ marginTop: "20px", marginBottom: "20px", rotateZ: "0", width: "350px", translateX: "0", translateY: "0" })
                          .velocity({ opacity: "1" }, { duration: 1000, delay: 1000 });
        });
        // multiple example
        $('#textzoom').on('click', function() {
            $('#textzoom').velocity({ fontSize: "18px" }, { duration: 500, easing: "ease-in-out" })
                          .velocity( "callout.pulse", { duration: 400 })
                          .velocity({ fontSize: "80px", color: "#b23d39" }, { duration: 1300, easing: [300, 10], delay: 300 })
                          .velocity( "callout.tada", { duration: 1000 })
                          .velocity({ fontSize: "40px", color: "#806d99" }, { duration: 1000, easing: [350, 8] });
            $('#textzoom-cont').velocity({ backgroundColor: "#f8f79f" }, { duration: 1200, loop: 1, delay: 1000 });
        });
        
        // scroll 
        $('#scroll-toggle').on('click', function() {
            $('#scroll-target').velocity("scroll", { container: $('#scroll-container'), duration: 2000, easing: "easeInBack" });
        });

    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();





















/* forms-sliders page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running forms-sliders page javascript');
        me.ionsliders();
        me.jqueryknob();
    };

    me.ionsliders = function() {
        $('[data-trigger="ionslider"]').ionRangeSlider();
    };

    me.jqueryknob = function() {
        $('[data-trigger="jquery-knob"]').knob();
        function clock() {
            var $s = $(".second"),
                $m = $(".minute"),
                $h = $(".hour");
                var d = new Date(),
                s = d.getSeconds(),
                m = d.getMinutes(),
                h = d.getHours();
                if (h > 12) { h = h-12; }
            $s.val(s).trigger("change");
            $m.val(m).trigger("change");
            $h.val(h).trigger("change");
            // setTimeout("clock()", 1000);
        }
        setInterval(clock, 1000); // loop clock
        clock();
        
        // From http://jsfiddle.net/t2woyvww/2 by https://github.com/dafyk
        $(".temperature").knob({
            'fgColorStart' : '#2488DC',
            'fgColorEnd' : '#FB1934',
            'format' : function (value) {
               return value + String.fromCharCode(8451);
            },
            'draw': function () {
                var v=parseInt($(this.i).val(),10);
                var cs=colorParse(this.o.fgColorStart);
                var ce=colorParse(this.o.fgColorEnd);
                var ends = new Array(new Color(cs[0],cs[1],cs[2]),new Color(ce[0],ce[1],ce[2]));
                var steps = (this.o.max - this.o.min) / this.o.step;
                var step = new Array(3);
                var color = mixPalette();
                this.o.fgColor=color;
                this.$.css({'color':color});
                function Color(r,g,b) {
                    this.r = r;
                    this.g = g;
                    this.b = b;
                    this.coll = new Array(r,g,b);
                    this.text = cText(this.coll);
                }
                function colorParse(c) {
                    c = c.toUpperCase();
                    col = c.replace(/[\#\(\)]*/i,'');
                    var num = new Array(col.substr(0,2),col.substr(2,2),col.substr(4,2));
                    var ret = new Array(parseInt(num[0],16),parseInt(num[1],16),parseInt(num[2],16));
                    return(ret);
                }
                function stepCalc() {
                    step[0] = (ends[1].r - ends[0].r) / steps;
                    step[1] = (ends[1].g - ends[0].g) / steps;
                    step[2] = (ends[1].b - ends[0].b) / steps;
                }
                function mixPalette() {
                    stepCalc();
                    var r = (ends[0].r + (step[0] * v));
                    var g = (ends[0].g + (step[1] * v));
                    var b = (ends[0].b + (step[2] * v));
                    var color = new Color(r,g,b);
                    return color.text;
                }
                function cText(c) {
                    var result = '';
                    for (k = 0; k < 3; k++) {
                        val = Math.round(c[k]/1);
                        piece = val.toString(16);
                        if (piece.length < 2) {piece = '0' + piece;}
                        result = result + piece;
                    }
                    result = '#' + result.toUpperCase();
                    return result;
                }
            }
        });
    };

    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
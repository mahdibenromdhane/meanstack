/* ui-panels page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        window.charts = {};
        $('.chart_donut').each(function(index,element) {
            me.chart_donut(index, element);
        });   
        me.onclicks();
    };
    
    me.chart_donut = function(index, element) {
        var theme_colours = [
            '#4a7aab',
            '#d1cf4b',
            '#b77270',
            '#75a04e',
            '#cb9c38',
            '#a182ad',
            '#b4a631',
            '#986946',
            '#6ea0d3',
            '#f0efa1',
            '#de9997',
            '#a0cc78',
            '#f4c560',
            '#cab4d3',
            '#e8d850',
            '#ca9b78',
            '#aacff5',
            '#f8bebd',
            '#cff4ad',
            '#f3b98e'
        ];
        var testdata = [
            {key: "Free", y: 300},
            {key: "Available", y: 800},
            {key: "Buffers", y: 100},
            {key: "Cached", y: 240},
            {key: "Swap", y: 500},
        ];
        var height = null;
        var width = null;
        var chart1;
        nv.addGraph(function() {
            var chart1 = nv.models.pieChart()
                .x(function(d) { return d.key; })
                .y(function(d) { return d.y; })
                .donut(true)
                .width(width)
                .height(height)
                .legendPosition("right")
                .showLegend(false)
                .showLabels(false)
                .margin({"left":0,"right":0,"top":10,"bottom":0})
                .padAngle(0.08)
                .cornerRadius(5)
                .padAngle(0.03)
                // .id('donut1') // allow custom CSS for this one svg
                .color(theme_colours); // add theme colours
            chart1.title('100%');
            chart1.pie.labelsOutside(true).donut(true);
            d3.select(element)
                .datum(testdata)
                .transition().duration(1200)
                .call(chart1);
            nv.utils.windowResize(chart1.update);
            window.charts[index] = chart1;
            // return chart1;
        });
    };
    
    me.onclicks = function() {
        $('[data-toggle="tab"]').on('shown.bs.tab', function (element) {
            parent.helpers.resizeTrigger();
            setTimeout(function() { parent.helpers.resizeTrigger(); }, 50);
        });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
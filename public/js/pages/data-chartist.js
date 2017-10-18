/* data-chartist page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-chartist page javascript');
        me.chart_line();
        me.chart_area();
        me.chart_barv();
        me.chart_barh();
        me.chart_multi();
        me.chart_pie();
        me.chart_gauge();
        me.chart_donut();
    };

    me.chart_line = function() {
        new Chartist.Line('#chart_line', {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6],
            [8, 7, 6, 7.5, 6]
          ]
        }, {
          fullWidth: true,
          chartPadding: {
            right: 40
          }
        });
    };
    
    me.chart_area = function() {
        new Chartist.Line('#chart_area', {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          series: [
            [5, 9, 7, 8, 5, 3, 5, 4],
            [2, 5, 4, 4, 2, 1, 2, 1]
          ]
        }, {
          low: 0,
          showArea: true,
          fullWidth: true
        });
    };

    me.chart_barv = function() {
        var data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
          ]
        };
        var options = {
          seriesBarDistance: 14,
          axisY: {
            onlyInteger: true
          }
        };
        var responsiveOptions = [
          ['screen and (max-width: 550px)', {
            seriesBarDistance: 9,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        new Chartist.Bar('#chart_barv', data, options, responsiveOptions);
    };
    
    me.chart_barh = function() {
        var data = {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          series: [
            [5, 4, 3.5, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
          ]
        };
        var options = {
          seriesBarDistance: 14,
          reverseData: true,
          horizontalBars: true,
          axisY: {
            offset: 70
          },
          axisX: {
            onlyInteger: true
          }
        };
        var responsiveOptions = [
          ['screen and (max-width: 550px)', {
            seriesBarDistance: 9,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        new Chartist.Bar('#chart_barh', data, options, responsiveOptions);
    };
    
    me.chart_multi = function() {
        var chart = new Chartist.Line('#chart_multi', {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
          // Naming the series with the series object array notation
          series: [{
            name: 'series-1',
            data: [5, 2, -4, 2, 0, -2, 5, -3]
          }, {
            name: 'series-2',
            data: [4, 3, 5, 3, 1, 3, 6, 4]
          }, {
            name: 'series-3',
            data: [2, 4, 3, 1, 4, 5, 3, 2]
          }]
        }, {
          fullWidth: true,
          // Within the series options you can use the series names
          // to specify configuration that will only be used for the
          // specific series.
          series: {
            'series-1': {
              lineSmooth: Chartist.Interpolation.step()
            },
            'series-2': {
              lineSmooth: Chartist.Interpolation.simple(),
              showArea: true
            },
            'series-3': {
              showPoint: false
            }
          }
        }, [
          // You can even use responsive configuration overrides to
          // customize your series configuration even further!
          ['screen and (max-width: 320px)', {
            series: {
              'series-1': {
                lineSmooth: Chartist.Interpolation.none()
              },
              'series-2': {
                lineSmooth: Chartist.Interpolation.none(),
                showArea: false
              },
              'series-3': {
                lineSmooth: Chartist.Interpolation.none(),
                showPoint: true
              }
            }
          }]
        ]);
    };
    
    me.chart_pie = function() {
        var sum = function(a, b) { return a + b; };
        var data = {
          series: [8, 5, 4, 4, 2, 1, 1, 1, 1,]
        };
        var options = {
            labelInterpolationFnc: function(value) {
                return Math.round(value / data.series.reduce(sum) * 100) + '%';
            },
            labelOffset: 40,
        };
        var responsiveOptions = [
          ['screen and (max-width: 550px)', {
            labelOffset: 20
          }]
        ];
        new Chartist.Pie('#chart_pie', data, options, responsiveOptions);
    };
    
    me.chart_gauge = function() {
        var sum = function(a, b) { return a + b; };
        var data = {
            series: [20, 10, 30, 40]
        };
        var options = {
            labelInterpolationFnc: function(value) {
                return Math.round(value / data.series.reduce(sum) * 100) + '%';
            },
            donut: true,
            donutWidth: 110,
            startAngle: 270,
            total: 200,
            showLabel: true,
            labelOffset: 10,
        };
        var responsiveOptions = [
          ['screen and (max-width: 550px)', {
            labelOffset: 5,
            donutWidth: 50,
          }]
        ];
        new Chartist.Pie('#chart_gauge', data, options, responsiveOptions);
    };
    
    me.chart_donut = function() {
        var sum = function(a, b) { return a + b; };
        var data = {
          series: [2, 3, 9, 1, 1, 6, 4]
        };
        var options = {
            labelInterpolationFnc: function(value) {
                return Math.round(value / data.series.reduce(sum) * 100) + '%';
            },
            donut: true,
            donutWidth: 80,
            showLabel: true
        };
        var responsiveOptions = [
          ['screen and (max-width: 550px)', {
            donutWidth: 50,
          }]
        ];
        new Chartist.Pie('#chart_donut', data, options, responsiveOptions);
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
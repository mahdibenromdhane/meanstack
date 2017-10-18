/* dashboard page javascript */
Theme.pages = (function (parent, me) {
    
    var highchart_theme = {
        colors: ['#4a7aab', '#d1cf4b', '#b77270', '#75a04e', '#cb9c38', '#a182ad', '#b4a631', '#986946', '#757575'],
        chart: {
            backgroundColor: null,
        },
        title: {
            style: {
                font: '400 17px Ubuntu, "Trebuchet MS", Helvetica, Arial, sans-serif',
                color: '#000'
            }
        },
        subtitle: {
            style: {
                font: '400 14px Ubuntu, "Trebuchet MS", Helvetica, Arial, sans-serif',
                color: '#666'
            }
        },
        legend: {
            itemStyle: {
                font: '300 9pt Ubuntu, "Trebuchet MS", Helvetica, Arial, sans-serif',
                color: '#000'
            },
            itemHoverStyle:{
                color: '#555'
            }   
        },
    	xAxis: {
    		gridLineWidth: 1,
    		labels: {
    			style: {
    				fontSize: '13px'
    			}
    		}
    	},
    	yAxis: {
    		minorTickInterval: 'auto',
    		minorGridLineColor: '#eee',
    		title: {
    			style: {
    				textTransform: 'uppercase'
    			}
    		},
    		labels: {
    			style: {
    				fontSize: '13px'
    			}
    		}
    	},
    	plotOptions: {
    		candlestick: {
    			lineColor: '#404048'
    		}
    	},
    	credits: {
    	    enabled: false
    	}
    };


    me.init = function() {
        parent.log('Running dashboard page javascript');
        Highcharts.setOptions(highchart_theme);
        $(function() {
            me.chart_gdpcountry();
            me.chart_performance();
            me.chart_targets_3d();
            me.chart_browsing_donut();
            me.timeline_dashboard();
        });
    };
    

    me.chart_browsing_donut = function() {
        var colors = Highcharts.getOptions().colors,
        categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
        data = [{
            y: 56.33,
            color: colors[0],
            drilldown: {
                name: 'MSIE versions',
                categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0', 'MSIE 10.0', 'MSIE 11.0'],
                data: [1.06, 0.5, 17.2, 8.11, 5.33, 24.13],
                color: colors[0]
            }
        }, {
            y: 10.38,
            color: colors[1],
            drilldown: {
                name: 'Firefox versions',
                categories: ['Firefox v31', 'Firefox v32', 'Firefox v33', 'Firefox v35', 'Firefox v36', 'Firefox v37', 'Firefox v38'],
                data: [0.33, 0.15, 0.22, 1.27, 2.76, 2.32, 2.31, 1.02],
                color: colors[1]
            }
        }, {
            y: 24.03,
            color: colors[2],
            drilldown: {
                name: 'Chrome versions',
                categories: ['Chrome v30.0', 'Chrome v31.0', 'Chrome v32.0', 'Chrome v33.0', 'Chrome v34.0',
                    'Chrome v35.0', 'Chrome v36.0', 'Chrome v37.0', 'Chrome v38.0', 'Chrome v39.0', 'Chrome v40.0', 'Chrome v41.0', 'Chrome v42.0', 'Chrome v43.0'
                    ],
                data: [0.14, 1.24, 0.55, 0.19, 0.14, 0.85, 2.53, 0.38, 0.6, 2.96, 5, 4.32, 3.68, 1.45],
                color: colors[2]
            }
        }, {
            y: 4.77,
            color: colors[3],
            drilldown: {
                name: 'Safari versions',
                categories: ['Safari v5.0', 'Safari v5.1', 'Safari v6.1', 'Safari v6.2', 'Safari v7.0', 'Safari v7.1', 'Safari v8.0'],
                data: [0.3, 0.42, 0.29, 0.17, 0.26, 0.77, 2.56],
                color: colors[3]
            }
        }, {
            y: 0.91,
            color: colors[4],
            drilldown: {
                name: 'Opera versions',
                categories: ['Opera v12.x', 'Opera v27', 'Opera v28', 'Opera v29'],
                data: [0.34, 0.17, 0.24, 0.16],
                color: colors[4]
            }
        }, {
            y: 0.2,
            color: colors[5],
            drilldown: {
                name: 'Proprietary or Undetectable',
                categories: [],
                data: [],
                color: colors[5]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;
        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
            // add version data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
    
        // Create the chart
        $('#chart_browsing').highcharts({
            chart: {
                type: 'pie'
            },
            title: {
                // text: 'Browser market share, January, 2015 to May, 2015'
                text: null
            },
            /*
            subtitle: {
                text: 'Source: <a href="http://netmarketshare.com/">netmarketshare.com</a>'
            },
            */
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'Browsers',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -30
                }
            }, {
                name: 'Versions',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function () {
                        // display only if larger than 1
                        return this.y > 2 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
                    }
                }
            }]
        });
    };

    me.chart_gdpcountry = function() {
        var scale = (parent.helpers.viewport().width >= 768) ? 1 : 3;
        $('#chart_gdpcountry').vectorMap({
            map: 'world_mill_en',
            backgroundColor: '#e4ebf1',
            // backgroundColor: '#503d18',
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    stroke: '#000',
                    "stroke-width": 0.4,
                    "stroke-opacity": 0.6
                },
            },
            series: {
                regions: [{
                    values: clientData,
                    scale: ['#f4f266', '#c07035'],
                    normalizeFunction: 'polynomial'
                }]
            },
            onRegionTipShow: function(e, el, code){
                el.html(el.html()+' (Clients - '+clientData[code]+')');
            }
        });
    };
    
    me.chart_performance = function() {
        var legendShow = false;
        if (parent.helpers.viewport().width >= 768) {
            legendShow = true;
        }
        var chart = $('#chart_performance').highcharts({
            chart: {
                type: 'areaspline',
                /*
                events: {
                    load: function(event) {
                        setTimeout(function() { parent.helpers.resizeTrigger(); }, 1000);
                        this.reflow();
                    }
                }
                */
            },
            title: {
                text: null
            },
             xAxis: {
                categories: [
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ],
                title: {
                    text: null
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
                gridLineWidth: 1,
                gridLineDashStyle: "ShortDot",
                gridLineColor: '#eee',
            },
            yAxis: {
                min: -500,
                max: 400,
                title: {
                    text: '€,000'
                },
                gridLineWidth: 1,
                gridLineDashStyle: "ShortDash",
                gridLineColor: '#eee',
                minorGridLineWidth: 0,
            },
            tooltip: {
                shared: true,
                valueSuffix: '',
                crosshairs: true
            },
            legend: {
                enabled: legendShow,
                align: 'right',
                verticalAlign: 'top',
                y: -10,
                floating: true,
            },
            plotOptions: {
                areaspline: {
                    stacking: 'normal',
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Sales',
                data: [10,53,38,80,36,49,63,99,35,79,72,89],
                stack: 'pos'
            },
            {
                name: 'Renewals',
                data: [50,185,296,198,132,99,105,184,98,149,115,38],
                stack: 'pos'
            },
            {
                name: 'Retention',
                data: [35, 65, 70, 45, 140, 132, 18, 25, 72, 55, 10, 25],
                stack: 'pos'
            }, {
                name: 'Travel',
                data: [-75, -82, -85, -93, -79, -90, -195, -105, -58, -119, -82, -39],
                stack: 'neg'
            }, {
                name: 'IT',
                data: [-80, -125, -148, -169, -192, -103, -39, -125, -145, -150, -89, -55],
                stack: 'neg'
            }, {
                name: 'Office',
                data: [-85, -93, -208, -115, -96, -100, -74, -39, -85, -99, -203, -110],
                stack: 'neg'
            }
            ],
        }).highcharts();
        chart.reflow();
        window.charts.highcharts.performance = chart; // register with global charts object
    };
    
    me.chart_targets_3d = function () {
        var legendShow = false;
        if (parent.helpers.viewport().width > 1400) {
            legendShow = true;
        }
        var chart = $('#chart_targets_3d').highcharts({
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 10,
                    beta: 10,
                    viewDistance: 25,
                    depth: 40
                }
            },
            title: {
                text: null,
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                gridLineWidth: 1,
                gridLineDashStyle: 'ShortDot',
                gridLineColor: '#eee'
            },
            yAxis: {
                allowDecimals: false,
                title: null,
                min: 0,
                gridLineWidth: 1,
                gridLineColor: '#ddd',
                gridLineDashStyle: 'ShortDot',
                minorGridLineWidth: 1,
                minorGridLineColor: '#f0f0f0'
            },
            legend: {
                enabled: legendShow,
                align: 'right',
                layout: 'horizontal',
                verticalAlign: 'top',
                margin: 0,
                y: -10,
                floating: true,
            },
            tooltip: {
                formatter: function () {
                    // return '<b>' + this.series.xAxis.categories[this.point.x] + '\'s</b> target for <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>' +
                    return '<b>' + this.series.name + '\'s</b> target for <br><b>' + this.series.xAxis.categories[this.point.x] + '</b>' +
                        ' is: <b>' + this.point.y + '</b> items<br>';
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    depth: 40
                }
            },
            series: [{
                name: 'Fred',
                data: [10, 19, 8, 24, 47, 50],
                stack: 'junior'
            }, {
                name: 'Max',
                data: [92, 98, 98, 105, 125, 115],
                stack: 'senior'
            }, {
                name: 'Bob',
                data: [85, 65, 83, 64, 52, 60],
                stack: 'junior'
            }, {
                name: 'Will',
                data: [72, 82, 65, 75, 86, 90],
                stack: 'senior'
            }, {
                name: 'Sarah',
                data: [8, 15, 18, 27, 45, 50],
                stack: 'junior'
            }, {
                name: 'Elvis',
                data: [88, 62, 93, 105, 120, 124],
                stack: 'senior'
            }]
        }).highcharts();
        chart.reflow();
        window.charts.highcharts.targets3d = chart; // register with global charts object
    };
    
    
    me.timeline_dashboard = function() {
      var container = document.getElementById('timeline_dashboard');
      var items = new vis.DataSet([
        {id: 1, content: 'Review Sales Targets', start: '2016-04-11T09:00', end: '2016-04-11T18:00',  group: 1},
        {id: 2, content: 'Client Meetings', start: '2016-04-12T09:00', end: '2016-04-12T19:00', group: 1},
        {id: 3, content: 'Roundup Meetings', start: '2016-04-13T12:00', end: '2016-04-14T17:00', group: 1},
        {id: 4, content: 'Industry Sales Conference', start: '2016-04-11T09:00', end: '2016-04-13T19:00', group: 1},
        
        {id: 5, content: 'Strategy', start: '2016-04-11T09:00', end: '2016-04-11T15:00', group: 2},
        {id: 6, content: 'Golf', start: '2016-04-12T09:00', end: '2016-04-15T19:00', group: 2},
        
        {id: 7, content: 'Supplier Meetings', start: '2016-04-11T09:00', end: '2016-04-11T17:00', group: 3},
        {id: 8, content: 'Supplier Meetings', start: '2016-04-12T09:00', end: '2016-04-12T17:00', group: 3},
        {id: 9, content: 'Supplier Meetings', start: '2016-04-13T09:00', end: '2016-04-13T17:00', group: 3},
        {id: 10, content: 'Leaving Party', start: '2016-04-11T18:00', end: '2016-04-12T02:00', group: 3},
        
        {id: 11, content: 'Dev Strategy', start: '2016-04-11T09:00', end: '2016-04-11T17:00', group: 4},
        {id: 12, content: 'System Update', start: '2016-04-11T17:30', end: '2016-04-12T08:00', group: 4},
        {id: 13, content: 'Primary Testing', start: '2016-04-12T08:30', end: '2016-04-12T17:00', group: 4},
        {id: 14, content: 'Secondary Testing', start: '2016-04-12T17:15', end: '2016-04-13T08:45', group: 4},
        {id: 15, content: 'Bug Fixing', start: '2016-04-13T09:00', end: '2016-04-15T18:45', group: 4},
        
        {id: 16, content: 'Security Meeting', start: '2016-04-11T09:00', end: '2016-04-11T17:00', group: 5},
        {id: 17, content: 'Air Conditioning Refit', start: '2016-04-12T09:00', end: '2016-04-16T18:00', group: 5},
      ]);
      var groups = new vis.DataSet([
        {id: 1, content: 'Sales Team', className: 'blue-lighter'},
        {id: 2, content: 'Non-Execs', className: 'green-lighter'},
        {id: 3, content: 'Operations', className: 'gold-lighter'},
        {id: 4, content: 'IT Team', className: 'red-lighter'},
        {id: 5, content: 'Estates', className: 'purple-lighter'}
      ]);
      var options = {
        start: '2016-04-11T08:00',
        end: '2016-04-14',
        editable: true,
        showCurrentTime: true,
        margin: {
          item : {
            horizontal : 0
          }
        },
        zoomKey: 'ctrlKey',
        onUpdate: function (item, callback) {
            group = groups.get(item.group);
          // First prepare the modal content form with our data
          $('#schedule-modal').find('#shift_name').val(item.content);
          $('#schedule-modal').addClass('modal-'+group.className.replace('-lighter', ''));
          // Call the modal
          parent.run('modal_custombox', {data: {
            overlay: false,
            effect: 'fadein', 
            target: '#schedule-modal',
            title: 'Office Event: ' + item.content,
            callback_function: function() {
              $('#schedule-modal').removeClass('modal-'+group.className.replace('-lighter', ''));
              _name = $('#schedule-modal').find('#shift_name').val();
              items.update({id: item.id, content: _name});
            }
          }});
          
        },
      };
      
      var timeline = new vis.Timeline(container, items, groups, options);
      window.timeline = timeline;
    };
    
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
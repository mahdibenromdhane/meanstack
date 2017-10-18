/* data-jvectormaps page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-jvectormaps page javascript');
        me.chart_gdpcountry();
        me.chart_usunemployment();
        me.chart_regions();
        me.chart_franceelections();
        me.chart_legends();
    };

    me.chart_gdpcountry = function() {
        $('#chart_gdpcountry').vectorMap({
            map: 'world_mill_en',
            backgroundColor: '#b6cfde',
            regionStyle: {
                initial: {
                    stroke: '#000',
                    "stroke-width": 0.4,
                    "stroke-opacity": 0.6
                },
            },
            series: {
                regions: [{
                    values: gdpData,
                    scale: ['#b4e3ad', '#257b18'],
                    normalizeFunction: 'polynomial'
                }]
            },
            onRegionTipShow: function(e, el, code){
                el.html(el.html()+' (GDP - '+gdpData[code]+')');
            }
        });
    };
        
    me.chart_usunemployment = function() {
        $.getJSON('assets/plugins/jvectormap/data/us-unemployment.json', function(data){
            var val = 2009,
            statesValues = jvm.values.apply({}, jvm.values(data.states)),
            metroPopValues = Array.prototype.concat.apply([], jvm.values(data.metro.population)),
            metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment));
    
            $('#chart_usunemployment').vectorMap({
              map: 'us_aea_en',
              markers: data.metro.coords,
              backgroundColor: '#e9e6ba',
              series: {
                markers: [{
                  attribute: 'fill',
                  scale: ['#FEE5D9', '#A50F15'], // reds
                  values: data.metro.unemployment[val],
                  min: jvm.min(metroUnemplValues),
                  max: jvm.max(metroUnemplValues)
                },{
                  attribute: 'r',
                  scale: [5, 20],
                  values: data.metro.population[val],
                  min: jvm.min(metroPopValues),
                  max: jvm.max(metroPopValues)
                }],
                regions: [{
                  scale: ['#c8e1f3', '#085f9c'], // blues
                  attribute: 'fill',
                  values: data.states[val],
                  min: jvm.min(statesValues),
                  max: jvm.max(statesValues)
                }]
              },
              onMarkerTipShow: function(event, label, index){
                label.html(
                  '<b>'+data.metro.names[index]+'</b><br/>'+
                  '<b>Population: </b>'+data.metro.population[val][index]+'</br>'+
                  '<b>Unemployment rate: </b>'+data.metro.unemployment[val][index]+'%'
                );
              },
              onRegionTipShow: function(event, label, code){
                label.html(
                  '<b>'+label.html()+'</b></br>'+
                  '<b>Unemployment rate: </b>'+data.states[val][code]+'%'
                );
              }
            });
        
            var mapObject = $('#chart_usunemployment').vectorMap('get', 'mapObject');
            
            $("#slider").slider({
                value: val,
                min: 2005,
                max: 2009,
                step: 1,
                slide: function( event, ui ) {
                    val = ui.value;
                    mapObject.series.regions[0].setValues(data.states[ui.value]);
                    mapObject.series.markers[0].setValues(data.metro.unemployment[ui.value]);
                    mapObject.series.markers[1].setValues(data.metro.population[ui.value]);
                }
            });
        });
    };

    me.chart_regions = function() {
        var map,
        markers = [
            {latLng: [52.50, 13.39], name: 'Berlin'},
            {latLng: [53.56, 10.00], name: 'Hamburg'},
            {latLng: [48.13, 11.56], name: 'Munich'},
            {latLng: [50.95, 6.96], name: 'Cologne'},
            {latLng: [50.11, 8.68], name: 'Frankfurt am Main'},
            {latLng: [48.77, 9.17], name: 'Stuttgart'},
            {latLng: [51.23, 6.78], name: 'Düsseldorf'},
            {latLng: [51.51, 7.46], name: 'Dortmund'},
            {latLng: [51.45, 7.01], name: 'Essen'},
            {latLng: [53.07, 8.80], name: 'Bremen'}
        ],
        cityAreaData = [
            887.70,
            755.16,
            310.69,
            405.17,
            248.31,
            207.35,
            217.22,
            280.71,
            210.32,
            325.42
        ];
        map = new jvm.Map({
            container: $('#chart_regions'),
            map: 'de_merc',
            regionsSelectable: true,
            markersSelectable: true,
            markers: markers,
            backgroundColor: '#bbb',
            markerStyle: {
              initial: {
                fill: '#4DAC26' // green
              },
              selected: {
                fill: '#c92d38' // red
              }
            },
            regionStyle: {
                initial: {
                    fill: '#B8E186', // green
                    stroke: '#000',
                    "stroke-width": 1,
                    "stroke-opacity": 1
                },
                selected: {
                    fill: '#F4A582', // red
                    stroke: '#000',
                    "stroke-width": 1,
                    "stroke-opacity": 1
                }
            },
            series: {
              markers: [{
                attribute: 'r',
                scale: [5, 15],
                values: cityAreaData
              }]
            },
            onRegionSelected: function(){
              if (window.localStorage) {
                window.localStorage.setItem(
                  'jvectormap-selected-regions',
                  JSON.stringify(map.getSelectedRegions())
                );
              }
            },
            onMarkerSelected: function(){
              if (window.localStorage) {
                window.localStorage.setItem(
                  'jvectormap-selected-markers',
                  JSON.stringify(map.getSelectedMarkers())
                );
              }
            }
        });
        map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
        map.setSelectedMarkers( JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ) );  
    };
    
    me.chart_franceelections = function() {
        $.getJSON('assets/plugins/jvectormap/data/france-elections.json', function(data){
            new jvm.Map({
                map: 'fr_regions_merc',
                backgroundColor: '#bbb',
                container: $('#chart_franceelections2007'),
                regionStyle: {
                    initial: {
                        fill: 'white',
                        "fill-opacity": 1,
                        stroke: '#000',
                        "stroke-width": 1,
                        "stroke-opacity": 1
                    },
                },
                series: {
                    regions: [{
                        scale: {
                            '1': '#2779b2', // blue
                            '2': '#c35757' // red
                        },
                        attribute: 'fill',
                        legend: {
                            vertical: true,
                            title: 'Key',
                            labelRender: function(v){
                                return {
                                    1: 'Nicolas Sarkozy', // blue
                                    2: 'Ségolène Royal'   // red
                                }[v];
                            }
                        },
                        values: data.year2007.results
                    }]
                }
            });
            new jvm.Map({
                map: 'fr_regions_merc',
                backgroundColor: '#bbb',
                container: $('#chart_franceelections2012'),
                regionStyle: {
                    initial: {
                        fill: 'white',
                        "fill-opacity": 1,
                        stroke: '#000',
                        "stroke-width": 1,
                        "stroke-opacity": 1
                    },
                },
                series: {
                    regions: [{
                        scale: {
                            '1': '#c35757', // red
                            '2': '#2779b2' // blue
                        },
                        attribute: 'fill',
                        legend: {
                            vertical: true,
                            title: 'Key',
                            labelRender: function(v){
                                return {
                                    1: 'François Hollande', // red
                                    2: 'Nicolas Sarkozy'    // blue
                                }[v];
                            }
                        },
                        values: data.year2012.results
                    }]
                }
            });
        });
    };
    
    me.chart_legends = function() {
        new jvm.Map({
        container: $('#chart_legends'),
        map: 'us_aea_en',
        backgroundColor: '#b6cfde',
        markers: [
          [61.18, -149.53],
          [21.18, -157.49],
          [40.66, -73.56],
          [41.52, -87.37],
          [35.22, -80.84],
          [31.52, -87.37]
        ],
        regionStyle: {
            initial: {
                fill: '#74996e',
                "fill-opacity": 1
            },
        },
        series: {
          markers: [{
            attribute: 'fill',
            scale: ['#c8e1f3', '#085f9c'],
            normalizeFunction: 'polynomial',
            values: [408, 512, 550, 781],
            legend: {
              vertical: true
            }
          },{
            attribute: 'image',
            scale: {
              bank: 'assets/plugins/jvectormap/img/icon-bank.png',
              factory: 'assets/plugins/jvectormap/img/icon-factory.png'
            },
            values: {
              '4': 'bank',
              '5': 'factory'
            },
            legend: {
              horizontal: true,
              cssClass: 'jvectormap-legend-icons',
              title: 'Business type'
            }
          }],
          regions: [{
            scale: {
              red: '#c92d38',
              sand: '#ddd37d'
            },
            attribute: 'fill',
            values: {
              "US-KS": 'red',
              "US-MO": 'red',
              "US-IA": 'sand',
              "US-NE": 'sand'
            },
            legend: {
              horizontal: true,
              title: 'Color'
            }
          },{
            scale: {
              redGreen: 'assets/plugins/jvectormap/img/bg-red-green.png',
              yellowBlue: 'assets/plugins/jvectormap/img/bg-yellow-blue.png'
            },
            values: {
              "US-TX": 'redGreen',
              "US-CA": 'yellowBlue'
            },
            attribute: 'fill',
            legend: {
              horizontal: true,
              cssClass: 'jvectormap-legend-bg',
              title: 'Pattern',
              labelRender: function(v){
                return {
                  redGreen: 'low',
                  yellowBlue: 'high'
                }[v];
              }
            }
          }]
        }
      });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
/* data-googlemaps page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-googlemaps page javascript');
        me.map_basic();
        me.map_context();
        me.map_markers();
        me.map_overlays();
        me.map_geojson();
        me.map_routing();
        me.map_fusiontable();
        me.map_streetview();
    };

    me.map_basic = function() {
        map = new GMaps({
            div: '#map_basic',
            lat: 51.7535128,
            lng: -1.258679
        });
    };
    
    me.map_context = function() {
        map = new GMaps({
            div: '#map_context',
            lat: 53.402,
            lng: -2.984,
        });
        map.setContextMenu({
            control: 'map',
            options: [{
                title: 'Add marker',
                name: 'add_marker',
                action: function(e) {
                    this.addMarker({
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng(),
                        title: 'New marker'
                    });
                }
            }, {
                title: 'Center here',
                name: 'center_here',
                action: function(e) {
                    this.setCenter(e.latLng.lat(), e.latLng.lng());
                }
            }]
        });
    };
    
    me.map_markers = function() {
        var map;
        $(document).ready(function(){
            map = new GMaps({
                el: '#map_markers',
                lat: 51.7535128,
                lng: -1.258679
            });
            map.addMarker({
                lat: 51.7546884,
                lng: -1.2530101,
                title: 'The Turf Tavern',
                details: {
                    database_id: 123,
                    author: 'Drinker'
                },
                click: function(e){
                    alert('This is The Turf Tavern - unchanged for decades!');
                },
                mouseover: function(e){
                }
            });
            map.addMarker({
                lat: 51.7520184,
                lng: -1.2564192,
                title: 'Marker with InfoWindow',
                infoWindow: {
                    content: '<h3>The Chequers</h3><p>HTML content here.</p>'
                }
            });
            map.addMarker({
                lat: 51.7556534,
                lng: -1.259031,
                title: 'Marker with InfoWindow',
                infoWindow: {
                    content: '<h3>Parking</h3><p>HTML content here.</p><p>HTML content here.</p><p>HTML content here.</p><p>HTML content here.</p>'
                }
            });
            map.drawOverlay({
                lat: 51.7517179,
                lng: -1.2587997,
                content: '<div class="gm-overlay"><h3>Maxwells</h3><p>Best burgers<br>in Oxford</p><div class="gm-overlay_arrow below"></div></div>',
                verticalAlign: 'top',
                horizontalAlign: 'center',
                verticalOffset: 65
            });
            map.drawOverlay({
                lat: 51.7533431,
                lng: -1.2638295,
                content: '<div class="gm-overlay"><h3>Car Park</h3><p>short-stay</p><div class="gm-overlay_arrow above"></div></div>',
                verticalAlign: 'top',
                horizontalAlign: 'center',
                verticalOffset: -20
            });
        });
    };

    me.map_overlays = function() {
        var map;
        $(document).ready(function(){
            map = new GMaps({
                el: '#map_overlays',
                lat: 53.402,
                lng: -2.984,
            });
            map.drawOverlay({
                lat: 53.404,
                lng: -2.994,
                content: '<div class="gm-overlay brand1"><h3>Brand1</h3><p>.gm-overlay<br>.brand1</p><div class="gm-overlay_arrow below"></div></div>',
            });
            map.drawOverlay({
                lat: 53.404,
                lng: -2.990,
                content: '<div class="gm-overlay brand2"><h3>Brand2</h3><p>.gm-overlay<br>.brand2</p><div class="gm-overlay_arrow below"></div></div>',
            });
            map.drawOverlay({
                lat: 53.404,
                lng: -2.986,
                content: '<div class="gm-overlay blue"><h3>Blue</h3><p>.gm-overlay<br>.blue</p><div class="gm-overlay_arrow below"></div></div>',
            });
            map.drawOverlay({
                lat: 53.404,
                lng: -2.982,
                content: '<div class="gm-overlay yellow"><h3>Yellow</h3><p>.gm-overlay<br>.yellow</p><div class="gm-overlay_arrow below"></div></div>',
            });
            map.drawOverlay({
                lat: 53.404,
                lng: -2.978,
                content: '<div class="gm-overlay red"><h3>Red</h3><p>.gm-overlay<br>.red</p><div class="gm-overlay_arrow below"></div></div>',
            });
            map.drawOverlay({
                lat: 53.404,
                lng: -2.974,
                content: '<div class="gm-overlay green"><h3>Green</h3><p>.gm-overlay<br>.green</p><div class="gm-overlay_arrow below"></div></div>',
            });
            map.drawOverlay({
                lat: 53.4005,
                lng: -2.994,
                content: '<div class="gm-overlay orange"><h3>Orange</h3><p>.gm-overlay<br>.orange</p><div class="gm-overlay_arrow above"></div></div>',
            });
            map.drawOverlay({
                lat: 53.4005,
                lng: -2.990,
                content: '<div class="gm-overlay purple"><h3>Purple</h3><p>.gm-overlay<br>.purple</p><div class="gm-overlay_arrow above"></div></div>',
            });
            map.drawOverlay({
                lat: 53.4005,
                lng: -2.986,
                content: '<div class="gm-overlay gold"><h3>Gold</h3><p>.gm-overlay<br>.gold</p><div class="gm-overlay_arrow above"></div></div>',
            });
            map.drawOverlay({
                lat: 53.4005,
                lng: -2.982,
                content: '<div class="gm-overlay bronze"><h3>Bronze</h3><p>.gm-overlay<br>.bronze</p><div class="gm-overlay_arrow above"></div></div>',
            });
            map.drawOverlay({
                lat: 53.4005,
                lng: -2.978,
                content: '<div class="gm-overlay silver"><h3>Silver</h3><p>.gm-overlay<br>.silver</p><div class="gm-overlay_arrow above"></div></div>',
            });
            map.drawOverlay({
                lat: 53.4005,
                lng: -2.974,
                content: '<div class="gm-overlay grey"><h3>Grey</h3><p>.gm-overlay<br>.grey</p><div class="gm-overlay_arrow above"></div></div>',
            });
        });
    };
    
    me.map_geojson = function() {
        var map, path, paths;
        $(document).ready(function(){
            map = new GMaps({
                el: '#map_geojson',
                lat: 25,
                lng: -72,
                zoom: 5,
                click: function(e){
                },
            });
            path = [[25.774,-80.190], [18.466,-66.118], [32.321,-64.757]];
            map.drawPolygon({
                paths: path,
                strokeColor: '#ff0000',
                fillColor: '#ff0000',
                strokeOpacity: 0.3,
                strokeWeight: 3
            });
        });
    };
    
    me.map_routing = function() {
        var map;
        $(document).ready(function(){
            map = new GMaps({
                el: '#map_routing',
                lat: 53.402,
                lng: -2.984,
            });
            map.travelRoute({
                origin: [53.4021322,-2.9844629],
                destination: [53.4046334,-2.9799126],
                travelMode: 'driving',
                step: function(e){
                    $('#instructions').append('<li>'+e.instructions+'</li>');
                    $('#instructions li:eq('+e.step_number+')').delay(450*e.step_number).fadeIn(200, function(){
                        map.drawPolyline({
                            path: e.path,
                            strokeColor: '#131540',
                            strokeOpacity: 0.6,
                            strokeWeight: 6
                        });  
                    });
                }
            });
        });
    };
    
    
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 51.501904, lng: -0.115871}
        });
        var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);
    }


    
    me.map_fusiontable = function() {
        var map, infoWindow;
        $(document).ready(function(){
            infoWindow = new google.maps.InfoWindow({});
            map = new GMaps({
                el: '#map_fusiontable',
                zoom: 11,
                lat: 41.850033,
                lng: -87.6500523,
                mapType: 'satellite'
            });
            map.loadFromFusionTables({
                query: {
                    select: '\'Geocodable address\'',
                    from: '1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg'
                },
                suppressInfoWindows: true,
            });
        });
    };
    
    me.map_streetview = function() {
        var panorama;
        $(document).ready(function(){
            panorama = GMaps.createPanorama({
                el: '#map_streetview',
                lat: 51.7544492,
                lng: -1.2540429,
                pov: {
                  heading: 65,
                  pitch: 5
                },
            });
        });
    };
    
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
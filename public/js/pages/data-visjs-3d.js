/* data-visjs-3d page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-visjs-3d page javascript');
        me.vis3d_basic();
        me.vis3d_animated();
        me.vis3d_dotcloud();
        me.vis3d_dotanimated();
        me.vis3d_resizehandler();
    };

  me.vis3d_basic = function() {
    // Create and populate a data table.
    var data = new vis.DataSet();
    // create some nice looking data with sin/cos
    var counter = 0;
    var steps = 50;  // number of datapoints will be steps*steps
    var axisMax = 314;
    var axisStep = axisMax / steps;
    for (var x = 0; x < axisMax; x+=axisStep) {
        for (var y = 0; y < axisMax; y+=axisStep) {
            var value = (Math.sin(x/50) * Math.cos(y/50) * 50 + 50);
            data.add({id:counter++,x:x,y:y,z:value,style:value});
        }
    }

    // specify options
    var options = {
        width:  '100%',
        height: '100%',
        style: 'surface',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5,
        // dataColor: '#ff3300'
        dataColor: {
          fill: '#7DC1FF',
          stroke: '#3267D2',
          strokeWidth: 1  // px
        },
        cameraPosition: {
          horizontal: 1.0,
          vertical: 0.1,
          distance: 1.7,
        }
    };

    // Instantiate our graph object.
    var container = document.getElementById('vis3d_basic');
    var graph3d = new vis.Graph3d(container, data, options);
    window.charts.graph3d = graph3d;
 	};
 	
 	me.vis3d_animated = function() {
 	      var data = null;
    var graph = null;

    function custom(x, y, t) {
      return Math.sin(x/50 + t/10) * Math.cos(y/50 + t/10) * 50 + 50;
    }

    // Called when the Visualization API is loaded.
    function drawVisualization() {
      // Create and populate a data table.
      data = new vis.DataSet();
      // create some nice looking data with sin/cos
      var steps = 25;
      var axisMax = 314;
      var tMax = 31;
      var axisStep = axisMax / steps;
      for (var t = 0; t < tMax; t++) {
        for (var x = 0; x < axisMax; x+=axisStep) {
          for (var y = 0; y < axisMax; y+=axisStep) {
            var value = custom(x, y, t);
            data.add([
              {x:x,y:y,z:value,filter:t,style:value}
            ]);
          }
        }
      }

      // specify options
      var options = {
        width:  '100%',
        height: '100%',
        style: 'surface',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        showAnimationControls: true,
        keepAspectRatio: true,
        verticalRatio: 0.5,
        animationInterval: 25, // milliseconds
        animationPreload: true,
        filterValue: 'time',
        cameraPosition: {
          horizontal: 1.0,
          vertical: 0.2,
          distance: 1.7,
        }
      };

      // create our graph
      var container = document.getElementById('vis3d_animated');
      var graph = new vis.Graph3d(container, data, options);
      window.charts.graph3d_animated = graph;
    }
    
    drawVisualization();
 	};

  me.vis3d_dotcloud = function() {
       var data = null;
    var graph = null;


    // Called when the Visualization API is loaded.
    function drawVisualization() {
      // create the data table.
      data = new vis.DataSet();

      // create some shortcuts to math functions
      var sqrt = Math.sqrt;
      var pow = Math.pow;
      var random = Math.random;

      // create the animation data
      var imax = 100;
      for (var i = 0; i < imax; i++) {
        var x = pow(random(), 2);
        var y = pow(random(), 2);
        var z = pow(random(), 2);
        var dist = sqrt(pow(x, 2) + pow(y, 2) + pow(z, 2));

        data.add({x:x,y:y,z:z,style:dist});
      }

      // specify options
      var options = {
        width:  '100%',
        height: '100%',
        style: 'dot-color',
        showPerspective: true,
        showGrid: true,
        keepAspectRatio: true,
        verticalRatio: 0.8,
        legendLabel: 'distance',
        cameraPosition: {
          horizontal: -0.35,
          vertical: 0.05,
          distance: 2.0
        }
      };

      // create our graph
      var container = document.getElementById('vis3d_dotcloud');
      var graph = new vis.Graph3d(container, data, options);
      window.charts.graph3d_dotcloud = graph;
    }
    
    drawVisualization();
  };
  
  me.vis3d_dotanimated = function() {
    var data = null;
    var graph = null;

    // Called when the Visualization API is loaded.
    function drawVisualization() {
      // create the data table.
      data = new vis.DataSet();

      // create some shortcuts to math functions
      var sin = Math.sin;
      var cos = Math.cos;
      var pi = Math.PI;

      // create the animation data
      var tmax = 2.0 * pi;
      var tstep = tmax / 75;
      var dotCount = 1;  // set this to 1, 2, 3, 4, ...
      for (var t = 0; t < tmax; t += tstep) {
        var tgroup = parseFloat(t.toFixed(2));
        var value = t;

        // a dot in the center
        data.add( {x:0,y:0,z:0,filter:tgroup,style:value});

        // one or multiple dots moving around the center
        for (var dot = 0; dot < dotCount; dot++) {
          var tdot = t + 2*pi * dot / dotCount;
          data.add( {x:sin(tdot),y:cos(tdot),z:sin(tdot),filter:tgroup,style:value});
          data.add( {x:sin(tdot),y:-cos(tdot),z:sin(tdot + tmax*1/2),filter:tgroup,style:value});
        }
      }

      // specify options
      var options = {
        width:  '100%',
        height: '100%',
        style: 'dot-color',
        showPerspective: true,
        showGrid: true,
        keepAspectRatio: true,
        verticalRatio: 1.0,
        animationInterval: 35, // milliseconds
        animationPreload: false,
        animationAutoStart: false,
        legendLabel: 'color value',
        cameraPosition: {
          horizontal: 2.7,
          vertical: 0.0,
          distance: 1.9
        }
      };

      // create our graph
      var container = document.getElementById('vis3d_dotanimated');
      var graph = new vis.Graph3d(container, data, options);
      window.charts.graph3d_dotanimated = graph;
    }
    
    drawVisualization();
  };
  
  me.vis3d_resizehandler = function() {
    var vis3d_resize = function() {
      $.each(window.charts, function(el) {
        window.charts[el].redraw();
      });
    };
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(vis3d_resize, 100);
    });
  };
  
  return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
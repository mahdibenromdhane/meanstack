/* data-visjs-network page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-visjs-network page javascript');
        me.network_basic();
        me.network_shadowgroups();
        me.network_scalenodes();
        me.network_physics();
        me.network_lesmis();
    };

 	me.network_basic = function() {
 		  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
  ]);

  // create a network
  var container = document.getElementById('network_basic');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
 	};
    
    me.network_shadowgroups = function() {
      var nodes = [{id: 0, label: "0", group: 0},
        {id: 1, label: "1", group: 0},
        {id: 2, label: "2", group: 0},
        {id: 3, label: "3", group: 1},
        {id: 4, label: "4", group: 1},
        {id: 5, label: "5", group: 1},
        {id: 6, label: "6", group: 2},
        {id: 7, label: "7", group: 2},
        {id: 8, label: "8", group: 2},
        {id: 9, label: "9", group: 3},
        {id: 10, label: "10", group: 3},
        {id: 11, label: "11", group: 3},
        {id: 12, label: "12", group: 4},
        {id: 13, label: "13", group: 4},
        {id: 14, label: "14", group: 4},
        {id: 15, label: "15", group: 5},
        {id: 16, label: "16", group: 5},
        {id: 17, label: "17", group: 5},
        {id: 18, label: "18", group: 6},
        {id: 19, label: "19", group: 6},
        {id: 20, label: "20", group: 6},
        {id: 21, label: "21", group: 7},
        {id: 22, label: "22", group: 7},
        {id: 23, label: "23", group: 7},
        {id: 24, label: "24", group: 8},
        {id: 25, label: "25", group: 8},
        {id: 26, label: "26", group: 8},
        {id: 27, label: "27", group: 9},
        {id: 28, label: "28", group: 9},
        {id: 29, label: "29", group: 9}
    ];
    var edges = [{from: 1, to: 0},
        {from: 2, to: 0},
        {from: 4, to: 3},
        {from: 5, to: 4},
        {from: 4, to: 0},
        {from: 7, to: 6},
        {from: 8, to: 7},
        {from: 7, to: 0},
        {from: 10, to: 9},
        {from: 11, to: 10},
        {from: 10, to: 4},
        {from: 13, to: 12},
        {from: 14, to: 13},
        {from: 13, to: 0},
        {from: 16, to: 15},
        {from: 17, to: 15},
        {from: 15, to: 10},
        {from: 19, to: 18},
        {from: 20, to: 19},
        {from: 19, to: 4},
        {from: 22, to: 21},
        {from: 23, to: 22},
        {from: 22, to: 13},
        {from: 25, to: 24},
        {from: 26, to: 25},
        {from: 25, to: 7},
        {from: 28, to: 27, shadow:{color:'rgb(0,255,0)'}},
        {from: 29, to: 28},
        {from: 28, to: 0}
    ];

    // create a network
    var container = document.getElementById('network_shadowgroups');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes: {
            shape: 'dot',
            size: 30,
            font: {
                size: 32
            },
            borderWidth: 2,
            shadow:true
        },
        edges: {
            width: 2,
            shadow:true
        }
    };
    network = new vis.Network(container, data, options);
    };
    
    me.network_scalenodes = function() {
    	    var nodes = null;
    var edges = null;
    var network = null;

    function draw() {
      // create people.
      // value corresponds with the age of the person
      nodes = [
        {id: 1,  value: 2,  label: 'Algie' },
        {id: 2,  value: 31, label: 'Alston'},
        {id: 3,  value: 12, label: 'Barney'},
        {id: 4,  value: 16, label: 'Coley' },
        {id: 5,  value: 17, label: 'Grant' },
        {id: 6,  value: 15, label: 'Langdon'},
        {id: 7,  value: 6,  label: 'Lee'},
        {id: 8,  value: 5,  label: 'Merlin'},
        {id: 9,  value: 30, label: 'Mick'},
        {id: 10, value: 18, label: 'Tod'},
      ];

      // create connections between people
      // value corresponds with the amount of contact between two people
      edges = [
        {from: 2, to: 8, value: 3, title: '3 emails per week'},
        {from: 2, to: 9, value: 5, title: '5 emails per week'},
        {from: 2, to: 10,value: 1, title: '1 emails per week'},
        {from: 4, to: 6, value: 8, title: '8 emails per week'},
        {from: 5, to: 7, value: 2, title: '2 emails per week'},
        {from: 4, to: 5, value: 1, title: '1 emails per week'},
        {from: 9, to: 10,value: 2, title: '2 emails per week'},
        {from: 2, to: 3, value: 6, title: '6 emails per week'},
        {from: 3, to: 9, value: 4, title: '4 emails per week'},
        {from: 5, to: 3, value: 1, title: '1 emails per week'},
        {from: 2, to: 7, value: 4, title: '4 emails per week'}
      ];

      // Instantiate our network object.
      var container = document.getElementById('network_scalenodes');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {
        nodes: {
          shape: 'dot',
          scaling:{
            label: {
              min:8,
              max:20
            }
          }
        }
      };
      network = new vis.Network(container, data, options);
    }
    draw();
    };
    
    me.network_physics = function() {
      function getScaleFreeNetwork(nodeCount) {
  var nodes = [];
  var edges = [];
  var from, to;
  var connectionCount = [];

  // randomly create some nodes and edges
  for (var i = 0; i < nodeCount; i++) {
    nodes.push({
      id: i,
      label: String(i)
    });

    connectionCount[i] = 0;

    // create edges in a scale-free-network way
    if (i == 1) {
      from = i;
      to = 0;
      edges.push({
        from: from,
        to: to
      });
      connectionCount[from]++;
      connectionCount[to]++;
    }
    else if (i > 1) {
      var conn = edges.length * 2;
      var rand = Math.floor(Math.random() * conn);
      var cum = 0;
      var j = 0;
      while (j < connectionCount.length && cum < rand) {
        cum += connectionCount[j];
        j++;
      }


      from = i;
      to = j;
      edges.push({
        from: from,
        to: to
      });
      connectionCount[from]++;
      connectionCount[to]++;
    }
  }

  return {nodes:nodes, edges:edges};
}

    	   var nodes = null;
    var edges = null;
    var network = null;

    function draw() {
      nodes = [];
      edges = [];
      // randomly create some nodes and edges
      var data = getScaleFreeNetwork(60);

      // create a network
      var container = document.getElementById('network_physics');

      var options = {
        physics: {
          stabilization: false
        },
        configure: {
          filter:function (option, path) {
            if (path.indexOf('physics') !== -1) {
              return true;
            }
            if (path.indexOf('smooth') !== -1 || option === 'smooth') {
              return true;
            }
            return false;
          },
          container: document.getElementById('config')
        }
      };
      network = new vis.Network(container, data, options);
    }
    draw();
    };
    
    me.network_lesmis = function() {
    	        function draw() {
            // create some nodes
            var nodes = [
                {id: 0, "label": "Myriel", "group": 1},
                {id: 1, "label": "Napoleon", "group": 1},
                {id: 2, "label": "Mlle.Baptistine", "group": 1},
                {id: 3, "label": "Mme.Magloire", "group": 1},
                {id: 4, "label": "CountessdeLo", "group": 1},
                {id: 5, "label": "Geborand", "group": 1},
                {id: 6, "label": "Champtercier", "group": 1},
                {id: 7, "label": "Cravatte", "group": 1},
                {id: 8, "label": "Count", "group": 1},
                {id: 9, "label": "OldMan", "group": 1},
                {id: 10, "label": "Labarre", "group": 2},
                {id: 11, "label": "Valjean", "group": 2},
                {id: 12, "label": "Marguerite", "group": 3},
                {id: 13, "label": "Mme.deR", "group": 2},
                {id: 14, "label": "Isabeau", "group": 2},
                {id: 15, "label": "Gervais", "group": 2},
                {id: 16, "label": "Tholomyes", "group": 3},
                {id: 17, "label": "Listolier", "group": 3},
                {id: 18, "label": "Fameuil", "group": 3},
                {id: 19, "label": "Blacheville", "group": 3},
                {id: 20, "label": "Favourite", "group": 3},
                {id: 21, "label": "Dahlia", "group": 3},
                {id: 22, "label": "Zephine", "group": 3},
                {id: 23, "label": "Fantine", "group": 3},
                {id: 24, "label": "Mme.Thenardier", "group": 4},
                {id: 25, "label": "Thenardier", "group": 4},
                {id: 26, "label": "Cosette", "group": 5},
                {id: 27, "label": "Javert", "group": 4},
                {id: 28, "label": "Fauchelevent", "group": 0},
                {id: 29, "label": "Bamatabois", "group": 2},
                {id: 30, "label": "Perpetue", "group": 3},
                {id: 31, "label": "Simplice", "group": 2},
                {id: 32, "label": "Scaufflaire", "group": 2},
                {id: 33, "label": "Woman1", "group": 2},
                {id: 34, "label": "Judge", "group": 2},
                {id: 35, "label": "Champmathieu", "group": 2},
                {id: 36, "label": "Brevet", "group": 2},
                {id: 37, "label": "Chenildieu", "group": 2},
                {id: 38, "label": "Cochepaille", "group": 2},
                {id: 39, "label": "Pontmercy", "group": 4},
                {id: 40, "label": "Boulatruelle", "group": 6},
                {id: 41, "label": "Eponine", "group": 4},
                {id: 42, "label": "Anzelma", "group": 4},
                {id: 43, "label": "Woman2", "group": 5},
                {id: 44, "label": "MotherInnocent", "group": 0},
                {id: 45, "label": "Gribier", "group": 0},
                {id: 46, "label": "Jondrette", "group": 7},
                {id: 47, "label": "Mme.Burgon", "group": 7},
                {id: 48, "label": "Gavroche", "group": 8},
                {id: 49, "label": "Gillenormand", "group": 5},
                {id: 50, "label": "Magnon", "group": 5},
                {id: 51, "label": "Mlle.Gillenormand", "group": 5},
                {id: 52, "label": "Mme.Pontmercy", "group": 5},
                {id: 53, "label": "Mlle.Vaubois", "group": 5},
                {id: 54, "label": "Lt.Gillenormand", "group": 5},
                {id: 55, "label": "Marius", "group": 8},
                {id: 56, "label": "BaronessT", "group": 5},
                {id: 57, "label": "Mabeuf", "group": 8},
                {id: 58, "label": "Enjolras", "group": 8},
                {id: 59, "label": "Combeferre", "group": 8},
                {id: 60, "label": "Prouvaire", "group": 8},
                {id: 61, "label": "Feuilly", "group": 8},
                {id: 62, "label": "Courfeyrac", "group": 8},
                {id: 63, "label": "Bahorel", "group": 8},
                {id: 64, "label": "Bossuet", "group": 8},
                {id: 65, "label": "Joly", "group": 8},
                {id: 66, "label": "Grantaire", "group": 8},
                {id: 67, "label": "MotherPlutarch", "group": 9},
                {id: 68, "label": "Gueulemer", "group": 4},
                {id: 69, "label": "Babet", "group": 4},
                {id: 70, "label": "Claquesous", "group": 4},
                {id: 71, "label": "Montparnasse", "group": 4},
                {id: 72, "label": "Toussaint", "group": 5},
                {id: 73, "label": "Child1", "group": 10},
                {id: 74, "label": "Child2", "group": 10},
                {id: 75, "label": "Brujon", "group": 4},
                {id: 76, "label": "Mme.Hucheloup", "group": 8}
            ];

            // create some edges
            var edges = [
                {"from": 1, "to": 0},
                {"from": 2, "to": 0},
                {"from": 3, "to": 0},
                {"from": 3, "to": 2},
                {"from": 4, "to": 0},
                {"from": 5, "to": 0},
                {"from": 6, "to": 0},
                {"from": 7, "to": 0},
                {"from": 8, "to": 0},
                {"from": 9, "to": 0},
                {"from": 11, "to": 10},
                {"from": 11, "to": 3},
                {"from": 11, "to": 2},
                {"from": 11, "to": 0},
                {"from": 12, "to": 11},
                {"from": 13, "to": 11},
                {"from": 14, "to": 11},
                {"from": 15, "to": 11},
                {"from": 17, "to": 16},
                {"from": 18, "to": 16},
                {"from": 18, "to": 17},
                {"from": 19, "to": 16},
                {"from": 19, "to": 17},
                {"from": 19, "to": 18},
                {"from": 20, "to": 16},
                {"from": 20, "to": 17},
                {"from": 20, "to": 18},
                {"from": 20, "to": 19},
                {"from": 21, "to": 16},
                {"from": 21, "to": 17},
                {"from": 21, "to": 18},
                {"from": 21, "to": 19},
                {"from": 21, "to": 20},
                {"from": 22, "to": 16},
                {"from": 22, "to": 17},
                {"from": 22, "to": 18},
                {"from": 22, "to": 19},
                {"from": 22, "to": 20},
                {"from": 22, "to": 21},
                {"from": 23, "to": 16},
                {"from": 23, "to": 17},
                {"from": 23, "to": 18},
                {"from": 23, "to": 19},
                {"from": 23, "to": 20},
                {"from": 23, "to": 21},
                {"from": 23, "to": 22},
                {"from": 23, "to": 12},
                {"from": 23, "to": 11},
                {"from": 24, "to": 23},
                {"from": 24, "to": 11},
                {"from": 25, "to": 24},
                {"from": 25, "to": 23},
                {"from": 25, "to": 11},
                {"from": 26, "to": 24},
                {"from": 26, "to": 11},
                {"from": 26, "to": 16},
                {"from": 26, "to": 25},
                {"from": 27, "to": 11},
                {"from": 27, "to": 23},
                {"from": 27, "to": 25},
                {"from": 27, "to": 24},
                {"from": 27, "to": 26},
                {"from": 28, "to": 11},
                {"from": 28, "to": 27},
                {"from": 29, "to": 23},
                {"from": 29, "to": 27},
                {"from": 29, "to": 11},
                {"from": 30, "to": 23},
                {"from": 31, "to": 30},
                {"from": 31, "to": 11},
                {"from": 31, "to": 23},
                {"from": 31, "to": 27},
                {"from": 32, "to": 11},
                {"from": 33, "to": 11},
                {"from": 33, "to": 27},
                {"from": 34, "to": 11},
                {"from": 34, "to": 29},
                {"from": 35, "to": 11},
                {"from": 35, "to": 34},
                {"from": 35, "to": 29},
                {"from": 36, "to": 34},
                {"from": 36, "to": 35},
                {"from": 36, "to": 11},
                {"from": 36, "to": 29},
                {"from": 37, "to": 34},
                {"from": 37, "to": 35},
                {"from": 37, "to": 36},
                {"from": 37, "to": 11},
                {"from": 37, "to": 29},
                {"from": 38, "to": 34},
                {"from": 38, "to": 35},
                {"from": 38, "to": 36},
                {"from": 38, "to": 37},
                {"from": 38, "to": 11},
                {"from": 38, "to": 29},
                {"from": 39, "to": 25},
                {"from": 40, "to": 25},
                {"from": 41, "to": 24},
                {"from": 41, "to": 25},
                {"from": 42, "to": 41},
                {"from": 42, "to": 25},
                {"from": 42, "to": 24},
                {"from": 43, "to": 11},
                {"from": 43, "to": 26},
                {"from": 43, "to": 27},
                {"from": 44, "to": 28},
                {"from": 44, "to": 11},
                {"from": 45, "to": 28},
                {"from": 47, "to": 46},
                {"from": 48, "to": 47},
                {"from": 48, "to": 25},
                {"from": 48, "to": 27},
                {"from": 48, "to": 11},
                {"from": 49, "to": 26},
                {"from": 49, "to": 11},
                {"from": 50, "to": 49},
                {"from": 50, "to": 24},
                {"from": 51, "to": 49},
                {"from": 51, "to": 26},
                {"from": 51, "to": 11},
                {"from": 52, "to": 51},
                {"from": 52, "to": 39},
                {"from": 53, "to": 51},
                {"from": 54, "to": 51},
                {"from": 54, "to": 49},
                {"from": 54, "to": 26},
                {"from": 55, "to": 51},
                {"from": 55, "to": 49},
                {"from": 55, "to": 39},
                {"from": 55, "to": 54},
                {"from": 55, "to": 26},
                {"from": 55, "to": 11},
                {"from": 55, "to": 16},
                {"from": 55, "to": 25},
                {"from": 55, "to": 41},
                {"from": 55, "to": 48},
                {"from": 56, "to": 49},
                {"from": 56, "to": 55},
                {"from": 57, "to": 55},
                {"from": 57, "to": 41},
                {"from": 57, "to": 48},
                {"from": 58, "to": 55},
                {"from": 58, "to": 48},
                {"from": 58, "to": 27},
                {"from": 58, "to": 57},
                {"from": 58, "to": 11},
                {"from": 59, "to": 58},
                {"from": 59, "to": 55},
                {"from": 59, "to": 48},
                {"from": 59, "to": 57},
                {"from": 60, "to": 48},
                {"from": 60, "to": 58},
                {"from": 60, "to": 59},
                {"from": 61, "to": 48},
                {"from": 61, "to": 58},
                {"from": 61, "to": 60},
                {"from": 61, "to": 59},
                {"from": 61, "to": 57},
                {"from": 61, "to": 55},
                {"from": 62, "to": 55},
                {"from": 62, "to": 58},
                {"from": 62, "to": 59},
                {"from": 62, "to": 48},
                {"from": 62, "to": 57},
                {"from": 62, "to": 41},
                {"from": 62, "to": 61},
                {"from": 62, "to": 60},
                {"from": 63, "to": 59},
                {"from": 63, "to": 48},
                {"from": 63, "to": 62},
                {"from": 63, "to": 57},
                {"from": 63, "to": 58},
                {"from": 63, "to": 61},
                {"from": 63, "to": 60},
                {"from": 63, "to": 55},
                {"from": 64, "to": 55},
                {"from": 64, "to": 62},
                {"from": 64, "to": 48},
                {"from": 64, "to": 63},
                {"from": 64, "to": 58},
                {"from": 64, "to": 61},
                {"from": 64, "to": 60},
                {"from": 64, "to": 59},
                {"from": 64, "to": 57},
                {"from": 64, "to": 11},
                {"from": 65, "to": 63},
                {"from": 65, "to": 64},
                {"from": 65, "to": 48},
                {"from": 65, "to": 62},
                {"from": 65, "to": 58},
                {"from": 65, "to": 61},
                {"from": 65, "to": 60},
                {"from": 65, "to": 59},
                {"from": 65, "to": 57},
                {"from": 65, "to": 55},
                {"from": 66, "to": 64},
                {"from": 66, "to": 58},
                {"from": 66, "to": 59},
                {"from": 66, "to": 62},
                {"from": 66, "to": 65},
                {"from": 66, "to": 48},
                {"from": 66, "to": 63},
                {"from": 66, "to": 61},
                {"from": 66, "to": 60},
                {"from": 67, "to": 57},
                {"from": 68, "to": 25},
                {"from": 68, "to": 11},
                {"from": 68, "to": 24},
                {"from": 68, "to": 27},
                {"from": 68, "to": 48},
                {"from": 68, "to": 41},
                {"from": 69, "to": 25},
                {"from": 69, "to": 68},
                {"from": 69, "to": 11},
                {"from": 69, "to": 24},
                {"from": 69, "to": 27},
                {"from": 69, "to": 48},
                {"from": 69, "to": 41},
                {"from": 70, "to": 25},
                {"from": 70, "to": 69},
                {"from": 70, "to": 68},
                {"from": 70, "to": 11},
                {"from": 70, "to": 24},
                {"from": 70, "to": 27},
                {"from": 70, "to": 41},
                {"from": 70, "to": 58},
                {"from": 71, "to": 27},
                {"from": 71, "to": 69},
                {"from": 71, "to": 68},
                {"from": 71, "to": 70},
                {"from": 71, "to": 11},
                {"from": 71, "to": 48},
                {"from": 71, "to": 41},
                {"from": 71, "to": 25},
                {"from": 72, "to": 26},
                {"from": 72, "to": 27},
                {"from": 72, "to": 11},
                {"from": 73, "to": 48},
                {"from": 74, "to": 48},
                {"from": 74, "to": 73},
                {"from": 75, "to": 69},
                {"from": 75, "to": 68},
                {"from": 75, "to": 25},
                {"from": 75, "to": 48},
                {"from": 75, "to": 41},
                {"from": 75, "to": 70},
                {"from": 75, "to": 71},
                {"from": 76, "to": 64},
                {"from": 76, "to": 65},
                {"from": 76, "to": 66},
                {"from": 76, "to": 63},
                {"from": 76, "to": 62},
                {"from": 76, "to": 48},
                {"from": 76, "to": 58}
            ];

            // create a network
            var container = document.getElementById('network_lesmis');
            var data = {
                nodes: nodes,
                edges: edges
            };
            var options = {
                nodes: {
                    shape: 'dot',
                    size: 16
                },
                physics: {
                    forceAtlas2Based: {
                        gravitationalConstant: -26,
                        centralGravity: 0.005,
                        springLength: 230,
                        springConstant: 0.18
                    },
                    maxVelocity: 146,
                    solver: 'forceAtlas2Based',
                    timestep: 0.35,
                    stabilization: {iterations: 150}
                }
            };
            var network = new vis.Network(container, data, options);

        }
        draw();
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
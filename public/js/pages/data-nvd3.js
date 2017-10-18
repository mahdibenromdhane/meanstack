/* data-nvd3 page javascript */
Theme.pages = (function (parent, me) {
    
    /* create standard theme colour set as follows:
    1. $blue:          #4a7aab
    2. $yellow:        #d1cf4b
    3. $red:           #b77270
    4. $green:         #75a04e
    5. $orange:        #cb9c38
    6. $purple:        #a182ad
    7. $gold:          #b4a631
    8. $bronze:        #986946
    9. l-blue:          #6ea0d3
    10. l-yellow:       #f0efa1
    11. l-red:          #de9997
    12. l-green:        #a0cc78
    13. l-orange:       #f4c560
    14. l-purple:       #cab4d3
    15. l-gold:         #e8d850
    16. l-bronze:       #ca9b78
    17. vl-blue:        #aacff5
    18. vl-red:         #f8bebd
    19. vl-green:       #cff4ad
    20. vl-bronze:      #f3b98e
    */
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

    /* create bright theme colour set as follows:
    1. $blue:          #2266ab
    2. $yellow:        #dad71e
    3. $red:           #b8413d
    4. $green:         #62a02b
    5. $orange:        #d99b17
    6. $purple:        #9a5ab3
    7. $gold:          #b09f0e
    8. $bronze:        #b26226
    9. l-blue:          #5393d5
    10. l-yellow:       #faf876
    11. l-red:          #eb6965
    12. l-green:        #88d741
    13. l-orange:       #fcd47e
    14. l-purple:       #d393ec
    15. l-gold:         #cec364
    16. l-bronze:       #ca9b78
    17. vl-blue:        #8dc4fc
    18. vl-red:         #fdb7b5
    19. vl-green:       #cbfd9e
    20. vl-bronze:      #ed9d62
    */
    var theme_colours_bright = [
        '#2266ab',
        '#dad71e',
        '#b8413d',
        '#62a02b',
        '#d99b17',
        '#9a5ab3',
        '#b09f0e',
        '#b26226',
        '#5393d5',
        '#faf876',
        '#eb6965',
        '#88d741',
        '#fcd47e',
        '#d393ec',
        '#cec364',
        '#ca9b78',
        '#8dc4fc',
        '#fdb7b5',
        '#cbfd9e',
        '#ed9d62'
    ]; // :)
    
    me.init = function() {
        parent.log('Running data-nvd3 page javascript');
        me.chart_line();
        me.chart_multibar();
        me.chart_multibar2();
        me.chart_barh();
        me.chart_pie();
        me.chart_donut();
        me.chart_scatter();
        me.chart_sunburst();
    };

    /* Inspired by Lee Byron's test data generator. */
    me.stream_layers = function (n, m, o) {
      if (arguments.length < 3) o = 0;
      function bump(a) {
        var x = 1 / (0.1 + Math.random()),
            y = 2 * Math.random() - 0.5,
            z = 10 / (0.1 + Math.random());
        for (var i = 0; i < m; i++) {
          var w = (i / m - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }
      return d3.range(n).map(function() {
          var a = [], i;
          for (i = 0; i < m; i++) a[i] = o + o * Math.random();
          for (i = 0; i < 5; i++) bump(a);
          return a.map(me.stream_index);
        });
    };

    /* Another layer generator using gamma distributions. */
    me.stream_waves = function(n, m) {
      return d3.range(n).map(function(i) {
        return d3.range(m).map(function(j) {
            var x = 20 * j / m - i / 3;
            return 2 * x * Math.exp(-0.5 * x);
          }).map(me.stream_index);
        });
    };

    me.stream_index = function(d, i) {
      return {x: i, y: Math.max(0, d)};
    };

    me.chart_line = function() {
        // Wrapping in nv.addGraph allows for '0 timeout render', stores rendered charts in nv.graphs,
        // and may do more in the future... it's NOT required
        var legendShow = (parent.helpers.viewport().width < 768) ? false : true;
        nv.addGraph(function() {
            var chart = nv.models.cumulativeLineChart()
                .useInteractiveGuideline(true)
                .x(function(d) { return d[0]; })
                .y(function(d) { return d[1]/100; })
                //.color(d3.scale.category10().range())
                .color(theme_colours_bright) // add theme colours
                .margin({bottom: 35, left: 50})
                .average(function(d) { return d.mean/100; })
                .duration(300)
                .interpolate("cardinal") 
                .clipVoronoi(false)
                .showLegend(legendShow);
            chart.dispatch.on('renderEnd', function() {
            });
            chart.xAxis.tickFormat(function(d) {
                return d3.time.format('%m/%d/%y')(new Date(d));
            });
            chart.yAxis.tickFormat(d3.format(',.1%'));
            d3.select('#chart_line svg')
                .datum(cumulativeTestData())
                .call(chart);
            //TODO: Figure out a good way to do this automatically
            nv.utils.windowResize(chart.update);
            chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
            chart.state.dispatch.on('change', function(state){
                nv.log('state', JSON.stringify(state));
            });
            return chart;
        });
        function flatTestData() {
            return [{
                key: "Snakes",
                values: [0,1,2,3,4,5,6,7,8,9].map(function(d) {
                    var currentDate = new Date();
                    currentDate.setDate(currentDate.getDate() + d);
                    return [currentDate, 0];
                })
            }];
        }
        function cumulativeTestData() {
            return [
                {
                    key: "Long",
                    values: [ [ 1083297600000 , -2.974623048543] , [ 1085976000000 , -1.7740300785979] , [ 1088568000000 , 4.4681318138177] , [ 1091246400000 , 7.0242541001353] , [ 1093924800000 , 7.5709603667586] , [ 1096516800000 , 20.612245065736] , [ 1099195200000 , 21.698065237316] , [ 1101790800000 , 40.501189458018] , [ 1104469200000 , 50.464679413194] , [ 1107147600000 , 48.917421973355] , [ 1109566800000 , 63.750936549160] , [ 1112245200000 , 59.072499126460] , [ 1114833600000 , 43.373158880492] , [ 1117512000000 , 54.490918947556] , [ 1120104000000 , 56.661178852079] , [ 1122782400000 , 73.450103545496] , [ 1125460800000 , 71.714526354907] , [ 1128052800000 , 85.221664349607] , [ 1130734800000 , 77.769261392481] , [ 1133326800000 , 95.966528716500] , [ 1136005200000 , 107.59132116397] , [ 1138683600000 , 127.25740096723] , [ 1141102800000 , 122.13917498830] , [ 1143781200000 , 126.53657279774] , [ 1146369600000 , 132.39300992970] , [ 1149048000000 , 120.11238242904] , [ 1151640000000 , 118.41408917750] , [ 1154318400000 , 107.92918924621] , [ 1156996800000 , 110.28057249569] , [ 1159588800000 , 117.20485334692] , [ 1162270800000 , 141.33556756948] , [ 1164862800000 , 159.59452727893] , [ 1167541200000 , 167.09801853304] , [ 1170219600000 , 185.46849659215] , [ 1172638800000 , 184.82474099990] , [ 1175313600000 , 195.63155213887] , [ 1177905600000 , 207.40597044171] , [ 1180584000000 , 230.55966698196] , [ 1183176000000 , 239.55649035292] , [ 1185854400000 , 241.35915085208] , [ 1188532800000 , 239.89428956243] , [ 1191124800000 , 260.47781917715] , [ 1193803200000 , 276.39457482225] , [ 1196398800000 , 258.66530682672] , [ 1199077200000 , 250.98846121893] , [ 1201755600000 , 226.89902618127] , [ 1204261200000 , 227.29009273807] , [ 1206936000000 , 218.66476654350] , [ 1209528000000 , 232.46605902918] , [ 1212206400000 , 253.25667081117] , [ 1214798400000 , 235.82505363925] , [ 1217476800000 , 229.70112774254] , [ 1220155200000 , 225.18472705952] , [ 1222747200000 , 189.13661746552] , [ 1225425600000 , 149.46533007301] , [ 1228021200000 , 131.00340772114] , [ 1230699600000 , 135.18341728866] , [ 1233378000000 , 109.15296887173] , [ 1235797200000 , 84.614772549760] , [ 1238472000000 , 100.60810015326] , [ 1241064000000 , 141.50134895610] , [ 1243742400000 , 142.50405083675] , [ 1246334400000 , 139.81192372672] , [ 1249012800000 , 177.78205544583] , [ 1251691200000 , 194.73691933074] , [ 1254283200000 , 209.00838460225] , [ 1256961600000 , 198.19855877420] , [ 1259557200000 , 222.37102417812] , [ 1262235600000 , 234.24581081250] , [ 1264914000000 , 228.26087689346] , [ 1267333200000 , 248.81895126250] , [ 1270008000000 , 270.57301075186] , [ 1272600000000 , 292.64604322550] , [ 1275278400000 , 265.94088520518] , [ 1277870400000 , 237.82887467569] , [ 1280548800000 , 265.55973314204] , [ 1283227200000 , 248.30877330928] , [ 1285819200000 , 278.14870066912] , [ 1288497600000 , 292.69260960288] , [ 1291093200000 , 300.84263809599] , [ 1293771600000 , 326.17253914628] , [ 1296450000000 , 337.69335966505] , [ 1298869200000 , 339.73260965121] , [ 1301544000000 , 346.87865120765] , [ 1304136000000 , 347.92991526628] , [ 1306814400000 , 342.04627502669] , [ 1309406400000 , 333.45386231233] , [ 1312084800000 , 323.15034181243] , [ 1314763200000 , 295.66126882331] , [ 1317355200000 , 251.48014579253] , [ 1320033600000 , 295.15424257905] , [ 1322629200000 , 294.54766764397] , [ 1325307600000 , 295.72906119051] , [ 1327986000000 , 325.73351347613] , [ 1330491600000 , 340.16106061186] , [ 1333166400000 , 345.15514071490] , [ 1335758400000 , 337.10259395679] , [ 1338436800000 , 318.68216333837] , [ 1341028800000 , 317.03683945246] , [ 1343707200000 , 318.53549659997] , [ 1346385600000 , 332.85381464104] , [ 1348977600000 , 337.36534373477] , [ 1351656000000 , 350.27872156161] , [ 1354251600000 , 349.45128876100]],
                    mean: 250
                },
                {
                    key: "Short",
                    values: [ [ 1083297600000 , -0.77078283705125] , [ 1085976000000 , -1.8356366650335] , [ 1088568000000 , -5.3121322073127] , [ 1091246400000 , -4.9320975829662] , [ 1093924800000 , -3.9835408823225] , [ 1096516800000 , -6.8694685316805] , [ 1099195200000 , -8.4854877428545] , [ 1101790800000 , -15.933627197384] , [ 1104469200000 , -15.920980069544] , [ 1107147600000 , -12.478685045651] , [ 1109566800000 , -17.297761889305] , [ 1112245200000 , -15.247129891020] , [ 1114833600000 , -11.336459046839] , [ 1117512000000 , -13.298990907415] , [ 1120104000000 , -16.360027000056] , [ 1122782400000 , -18.527929522030] , [ 1125460800000 , -22.176516738685] , [ 1128052800000 , -23.309665368330] , [ 1130734800000 , -21.629973409748] , [ 1133326800000 , -24.186429093486] , [ 1136005200000 , -29.116707312531] , [ 1138683600000 , -37.188037874864] , [ 1141102800000 , -34.689264821198] , [ 1143781200000 , -39.505932105359] , [ 1146369600000 , -45.339572492759] , [ 1149048000000 , -43.849353192764] , [ 1151640000000 , -45.418353922571] , [ 1154318400000 , -44.579281059919] , [ 1156996800000 , -44.027098363370] , [ 1159588800000 , -41.261306759439] , [ 1162270800000 , -47.446018534027] , [ 1164862800000 , -53.413782948909] , [ 1167541200000 , -50.700723647419] , [ 1170219600000 , -56.374090913296] , [ 1172638800000 , -61.754245220322] , [ 1175313600000 , -66.246241587629] , [ 1177905600000 , -75.351650899999] , [ 1180584000000 , -81.699058262032] , [ 1183176000000 , -82.487023368081] , [ 1185854400000 , -86.230055113277] , [ 1188532800000 , -84.746914818507] , [ 1191124800000 , -100.77134971977] , [ 1193803200000 , -109.95435565947] , [ 1196398800000 , -99.605672965057] , [ 1199077200000 , -99.607249394382] , [ 1201755600000 , -94.874614950188] , [ 1204261200000 , -105.35899063105] , [ 1206936000000 , -106.01931193802] , [ 1209528000000 , -110.28883571771] , [ 1212206400000 , -119.60256203030] , [ 1214798400000 , -115.62201315802] , [ 1217476800000 , -106.63824185202] , [ 1220155200000 , -99.848746318951] , [ 1222747200000 , -85.631219602987] , [ 1225425600000 , -63.547909262067] , [ 1228021200000 , -59.753275364457] , [ 1230699600000 , -63.874977883542] , [ 1233378000000 , -56.865697387488] , [ 1235797200000 , -54.285579501988] , [ 1238472000000 , -56.474659581885] , [ 1241064000000 , -63.847137745644] , [ 1243742400000 , -68.754247867325] , [ 1246334400000 , -69.474257009155] , [ 1249012800000 , -75.084828197067] , [ 1251691200000 , -77.101028237237] , [ 1254283200000 , -80.454866854387] , [ 1256961600000 , -78.984349952220] , [ 1259557200000 , -83.041230807854] , [ 1262235600000 , -84.529748348935] , [ 1264914000000 , -83.837470195508] , [ 1267333200000 , -87.174487671969] , [ 1270008000000 , -90.342293007487] , [ 1272600000000 , -93.550928464991] , [ 1275278400000 , -85.833102140765] , [ 1277870400000 , -79.326501831592] , [ 1280548800000 , -87.986196903537] , [ 1283227200000 , -85.397862121771] , [ 1285819200000 , -94.738167050020] , [ 1288497600000 , -98.661952897151] , [ 1291093200000 , -99.609665952708] , [ 1293771600000 , -103.57099836183] , [ 1296450000000 , -104.04353411322] , [ 1298869200000 , -108.21382792587] , [ 1301544000000 , -108.74006900920] , [ 1304136000000 , -112.07766650960] , [ 1306814400000 , -109.63328199118] , [ 1309406400000 , -106.53578966772] , [ 1312084800000 , -103.16480871469] , [ 1314763200000 , -95.945078001828] , [ 1317355200000 , -81.226687340874] , [ 1320033600000 , -90.782206596168] , [ 1322629200000 , -89.484445370113] , [ 1325307600000 , -88.514723135326] , [ 1327986000000 , -93.381292724320] , [ 1330491600000 , -97.529705609172] , [ 1333166400000 , -99.520481439189] , [ 1335758400000 , -99.430184898669] , [ 1338436800000 , -93.349934521973] , [ 1341028800000 , -95.858475286491] , [ 1343707200000 , -95.522755836605] , [ 1346385600000 , -98.503848862036] , [ 1348977600000 , -101.49415251896] , [ 1351656000000 , -101.50099325672] , [ 1354251600000 , -99.487094927489]],
                    mean: -60
                },
                {
                    key: "Gross",
                    mean: 125,
                    values: [ [ 1083297600000 , -3.7454058855943] , [ 1085976000000 , -3.6096667436314] , [ 1088568000000 , -0.8440003934950] , [ 1091246400000 , 2.0921565171691] , [ 1093924800000 , 3.5874194844361] , [ 1096516800000 , 13.742776534056] , [ 1099195200000 , 13.212577494462] , [ 1101790800000 , 24.567562260634] , [ 1104469200000 , 34.543699343650] , [ 1107147600000 , 36.438736927704] , [ 1109566800000 , 46.453174659855] , [ 1112245200000 , 43.825369235440] , [ 1114833600000 , 32.036699833653] , [ 1117512000000 , 41.191928040141] , [ 1120104000000 , 40.301151852023] , [ 1122782400000 , 54.922174023466] , [ 1125460800000 , 49.538009616222] , [ 1128052800000 , 61.911998981277] , [ 1130734800000 , 56.139287982733] , [ 1133326800000 , 71.780099623014] , [ 1136005200000 , 78.474613851439] , [ 1138683600000 , 90.069363092366] , [ 1141102800000 , 87.449910167102] , [ 1143781200000 , 87.030640692381] , [ 1146369600000 , 87.053437436941] , [ 1149048000000 , 76.263029236276] , [ 1151640000000 , 72.995735254929] , [ 1154318400000 , 63.349908186291] , [ 1156996800000 , 66.253474132320] , [ 1159588800000 , 75.943546587481] , [ 1162270800000 , 93.889549035453] , [ 1164862800000 , 106.18074433002] , [ 1167541200000 , 116.39729488562] , [ 1170219600000 , 129.09440567885] , [ 1172638800000 , 123.07049577958] , [ 1175313600000 , 129.38531055124] , [ 1177905600000 , 132.05431954171] , [ 1180584000000 , 148.86060871993] , [ 1183176000000 , 157.06946698484] , [ 1185854400000 , 155.12909573880] , [ 1188532800000 , 155.14737474392] , [ 1191124800000 , 159.70646945738] , [ 1193803200000 , 166.44021916278] , [ 1196398800000 , 159.05963386166] , [ 1199077200000 , 151.38121182455] , [ 1201755600000 , 132.02441123108] , [ 1204261200000 , 121.93110210702] , [ 1206936000000 , 112.64545460548] , [ 1209528000000 , 122.17722331147] , [ 1212206400000 , 133.65410878087] , [ 1214798400000 , 120.20304048123] , [ 1217476800000 , 123.06288589052] , [ 1220155200000 , 125.33598074057] , [ 1222747200000 , 103.50539786253] , [ 1225425600000 , 85.917420810943] , [ 1228021200000 , 71.250132356683] , [ 1230699600000 , 71.308439405118] , [ 1233378000000 , 52.287271484242] , [ 1235797200000 , 30.329193047772] , [ 1238472000000 , 44.133440571375] , [ 1241064000000 , 77.654211210456] , [ 1243742400000 , 73.749802969425] , [ 1246334400000 , 70.337666717565] , [ 1249012800000 , 102.69722724876] , [ 1251691200000 , 117.63589109350] , [ 1254283200000 , 128.55351774786] , [ 1256961600000 , 119.21420882198] , [ 1259557200000 , 139.32979337027] , [ 1262235600000 , 149.71606246357] , [ 1264914000000 , 144.42340669795] , [ 1267333200000 , 161.64446359053] , [ 1270008000000 , 180.23071774437] , [ 1272600000000 , 199.09511476051] , [ 1275278400000 , 180.10778306442] , [ 1277870400000 , 158.50237284410] , [ 1280548800000 , 177.57353623850] , [ 1283227200000 , 162.91091118751] , [ 1285819200000 , 183.41053361910] , [ 1288497600000 , 194.03065670573] , [ 1291093200000 , 201.23297214328] , [ 1293771600000 , 222.60154078445] , [ 1296450000000 , 233.35556801977] , [ 1298869200000 , 231.22452435045] , [ 1301544000000 , 237.84432503045] , [ 1304136000000 , 235.55799131184] , [ 1306814400000 , 232.11873570751] , [ 1309406400000 , 226.62381538123] , [ 1312084800000 , 219.34811113539] , [ 1314763200000 , 198.69242285581] , [ 1317355200000 , 168.90235629066] , [ 1320033600000 , 202.64725756733] , [ 1322629200000 , 203.05389378105] , [ 1325307600000 , 204.85986680865] , [ 1327986000000 , 229.77085616585] , [ 1330491600000 , 239.65202435959] , [ 1333166400000 , 242.33012622734] , [ 1335758400000 , 234.11773262149] , [ 1338436800000 , 221.47846307887] , [ 1341028800000 , 216.98308827912] , [ 1343707200000 , 218.37781386755] , [ 1346385600000 , 229.39368622736] , [ 1348977600000 , 230.54656412916] , [ 1351656000000 , 243.06087025523] , [ 1354251600000 , 244.24733578385]]
                },
                {
                    key: "S&P 1500",
                    values: [ [ 1083297600000 , -1.7798428181819] , [ 1085976000000 , -0.36883324836999] , [ 1088568000000 , 1.7312581046040] , [ 1091246400000 , -1.8356125950460] , [ 1093924800000 , -1.5396564170877] , [ 1096516800000 , -0.16867791409247] , [ 1099195200000 , 1.3754263993413] , [ 1101790800000 , 5.8171640898041] , [ 1104469200000 , 9.4350145241608] , [ 1107147600000 , 6.7649081510160] , [ 1109566800000 , 9.1568499314776] , [ 1112245200000 , 7.2485090994419] , [ 1114833600000 , 4.8762222306595] , [ 1117512000000 , 8.5992339354652] , [ 1120104000000 , 9.0896517982086] , [ 1122782400000 , 13.394644048577] , [ 1125460800000 , 12.311842010760] , [ 1128052800000 , 13.221003650717] , [ 1130734800000 , 11.218481009206] , [ 1133326800000 , 15.565352598445] , [ 1136005200000 , 15.623703865926] , [ 1138683600000 , 19.275255326383] , [ 1141102800000 , 19.432433717836] , [ 1143781200000 , 21.232881244655] , [ 1146369600000 , 22.798299192958] , [ 1149048000000 , 19.006125095476] , [ 1151640000000 , 19.151889158536] , [ 1154318400000 , 19.340022855452] , [ 1156996800000 , 22.027934841859] , [ 1159588800000 , 24.903300681329] , [ 1162270800000 , 29.146492833877] , [ 1164862800000 , 31.781626082589] , [ 1167541200000 , 33.358770738428] , [ 1170219600000 , 35.622684613497] , [ 1172638800000 , 33.332821711366] , [ 1175313600000 , 34.878748635832] , [ 1177905600000 , 40.582332613844] , [ 1180584000000 , 45.719535502920] , [ 1183176000000 , 43.239344722386] , [ 1185854400000 , 38.550955100342] , [ 1188532800000 , 40.585368816283] , [ 1191124800000 , 45.601374057981] , [ 1193803200000 , 48.051404337892] , [ 1196398800000 , 41.582581696032] , [ 1199077200000 , 40.650580792748] , [ 1201755600000 , 32.252222066493] , [ 1204261200000 , 28.106390258553] , [ 1206936000000 , 27.532698196687] , [ 1209528000000 , 33.986390463852] , [ 1212206400000 , 36.302660526438] , [ 1214798400000 , 25.015574480172] , [ 1217476800000 , 23.989494069029] , [ 1220155200000 , 25.934351445531] , [ 1222747200000 , 14.627592011699] , [ 1225425600000 , -5.2249403809749] , [ 1228021200000 , -12.330933408050] , [ 1230699600000 , -11.000291508188] , [ 1233378000000 , -18.563864948088] , [ 1235797200000 , -27.213097001687] , [ 1238472000000 , -20.834133840523] , [ 1241064000000 , -12.717886701719] , [ 1243742400000 , -8.1644613083526] , [ 1246334400000 , -7.9108408918201] , [ 1249012800000 , -0.77002391591209] , [ 1251691200000 , 2.8243816569672] , [ 1254283200000 , 6.8761411421070] , [ 1256961600000 , 4.5060912230294] , [ 1259557200000 , 10.487179794349] , [ 1262235600000 , 13.251375597594] , [ 1264914000000 , 9.2207594803415] , [ 1267333200000 , 12.836276936538] , [ 1270008000000 , 19.816793904978] , [ 1272600000000 , 22.156787167211] , [ 1275278400000 , 12.518039090576] , [ 1277870400000 , 6.4253587440854] , [ 1280548800000 , 13.847372028409] , [ 1283227200000 , 8.5454736090364] , [ 1285819200000 , 18.542801953304] , [ 1288497600000 , 23.037064683183] , [ 1291093200000 , 23.517422401888] , [ 1293771600000 , 31.804723416068] , [ 1296450000000 , 34.778247386072] , [ 1298869200000 , 39.584883855230] , [ 1301544000000 , 40.080647664875] , [ 1304136000000 , 44.180050667889] , [ 1306814400000 , 42.533535927221] , [ 1309406400000 , 40.105374449011] , [ 1312084800000 , 37.014659267156] , [ 1314763200000 , 29.263745084262] , [ 1317355200000 , 19.637463417584] , [ 1320033600000 , 33.157645345770] , [ 1322629200000 , 32.895053150988] , [ 1325307600000 , 34.111544824647] , [ 1327986000000 , 40.453985817473] , [ 1330491600000 , 46.435700783313] , [ 1333166400000 , 51.062385488671] , [ 1335758400000 , 50.130448220658] , [ 1338436800000 , 41.035476682018] , [ 1341028800000 , 46.591932296457] , [ 1343707200000 , 48.349391180634] , [ 1346385600000 , 51.913011286919] , [ 1348977600000 , 55.747238313752] , [ 1351656000000 , 52.991824077209] , [ 1354251600000 , 49.556311883284]]
                }
            ];
        }
    };
    
    me.chart_multibar = function() {
        var legendShow = (parent.helpers.viewport().width < 768) ? false : true;
        var test_data = me.stream_layers(3,10+Math.random()*100,0.1).map(function(data, i) {
            return {
                key: 'Stream' + i,
                values: data
            };
        });
        var negative_test_data = new d3.range(0,3).map(function(d,i) {
            return {
                key: 'Stream' + i,
                values: new d3.range(0,11).map( function(f,j) {
                    return {
                        y: 10 + Math.random()*100 * (Math.floor(Math.random()*100)%2 ? 1 : -1),
                        x: j
                    };
                })
            };
        });
        var chart;
        nv.addGraph(function() {
            chart = nv.models.multiBarChart()
                //.barColor(d3.scale.category20().range())
                .barColor(theme_colours_bright) // add theme colours
                .duration(300)
                .margin({bottom: 55, left: 65})
                .rotateLabels(45)
                .groupSpacing(0.1)
                .showLegend(legendShow)
            ;
            chart.reduceXTicks(false).staggerLabels(true);
            chart.xAxis
                .axisLabel("ID of Furry Cat Households")
                .axisLabelDistance(0)
                .showMaxMin(false)
                .tickFormat(d3.format(',.1f'))
            ;
            chart.yAxis
                .axisLabel("Change in Furry Cat Population")
                .axisLabelDistance(-5)
                .tickFormat(d3.format(',.01f'))
            ;
            chart.dispatch.on('renderEnd', function(){
                nv.log('Render Complete');
            });
            d3.select('#chart_multibar svg')
                .datum(negative_test_data)
                .call(chart);
            nv.utils.windowResize(chart.update);
            chart.dispatch.on('stateChange', function(e) {
                nv.log('New State:', JSON.stringify(e));
            });
            chart.state.dispatch.on('change', function(state){
                nv.log('state', JSON.stringify(state));
            });
            return chart;
        });
    };
    
    me.chart_multibar2 = function() {
        var legendShow = (parent.helpers.viewport().width < 768) ? false : true;
        var test_data = me.stream_layers(3,128,0.1).map(function(data, i) {
            return {
                key: (i == 1) ? 'Non-stackable Stream' + i: 'Stream' + i,
                nonStackable: (i == 1),
                values: data
            };
        });
        nv.addGraph({
            generate: function() {
                var width = null,
                    height = null;
                var chart = nv.models.multiBarChart()
                    .width(width)
                    .height(height)
                    .color(theme_colours) // add theme colours
                    .margin({"left":40,"right":20,"top":20,"bottom":30})
                    .stacked(true)
                    .showLegend(legendShow);
                chart.dispatch.on('renderEnd', function(){
                });
                var svg = d3.select('#chart_multibar2 svg').datum(test_data);
                svg.transition().duration(0).call(chart);
                return chart;
            },
            callback: function(graph) {
                nv.utils.windowResize(function() {
                    var width = null,
                        height = null;
                    graph.width(width).height(height);
                    d3.select('#chart_multibar2 svg')
                        .attr('width', width)
                        .attr('height', height)
                        .transition().duration(0)
                        .call(graph);
                });
            }
        });
    };
    
    me.chart_barh = function() {
        var legendShow = (parent.helpers.viewport().width < 768) ? false : true;
        var long_short_data = [ 
            {
                key: 'Series1',
                values: [
                    {
                        "label" : "Group A" ,
                        "value" : -1.8746444827653
                    } ,
                    {
                        "label" : "Group B" ,
                        "value" : -8.0961543492239
                    } ,
                    {
                        "label" : "Group C" ,
                        "value" : -0.57072943117674
                    } ,
                    {
                        "label" : "Group D" ,
                        "value" : -2.4174010336624
                    } ,
                    {
                        "label" : "Group E" ,
                        "value" : -0.72009071426284
                    } ,
                    {
                        "label" : "Group F" ,
                        "value" : -2.77154485523777
                    } ,
                    {
                        "label" : "Group G" ,
                        "value" : -9.90152097798131
                    } ,
                    {
                        "label" : "Group H" ,
                        "value" : 14.91445417330854
                    } ,
                    {
                        "label" : "Group I" ,
                        "value" : -3.055746319141851
                    }
                ]
            },
            {
                key: 'Series2',
                values: [
                    {
                        "label" : "Group A" ,
                        "value" : 25.307646510375
                    } ,
                    {
                        "label" : "Group B" ,
                        "value" : 16.756779544553
                    } ,
                    {
                        "label" : "Group C" ,
                        "value" : 18.451534877007
                    } ,
                    {
                        "label" : "Group D" ,
                        "value" : 8.6142352811805
                    } ,
                    {
                        "label" : "Group E" ,
                        "value" : 7.8082472075876
                    } ,
                    {
                        "label" : "Group F" ,
                        "value" : 5.259101026956
                    } ,
                    {
                        "label" : "Group G" ,
                        "value" : 7.0947953487127
                    } ,
                    {
                        "label" : "Group H" ,
                        "value" : 8
                    } ,
                    {
                        "label" : "Group I" ,
                        "value" : 21
                    }
                ]
            },
            {
                key: 'Series3',
                values: [
                    {
                        "label" : "Group A" ,
                        "value" : -14.307646510375
                    } ,
                    {
                        "label" : "Group B" ,
                        "value" : 16.756779544553
                    } ,
                    {
                        "label" : "Group C" ,
                        "value" : -18.451534877007
                    } ,
                    {
                        "label" : "Group D" ,
                        "value" : 8.6142352811805
                    } ,
                    {
                        "label" : "Group E" ,
                        "value" : -7.8082472075876
                    } ,
                    {
                        "label" : "Group F" ,
                        "value" : 15.259101026956
                    } ,
                    {
                        "label" : "Group G" ,
                        "value" : -0.30947953487127
                    } ,
                    {
                        "label" : "Group H" ,
                        "value" : 0
                    } ,
                    {
                        "label" : "Group I" ,
                        "value" : 0
                    }
                ]
            }
        ];
        var chart;
        nv.addGraph(function() {
            chart = nv.models.multiBarHorizontalChart()
                .x(function(d) { return d.label; })
                .y(function(d) { return d.value; })
                .yErr(function(d) { return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)]; })
                //.barColor(d3.scale.category20().range())
                .barColor(theme_colours_bright) // add theme colours
                .margin({left: 0,right: 40,top: 0,bottom: 40})
                .duration(250)
                .margin({left: 100})
                .stacked(true)
                .showLegend(legendShow);
            chart.yAxis.tickFormat(d3.format(',.2f'));
            chart.yAxis.axisLabel('Y Axis');
            chart.xAxis.axisLabel('X Axis').axisLabelDistance(20);
            d3.select('#chart_barh svg')
                .datum(long_short_data)
                .call(chart);
            nv.utils.windowResize(chart.update);
            chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
            chart.state.dispatch.on('change', function(state){
                nv.log('state', JSON.stringify(state));
            });
            return chart;
        });
    };
    
    me.chart_pie = function() {
        var legendShow = (parent.helpers.viewport().width < 768) ? false : true;
        var testdata = [
            {key: "One", y: 5, color: "#5F5"},
            {key: "Two", y: 2},
            {key: "Three", y: 9},
            {key: "Four", y: 7},
            {key: "Five", y: 4},
            {key: "Six", y: 3},
            {key: "Seven", y: 0.5}
        ];
        var testdata2 = [
            {key: "One", y: 5},
            {key: "Two", y: 2},
            {key: "Three", y: 9},
            {key: "Four", y: 7},
            {key: "Five", y: 4},
            {key: "Six", y: 3},
            {key: "Seven", y: 0.5}
        ];
        var height = null;
        var width = null;
        nv.addGraph(function() {
            var chart = nv.models.pieChart()
                .x(function(d) { return d.key; })
                .y(function(d) { return d.y; })
                .width(width)
                .height(height)
                .legendPosition("right")
                .margin({"left":0,"right":0,"top":10,"bottom":0})
                .color(theme_colours)
                .showLegend(legendShow); // add theme colours
            d3.select("#chart_pie")
                .datum(testdata2)
                .transition().duration(1200)
                .attr('width', width)
                .attr('height', height)
                .call(chart);
            // update chart data values randomly
            setInterval(function() {
                testdata2[0].y = Math.floor(Math.random() * 10);
                testdata2[1].y = Math.floor(Math.random() * 10);
                chart.update();
                chart.color(theme_colours); // add theme colours
            }, 4000);
            return chart;
        });
    };
    
    me.chart_donut = function() {
        var legendShow = (parent.helpers.viewport().width < 768) ? false : true;
        var testdata = [
            {key: "One", y: 5},
            {key: "Two", y: 2},
            {key: "Three", y: 9},
            {key: "Four", y: 7},
            {key: "Five", y: 4},
            {key: "Six", y: 3},
            {key: "Seven", y: 0.5}
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
                .margin({"left":0,"right":0,"top":10,"bottom":0})
                .padAngle(0.08)
                .cornerRadius(5)
                .padAngle(0.03)
                .id('donut1') // allow custom CSS for this one svg
                .color(theme_colours)
                .showLegend(legendShow); // add theme colours
            chart1.title('100%');
            chart1.pie.labelsOutside(true).donut(true);
            d3.select("#chart_donut")
                .datum(testdata)
                .transition().duration(1200)
                .call(chart1);
            //nv.utils.windowResize(chart1.update);
            return chart1;
        });
    };
    
    me.chart_scatter = function() {
    var legendShow = (parent.helpers.viewport().width < 768) ? false : true;
    var chart;
    nv.addGraph(function() {
        chart = nv.models.scatterChart()
            .showDistX(true)
            .showDistY(true)
            .duration(300)
            .color(d3.scale.category10().range())
            .showLegend(legendShow);
        chart.dispatch.on('renderEnd', function(){
        });
        chart.xAxis.tickFormat(d3.format('.02f'));
        chart.yAxis.tickFormat(d3.format('.02f'));
        d3.select('#chart_scatter svg')
            .datum(nv.log(randomData(4,40)))
            .call(chart);
        nv.utils.windowResize(chart.update);
        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
        return chart;
    });
    function randomData(groups, points) { //# groups,# points per group
        var data = [],
            shapes = ['circle'],
            random = d3.random.normal();
        for (i = 0; i < groups; i++) {
            data.push({
                key: 'Group ' + i,
                values: [],
                slope: Math.random() - 0.01,
                intercept: Math.random() - 0.5
            });
            for (j = 0; j < points; j++) {
                data[i].values.push({
                    x: random(),
                    y: random(),
                    size: Math.random(),
                    shape: shapes[j % shapes.length]
                });
            }
        }
        return data;
    }
    };
    
    me.chart_sunburst = function() {
        var legendShow = (parent.helpers.viewport().width < 768) ? false : true;
        var chart;
        nv.addGraph(function() {
            chart = nv.models.sunburstChart();
            //chart.color(d3.scale.category20c());
            chart.color(theme_colours); // add theme colours
            chart.margin({"left":0,"right":0,"top":10,"bottom":0});
            d3.select("#chart_sunburst")
                    .datum(getData())
                    .call(chart);
            nv.utils.windowResize(chart.update);
            return chart;
        });
        function getData() {
            return [{
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [
                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "AgglomerativeCluster", "size": 3938},
                                    {"name": "CommunityStructure", "size": 3812},
                                    {"name": "HierarchicalCluster", "size": 6714},
                                    {"name": "MergeEdge", "size": 743}
                                ]
                            },
                            {
                                "name": "graph",
                                "children": [
                                    {"name": "BetweennessCentrality", "size": 3534},
                                    {"name": "LinkDistance", "size": 5731},
                                    {"name": "MaxFlowMinCut", "size": 7840},
                                    {"name": "ShortestPaths", "size": 5914},
                                    {"name": "SpanningTree", "size": 3416}
                                ]
                            },
                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "AspectRatioBanker", "size": 7074}
                                ]
                            }
                        ]
                    },
                    {
                        "name": "animate",
                        "children": [
                            {"name": "Easing", "size": 17010},
                            {"name": "FunctionSequence", "size": 5842},
                            {
                                "name": "interpolate",
                                "children": [
                                    {"name": "ArrayInterpolator", "size": 1983},
                                    {"name": "ColorInterpolator", "size": 2047},
                                    {"name": "DateInterpolator", "size": 1375},
                                    {"name": "Interpolator", "size": 8746},
                                    {"name": "MatrixInterpolator", "size": 2202},
                                    {"name": "NumberInterpolator", "size": 1382},
                                    {"name": "ObjectInterpolator", "size": 1629},
                                    {"name": "PointInterpolator", "size": 1675},
                                    {"name": "RectangleInterpolator", "size": 2042}
                                ]
                            },
                            {"name": "ISchedulable", "size": 1041},
                            {"name": "Parallel", "size": 5176},
                            {"name": "Pause", "size": 449},
                            {"name": "Scheduler", "size": 5593},
                            {"name": "Sequence", "size": 5534},
                            {"name": "Transition", "size": 9201},
                            {"name": "Transitioner", "size": 19975},
                            {"name": "TransitionEvent", "size": 1116},
                            {"name": "Tween", "size": 6006}
                        ]
                    },
                    {
                        "name": "data",
                        "children": [
                            {
                                "name": "converters",
                                "children": [
                                    {"name": "Converters", "size": 721},
                                    {"name": "DelimitedTextConverter", "size": 4294},
                                    {"name": "GraphMLConverter", "size": 9800},
                                    {"name": "IDataConverter", "size": 1314},
                                    {"name": "JSONConverter", "size": 2220}
                                ]
                            },
                            {"name": "DataField", "size": 1759},
                            {"name": "DataSchema", "size": 2165},
                            {"name": "DataSet", "size": 586},
                            {"name": "DataSource", "size": 3331},
                            {"name": "DataTable", "size": 772},
                            {"name": "DataUtil", "size": 3322}
                        ]
                    },
                    {
                        "name": "display",
                        "children": [
                            {"name": "DirtySprite", "size": 8833},
                            {"name": "LineSprite", "size": 1732},
                            {"name": "RectSprite", "size": 3623},
                            {"name": "TextSprite", "size": 10066}
                        ]
                    },
                    {
                        "name": "flex",
                        "children": [
                            {"name": "FlareVis", "size": 4116}
                        ]
                    },
                    {
                        "name": "physics",
                        "children": [
                            {"name": "DragForce", "size": 1082},
                            {"name": "GravityForce", "size": 1336},
                            {"name": "IForce", "size": 319},
                            {"name": "NBodyForce", "size": 10498},
                            {"name": "Particle", "size": 2822},
                            {"name": "Simulation", "size": 9983},
                            {"name": "Spring", "size": 2213},
                            {"name": "SpringForce", "size": 1681}
                        ]
                    },
                    {
                        "name": "query",
                        "children": [
                            {"name": "AggregateExpression", "size": 1616},
                            {"name": "And", "size": 1027},
                            {"name": "Arithmetic", "size": 3891},
                            {"name": "Average", "size": 891},
                            {"name": "BinaryExpression", "size": 2893},
                            {"name": "Comparison", "size": 5103},
                            {"name": "CompositeExpression", "size": 3677},
                            {"name": "Count", "size": 781},
                            {"name": "DateUtil", "size": 4141},
                            {"name": "Distinct", "size": 933},
                            {"name": "Expression", "size": 5130},
                            {"name": "ExpressionIterator", "size": 3617},
                            {"name": "Fn", "size": 3240},
                            {"name": "If", "size": 2732},
                            {"name": "IsA", "size": 2039},
                            {"name": "Literal", "size": 1214},
                            {"name": "Match", "size": 3748},
                            {"name": "Maximum", "size": 843},
                            {
                                "name": "methods",
                                "children": [
                                    {"name": "add", "size": 593},
                                    {"name": "and", "size": 330},
                                    {"name": "average", "size": 287},
                                    {"name": "count", "size": 277},
                                    {"name": "distinct", "size": 292},
                                    {"name": "div", "size": 595},
                                    {"name": "eq", "size": 594},
                                    {"name": "fn", "size": 460},
                                    {"name": "gt", "size": 603},
                                    {"name": "gte", "size": 625},
                                    {"name": "iff", "size": 748},
                                    {"name": "isa", "size": 461},
                                    {"name": "lt", "size": 597},
                                    {"name": "lte", "size": 619},
                                    {"name": "max", "size": 283},
                                    {"name": "min", "size": 283},
                                    {"name": "mod", "size": 591},
                                    {"name": "mul", "size": 603},
                                    {"name": "neq", "size": 599},
                                    {"name": "not", "size": 386},
                                    {"name": "or", "size": 323},
                                    {"name": "orderby", "size": 307},
                                    {"name": "range", "size": 772},
                                    {"name": "select", "size": 296},
                                    {"name": "stddev", "size": 363},
                                    {"name": "sub", "size": 600},
                                    {"name": "sum", "size": 280},
                                    {"name": "update", "size": 307},
                                    {"name": "variance", "size": 335},
                                    {"name": "where", "size": 299},
                                    {"name": "xor", "size": 354},
                                    {"name": "_", "size": 264}
                                ]
                            },
                            {"name": "Minimum", "size": 843},
                            {"name": "Not", "size": 1554},
                            {"name": "Or", "size": 970},
                            {"name": "Query", "size": 13896},
                            {"name": "Range", "size": 1594},
                            {"name": "StringUtil", "size": 4130},
                            {"name": "Sum", "size": 791},
                            {"name": "Variable", "size": 1124},
                            {"name": "Variance", "size": 1876},
                            {"name": "Xor", "size": 1101}
                        ]
                    },
                    {
                        "name": "scale",
                        "children": [
                            {"name": "IScaleMap", "size": 2105},
                            {"name": "LinearScale", "size": 1316},
                            {"name": "LogScale", "size": 3151},
                            {"name": "OrdinalScale", "size": 3770},
                            {"name": "QuantileScale", "size": 2435},
                            {"name": "QuantitativeScale", "size": 4839},
                            {"name": "RootScale", "size": 1756},
                            {"name": "Scale", "size": 4268},
                            {"name": "ScaleType", "size": 1821},
                            {"name": "TimeScale", "size": 5833}
                        ]
                    },
                    {
                        "name": "util",
                        "children": [
                            {"name": "Arrays", "size": 8258},
                            {"name": "Colors", "size": 10001},
                            {"name": "Dates", "size": 8217},
                            {"name": "Displays", "size": 12555},
                            {"name": "Filter", "size": 2324},
                            {"name": "Geometry", "size": 10993},
                            {
                                "name": "heap",
                                "children": [
                                    {"name": "FibonacciHeap", "size": 9354},
                                    {"name": "HeapNode", "size": 1233}
                                ]
                            },
                            {"name": "IEvaluable", "size": 335},
                            {"name": "IPredicate", "size": 383},
                            {"name": "IValueProxy", "size": 874},
                            {
                                "name": "math",
                                "children": [
                                    {"name": "DenseMatrix", "size": 3165},
                                    {"name": "IMatrix", "size": 2815},
                                    {"name": "SparseMatrix", "size": 3366}
                                ]
                            },
                            {"name": "Maths", "size": 17705},
                            {"name": "Orientation", "size": 1486},
                            {
                                "name": "palette",
                                "children": [
                                    {"name": "ColorPalette", "size": 6367},
                                    {"name": "Palette", "size": 1229},
                                    {"name": "ShapePalette", "size": 2059},
                                    {"name": "SizePalette", "size": 2291}
                                ]
                            },
                            {"name": "Property", "size": 5559},
                            {"name": "Shapes", "size": 19118},
                            {"name": "Sort", "size": 6887},
                            {"name": "Stats", "size": 6557},
                            {"name": "Strings", "size": 22026}
                        ]
                    },
                    {
                        "name": "vis",
                        "children": [
                            {
                                "name": "axis",
                                "children": [
                                    {"name": "Axes", "size": 1302},
                                    {"name": "Axis", "size": 24593},
                                    {"name": "AxisGridLine", "size": 652},
                                    {"name": "AxisLabel", "size": 636},
                                    {"name": "CartesianAxes", "size": 6703}
                                ]
                            },
                            {
                                "name": "controls",
                                "children": [
                                    {"name": "AnchorControl", "size": 2138},
                                    {"name": "ClickControl", "size": 3824},
                                    {"name": "Control", "size": 1353},
                                    {"name": "ControlList", "size": 4665},
                                    {"name": "DragControl", "size": 2649},
                                    {"name": "ExpandControl", "size": 2832},
                                    {"name": "HoverControl", "size": 4896},
                                    {"name": "IControl", "size": 763},
                                    {"name": "PanZoomControl", "size": 5222},
                                    {"name": "SelectionControl", "size": 7862},
                                    {"name": "TooltipControl", "size": 8435}
                                ]
                            },
                            {
                                "name": "data",
                                "children": [
                                    {"name": "Data", "size": 20544},
                                    {"name": "DataList", "size": 19788},
                                    {"name": "DataSprite", "size": 10349},
                                    {"name": "EdgeSprite", "size": 3301},
                                    {"name": "NodeSprite", "size": 19382},
                                    {
                                        "name": "render",
                                        "children": [
                                            {"name": "ArrowType", "size": 698},
                                            {"name": "EdgeRenderer", "size": 5569},
                                            {"name": "IRenderer", "size": 353},
                                            {"name": "ShapeRenderer", "size": 2247}
                                        ]
                                    },
                                    {"name": "ScaleBinding", "size": 11275},
                                    {"name": "Tree", "size": 7147},
                                    {"name": "TreeBuilder", "size": 9930}
                                ]
                            },
                            {
                                "name": "events",
                                "children": [
                                    {"name": "DataEvent", "size": 2313},
                                    {"name": "SelectionEvent", "size": 1880},
                                    {"name": "TooltipEvent", "size": 1701},
                                    {"name": "VisualizationEvent", "size": 1117}
                                ]
                            },
                            {
                                "name": "legend",
                                "children": [
                                    {"name": "Legend", "size": 20859},
                                    {"name": "LegendItem", "size": 4614},
                                    {"name": "LegendRange", "size": 10530}
                                ]
                            },
                            {
                                "name": "operator",
                                "children": [
                                    {
                                        "name": "distortion",
                                        "children": [
                                            {"name": "BifocalDistortion", "size": 4461},
                                            {"name": "Distortion", "size": 6314},
                                            {"name": "FisheyeDistortion", "size": 3444}
                                        ]
                                    },
                                    {
                                        "name": "encoder",
                                        "children": [
                                            {"name": "ColorEncoder", "size": 3179},
                                            {"name": "Encoder", "size": 4060},
                                            {"name": "PropertyEncoder", "size": 4138},
                                            {"name": "ShapeEncoder", "size": 1690},
                                            {"name": "SizeEncoder", "size": 1830}
                                        ]
                                    },
                                    {
                                        "name": "filter",
                                        "children": [
                                            {"name": "FisheyeTreeFilter", "size": 5219},
                                            {"name": "GraphDistanceFilter", "size": 3165},
                                            {"name": "VisibilityFilter", "size": 3509}
                                        ]
                                    },
                                    {"name": "IOperator", "size": 1286},
                                    {
                                        "name": "label",
                                        "children": [
                                            {"name": "Labeler", "size": 9956},
                                            {"name": "RadialLabeler", "size": 3899},
                                            {"name": "StackedAreaLabeler", "size": 3202}
                                        ]
                                    },
                                    {
                                        "name": "layout",
                                        "children": [
                                            {"name": "AxisLayout", "size": 6725},
                                            {"name": "BundledEdgeRouter", "size": 3727},
                                            {"name": "CircleLayout", "size": 9317},
                                            {"name": "CirclePackingLayout", "size": 12003},
                                            {"name": "DendrogramLayout", "size": 4853},
                                            {"name": "ForceDirectedLayout", "size": 8411},
                                            {"name": "IcicleTreeLayout", "size": 4864},
                                            {"name": "IndentedTreeLayout", "size": 3174},
                                            {"name": "Layout", "size": 7881},
                                            {"name": "NodeLinkTreeLayout", "size": 12870},
                                            {"name": "PieLayout", "size": 2728},
                                            {"name": "RadialTreeLayout", "size": 12348},
                                            {"name": "RandomLayout", "size": 870},
                                            {"name": "StackedAreaLayout", "size": 9121},
                                            {"name": "TreeMapLayout", "size": 9191}
                                        ]
                                    },
                                    {"name": "Operator", "size": 2490},
                                    {"name": "OperatorList", "size": 5248},
                                    {"name": "OperatorSequence", "size": 4190},
                                    {"name": "OperatorSwitch", "size": 2581},
                                    {"name": "SortOperator", "size": 2023}
                                ]
                            },
                            {"name": "Visualization", "size": 16540}
                        ]
                    }
                ]
            }];
        }
    };
    
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();
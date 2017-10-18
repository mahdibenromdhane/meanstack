var a;	  
angular.module('MyApp')
    .controller('HomeController', ['$scope', '$http','$timeout',  function ($scope, $http,$timeout ) {
console.log("aa ");
	 $scope.abbes=false;
  	Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Utilisation journaliere'
            },
            subtitle: {
                text: ' '
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: ''
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f} H'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },

            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'January',
                    y: 15,

                },
                    {
                        name: 'Februrary',
                        y: 12,

                    },
                    {
                        name: 'Mars',
                        y: 20,

                    },
                    {
                        name: 'April',
                        y: $scope.avril,

                    },
                    {
                        name: 'Mail',
                        y: $scope.mai,

                    },
                    {
                        name: 'June',
                        y: $scope.juin,

                    },
                    {
                        name: 'July',
                        y: $scope.juillet,

                    },
                    {
                        name: 'August',
                        y: $scope.aout,

                    },
                    {
                        name: 'Septembre',
                        y: $scope.septembre,

                    },
                    {
                        name: 'October',
                        y:$scope.octobre,

                    },
                    {
                        name: 'November',
                        y: $scope.novembre,

                    },
                    {
                        name: 'December',
                        y: 15,

                    },
                ]
            }],
            drilldown: {
                series: [{
                    name: 'Microsoft Internet Explorer',
                    id: 'Microsoft Internet Explorer',
                    data: [
                        [
                            'v11.0',
                            24.13
                        ],
                        [
                            'v8.0',
                            17.2
                        ],
                        [
                            'v9.0',
                            8.11
                        ],
                        [
                            'v10.0',
                            5.33
                        ],
                        [
                            'v6.0',
                            1.06
                        ],
                        [
                            'v7.0',
                            0.5
                        ]
                    ]
                }, {
                    name: 'Chrome',
                    id: 'Chrome',
                    data: [
                        [
                            'v40.0',
                            5
                        ],
                        [
                            'v41.0',
                            4.32
                        ],
                        [
                            'v42.0',
                            3.68
                        ],
                        [
                            'v39.0',
                            2.96
                        ],
                        [
                            'v36.0',
                            2.53
                        ],
                        [
                            'v43.0',
                            1.45
                        ],
                        [
                            'v31.0',
                            1.24
                        ],
                        [
                            'v35.0',
                            0.85
                        ],
                        [
                            'v38.0',
                            0.6
                        ],
                        [
                            'v32.0',
                            0.55
                        ],
                        [
                            'v37.0',
                            0.38
                        ],
                        [
                            'v33.0',
                            0.19
                        ],
                        [
                            'v34.0',
                            0.14
                        ],
                        [
                            'v30.0',
                            0.14
                        ]
                    ]
                }, {
                    name: 'Firefox',
                    id: 'Firefox',
                    data: [
                        [
                            'v35',
                            2.76
                        ],
                        [
                            'v36',
                            2.32
                        ],
                        [
                            'v37',
                            2.31
                        ],
                        [
                            'v34',
                            1.27
                        ],
                        [
                            'v38',
                            1.02
                        ],
                        [
                            'v31',
                            0.33
                        ],
                        [
                            'v33',
                            0.22
                        ],
                        [
                            'v32',
                            0.15
                        ]
                    ]
                }, {
                    name: 'Safari',
                    id: 'Safari',
                    data: [
                        [
                            'v8.0',
                            2.56
                        ],
                        [
                            'v7.1',
                            0.77
                        ],
                        [
                            'v5.1',
                            0.42
                        ],
                        [
                            'v5.0',
                            0.3
                        ],
                        [
                            'v6.1',
                            0.29
                        ],
                        [
                            'v7.0',
                            0.26
                        ],
                        [
                            'v6.2',
                            0.17
                        ]
                    ]
                }, {
                    name: 'Opera',
                    id: 'Opera',
                    data: [
                        [
                            'v12.x',
                            0.34
                        ],
                        [
                            'v28',
                            0.24
                        ],
                        [
                            'v27',
                            0.17
                        ],
                        [
                            'v29',
                            0.16
                        ]
                    ]
                }]
            }
        });
						   
      $http.get('/api/statistics').success(function (data) {

            $scope.statistics = data;

            for(var i=0;i<data.length;i++)
            {

                switch (data[i].mois)
                {
                    case 'Janvier':
                    $scope.janvier=data[i].utilisation;
                        a=$scope.janvier;

                        break;
                    case 'Fevrier': $scope.fevrier=data[i].utilisation;
                        break;
                    case 'Mars': $scope.mars=data[i].utilisation;
                        break;
                    case 'Avril': $scope.avril=data[i].utilisation;
                        break;
                    case 'Mai': $scope.mai=data[i].utilisation;
                        break;
                    case 'Juin': $scope.juin=data[i].utilisation;
                        break;
                    case 'Juillet': $scope.juillet=data[i].utilisation;
                        break;
                    case 'Aout': $scope.aout=data[i].utilisation;
                        break;
                    case 'Septembre': $scope.septembre=data[i].utilisation;
                        break;
                    case 'Octobre': $scope.octobre=data[i].utilisation;
                        break;
                    case 'Novembre': $scope.novembre=data[i].utilisation;
                        break;
                    case 'Decembre': $scope.decembre=data[i].utilisation;
                        break;



                    default:  document.write("Unknown <br />")
                }
            }

            console.log(a+"lde5el");

        });
console.log(a+"lbarra");

        $http.get('/api/notifications').success(function (data) {
            $scope.notifications = data;
            console.log("data");

        });
  
        $scope.reload = function () {
            $http.get('https://powerx.herokuapp.com').
            success(function (data) {
                $scope.donnees = data;
            // console.log(data);
            });
            $timeout(function(){
                $scope.reload();
            },900);
        };
        $scope.reload();
        
      	var socket = io.connect('https://push-notifi.herokuapp.com/');
	socket.on('notification', function (data) {
		document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }
	
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});


  if (window.Notification && Notification.permission !== "granted")
    Notification.requestPermission();
  else {
  console.log(data.message);
  if(data.message=="empty"){
    var notification = new Notification('Alert', {
      icon: 'images/empty.png',
        body: "Battery is empty !"
	  
    });
    
                    }
                      if(data.message=="full"){
    var notification = new Notification('Alert', {
      icon: 'images/full.png',
      body: "Battery is full !"
	  
    });
    
                    }
	Notification.onerror= function () {
	alert('error');
	};
    notification.onclick = function () {
      window.open("http://detect.tn/pushClient/");   
    };

  }


	});

           $scope.reloadweather = function () {
                $http.get('http://api.openweathermap.org/data/2.5/weather?id=2472818&appid=55d0b6a25e42c5c8f2bb7530ab6f54ec').
                success(function (data) {
                    $scope.weather = data;
                    $scope.data=data;

                });

            };
        $scope.reloadweather();
    }]);


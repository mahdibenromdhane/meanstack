angular.module('MyApp')

    .controller('ListCarHistoryController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {
$scope.carid = $routeParams.idcar;
$scope.histories=[];
        $http({
            method : "GET",
            //TODO: à modifier apres la gestion des utilisateur id user statique
            url : "/api/cars/"+$routeParams.idcar
        }).then(function mySucces(response) {
            $scope.car = response.data;
        }, function myError(response) {
            console.log(response.statusText);
        });

        $http.get("/api/car/history/"+$routeParams.idcar).success(function (data, status) {
            $scope.histories = data;
        });

        $scope.deletecarhistory = function (carhistory,_index) {
            console.log(carhistory._id);
            $http.delete( "/api/car/history/"+carhistory._id).success(function (data, status) {
                $scope.histories.splice( $scope.histories.indexOf(carhistory), 1 );
                console.log("ok");
            });
        };


    }])

    .controller('AddCarHistoryController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {

        $http({
            method : "GET",
            //TODO: à modifier apres la gestion des utilisateur id user statique
            url : "/api/cars/"+$routeParams.idcar
        }).then(function mySucces(response) {
            $scope.car = response.data;
        }, function myError(response) {
            console.log(response.statusText);
            //location path ajouter
        });

        $scope.addCarHistory = function () {
            var mydata =
            {
                place: $scope.place,
                datemaintenance:$scope.datemaintenance,
                remarks: $scope.remarks,
                odometer: $scope.odometer,
                price: $scope.price,
                category: $scope.category
            };

            $http({
                method: 'POST',
                url: '/api/car/history/'+$routeParams.idcar,
                data: mydata,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                console.log(status);
                $location.path('car/history/'+$routeParams.idcar);
            }).error(function (data, status, headers, config) {
                console.log(status);

            });
        };


    }])
    .controller('ModifyCarHistoryController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {

///api/car/history/gethistory/idd
        $http({
            method : "GET",
            //TODO: à modifier apres la gestion des utilisateur id user statique
            url : "api/car/history/gethistory/"+$routeParams.idhistory
        }).then(function mySucces(response) {
            $scope.history = response.data;
            console.log($scope.history);
        }, function myError(response) {
            console.log(response.statusText);
        });


        $scope.modifycarHistory = function () {

            $http({
                method : "GET",
                url : "/api/cars/"+ $scope.history.car_id
            }).then(function mySucces(response) {
                $scope.car = response.data;
            }, function myError(response) {
                console.log(response.statusText);

            });
            var mydata =
                {
                    place: $scope.history.place,
                    datemaintenance:$scope.history.datemaintenance,
                    remarks: $scope.history.remarks,
                    odometer: $scope.history.odometer,
                    price: $scope.history.price,
                    category: $scope.history.category
                };
            $http({
                method: 'PUT',
                url: '/api/car/history/'+$scope.history._id,
                data: mydata,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                console.log(status);
                $location.path('car/history/'+ $scope.history.car_id);
            }).error(function (data, status, headers, config) {
                console.log(status);

            });
        };


    }])


//


;



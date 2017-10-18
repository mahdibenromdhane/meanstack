
angular.module('MyApp')
    .controller('batteryController', ['$scope','$http','$routeParams','$location','$timeout', function ($scope, $http, $routeParams,$location,$timeout) {
        $http({
            method : "GET",
            url : "/api/cars/"+$routeParams.idcar
        }).then(function mySucces(response) {
            $scope.car = response.data;
            $scope.reload = function () {
                $http.get('https://powerx.herokuapp.com').
                success(function (data) {
                    $scope.datas = data;
                });
                $timeout(function(){
                    $scope.reload();
                },20);
            };
            $scope.reload();

        }, function myError(response) {
            console.log(response.statusText);
            if (window.confirm('Car not found'))
            {
                $location.path('/cars/list/58ef8afed4a5371f5cbddd9a');
            }

        });

    }]);











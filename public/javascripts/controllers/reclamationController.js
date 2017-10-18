angular.module('MyApp')
    .controller('reclamationController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {

        $scope.addReclamation = function () {
            var data = {
                responseType: $scope.responseType,

 subject: $scope.subject,
                Email: $scope.Email,
                Content:$scope.Content

            };

            $http.post('/api/reclamations/', data).success(function (data, status) {
                console.log($routeParams.iduser);
            });
            $location.path('/ListSupport');


        };


    }])
    .controller('responseController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {

        $scope.addReclamation = function () {
            alert($routeParams.Email);
            var data = {
                Email: $routeParams.Email,

                Content: $scope.Content


            };

            $http.post('/api/reclamations/response', data).success(function (data, status) {
                console.log($routeParams.Email);
            });
            $location.path('/ListSupport');


        };


    }])

    .controller('ListReclamationController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {
        $http({
            method : "GET",
            //TODO: à modifier apres la gestion des utilisateur id user statique
            url : "/api/reclamations/"
        }).then(function mySucces(response) {
            $scope.reclamation = response.data;
            console.log($scope.reclamation);
        }, function myError(response) {
            console.log(response);
        });


    }])
;
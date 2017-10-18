angular.module('MyApp')
    .controller('StartquizController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {


        $http.get("/api/quiz/subject/"+$routeParams.category).success(function (data, status) {
            $scope.quizes = data;

        });


    }])



;


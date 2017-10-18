
var app = angular.module('MyApp', ['ngRoute']);


app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider


        .when('/admin', {
            templateUrl: './views/admin.view.html'
        })

}]);


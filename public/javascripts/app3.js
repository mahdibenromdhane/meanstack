var app = angular.module('MyApp', ['ngRoute']);


app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider


        .when('/signin', {
            templateUrl: '../views/login.view.html'
        })
        .when('/reset', {
            templateUrl: '../views/reset.view.html'
        })
        .when('/signup', {
        templateUrl: '../views/register.view.html'
    }) .when('/signup2', {
        templateUrl: '../views/registerCar.view.html'
    })  ;
$locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
}]);


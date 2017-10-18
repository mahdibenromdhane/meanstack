angular.module('MyApp')
    .controller('NotificationController', ['$scope', '$http','$timeout','$routeParams','$location',  function ($scope, $http,$timeout,$routeParams,$location ) {

        $http.get('/api/notifications').success(function (data) {
            alert("ok");
            $scope.notifications = data;


        });



        $scope.removeNotification = function(id){

            $http.delete('/api/notifications/'+id).success(function(data){
                console.log($routeParams.libelle);
            });

            $location.path('/notifications');

        };
        $scope.addNotif = function () {
            var data = {
                libelle: $scope.libelle,
                description: $scope.description



            };
            $http.post('/api/notifications/add', data).success(function (data, status) {
                  $location.path('/notifications');
            });



        };


    }])

.controller('editNotifCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get('/api/notifications/one/'+$routeParams.id).success(function (data) {
        console.log($routeParams.id);
        $scope.notif = data;
    });

    $scope.updateNotification = function(id){

        $http.put('/api/notifications/'+id).success(function(data){

        });



    };



}])
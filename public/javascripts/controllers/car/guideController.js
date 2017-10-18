angular.module('MyApp')
    .controller('guideAllController', ['$scope', '$http', function ($scope, $http) {
        $http.get('/api/car/guides').success(function (data) {
            $scope.guides = data;
        });
    }])
    .controller('guideShowController', ['$scope','$http','$routeParams','$sce', function ($scope, $http, $routeParams,$sce) {
        $http.get('/api/car/guides/'+$routeParams.id).success(function(data){
            $scope.guide = data;
            $scope.guide.description = $sce.trustAsHtml(data.description);
        });
    }]);
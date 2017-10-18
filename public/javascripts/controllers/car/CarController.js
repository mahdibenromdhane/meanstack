angular.module('MyApp')
    .controller('AddCarController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {
        $scope.models = carmodels();
        $scope.addCar = function () {
            var mydata = {
                immatriculation: $scope.immatriculation,
                model: $scope.model,
                name: $scope.name,
                year:$scope.year,
                color: $scope.color,
                energie : $scope.energie,
                puissance: $scope.puissance,
                category: $scope.category
            };
            //TODO: à modifier apres la gestion des utilisateur id user statique
            $http({
                method: 'POST',
                url: '/api/cars/'+$routeParams.iduser,
                data: mydata,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                console.log(status);
                $location.path('/');
            }).error(function (data, status, headers, config) {
                console.log(status);
                $location.path('/cars/add/'+$routeParams.iduser)
            });
        };


    }])
    .controller('ListCarController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {
        $http.get("/api/cars/usercars/"+$routeParams.iduser).success(function (data, status) {
            $scope.cars = data;
        });
        $scope.deletecar = function (car,_index) {

            if (window.confirm('Delete Car?'))
            {
                $http.delete( "/api/cars/"+car._id).success(function (data, status) {
                    $scope.cars.splice( $scope.cars.indexOf(car), 1 );
                    console.log("ok");
                });
            }
            else {
                //$location.path('/cars/list/58ef8afed4a5371f5cbddd9a');
            }






        };
    }])
    .controller('ShowCarController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {
        $http({
            method : "GET",
            //TODO: à modifier apres la gestion des utilisateur id user statique
            url : "/api/cars/"+$routeParams.idcar
        }).then(function mySucces(response) {
            $scope.car = response.data;
        }, function myError(response) {
            console.log(response.statusText);
        });
    }])
    .controller('ModifyCarController', ['$scope','$http','$routeParams','$location', function ($scope, $http, $routeParams,$location) {

        $scope.models = carmodels();

        $http({
            method : "GET",
            //TODO: à modifier apres la gestion des utilisateur id user statique
            url : "/api/cars/"+$routeParams.idcar
        }).then(function mySucces(response) {
            $scope.car = response.data;
            console.log($scope.car);
        }, function myError(response) {
            console.log(response.statusText);
            $location.path('/');
        });


        $scope.modifyCar = function () {
            var mydata = {
                immatriculation: $scope.car.immatriculation,
                model: $scope.car.model,
                name: $scope.car.name,
                year:$scope.car.year,
                color: $scope.car.color,
                energie : $scope.car.energie,
                puissance: $scope.car.puissance,
                category: $scope.car.category
            };
            //TODO: à modifier apres la gestion des utilisateur id user statique
            $http({
                method: 'PUT',
                url: '/api/cars/'+$scope.car._id,
                data: mydata,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                console.log(status);
                console.log("test sucess");
                //user statique
                $location.path('/cars/list/58ef8afed4a5371f5cbddd9a');

            }).error(function (data, status, headers, config) {
                console.log(config);
                console.log("test fail");

            });
        };

    }])


;

function carmodels(){
    return  [{"name": "Acura"}, {"name": "Alfa Romeo"}, {"name": "Aston Martin"}, {"name": "Audi"}, {"name": "Bentley"},
        {"name": "BMW"}, {"name": "Bugatti"}, {"name": "Buick"}, {"name": "Chevrolet"}, {"name": "Chrysler"}, {"name": "Citroen"},
        {"name": "Dodge"}, {"name": "Ferrari"}, {"name": "Fiat"}, {"name": "Ford"}, {"name": "Geely"}, {"name": "General Motors"},
        {"name": "GMC"}, {"name": "Honda"}, {"name": "Hyundai"}, {"name": "Infiniti"}, {"name": "Jaguar"}, {"name": "Jeep"},
        {"name": "Kia"}, {"name": "Lamborghini"}, {"name": "Land Rover"}, {"name": "Lexus"}, {"name": "Maserati"}, {"name": "Mazda"},
        {"name": "McLaren"}, {"name": "Mercedes-Benz"}, {"name": "Mini"}, {"name": "Mitsubishi"}, {"name": "Nissan"}, {"name": "Pagani"},
        {"name": "Peugeot"}, {"name": "Porsche"}, {"name": "Ram"}, {"name": "Renault"}, {"name": "Rolls Royce"}, {"name": "Saab"},
        {"name": "Subaru"}, {"name": "Suzuki"},
        {"name": "Tata Motors"}, {"name": "Tesla"}, {"name": "Toyota"}, {"name": "Volkswagen"}, {"name": "Volvo"}
    ];
}


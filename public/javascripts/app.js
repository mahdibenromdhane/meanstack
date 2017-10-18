
var app = angular.module('MyApp', ['ngRoute']);


app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider
.when('/response/:Email', {
                templateUrl: 'views/response.view.html',
                controller: 'responseController'
            })

        .when('/users', {
            templateUrl: './views/users.view.html',
            controller: 'UsersController'
        })
        .when('/users/authentificate', {
            templateUrl: './views/authentificate.view.html'
            , controller: 'UsersController'
        })
        .when('/user/add', {
        templateUrl: './views/add_user.view.html'
        , controller: 'UserCreateController'
    })   .when('./login', {
        controller: 'LoginController'
    })
        .when('/battery', {
            templateUrl: './views/battery.view.html',
            controller: 'batteryController'
        })
      .when('/home', {
            templateUrl: './views/home.view.html',
             controller: 'HomeController'
           
        })
		.when('/notif/add', {
            templateUrl: './views/notification.view.html',
            controller: 'NotificationController'

        })
        .when('/notifications', {
            templateUrl: './views/notifications.view.html',
            controller: 'NotificationController'

        })
        
        
            
            .when('/ListSupport', {
            templateUrl: 'views/Listsupport.view.html',
            controller: 'ListReclamationController'

        })
        
                .when('/support', {
        templateUrl: 'views/support.view.html',
        controller: 'reclamationController'
           
        })

        .when('/notification/edit/:id', {
            templateUrl: 'views/edit_notification.view.html'
            , controller: 'editNotifCtrl'
        })
        .when('/Mesfactures', {
            templateUrl: 'views/factures.view.html',
            controller: 'FactureController'

    })


        .when('/forum', {
            templateUrl: 'views/forum.view.html',
            controller:'ForumController'

        })
        .when('/forums/:id', {
            templateUrl: 'views/sujet.view.html',
            controller:'SujetController'
        })
        .when('/forums/sujets/:id', {
            templateUrl: 'views/messages.view.html',
            controller:'MessageController'

        })
        .when('/subject/addsubject', {
            templateUrl: 'views/addSubject.view.html',
            controller:'MessageController'

        })						 
        .when('/map', {
            templateUrl: './views/map.view.html'
          
        })
         .when('/data/:idcar', {
            templateUrl: './views/data.view.html',
            controller: 'batteryController'
        })
        /**************Car URL ********************************/
        .when('/car/guides', {
            templateUrl: './views/car/guideAll.view.html',
            controller: 'guideAllController'
        })
        .when('/car/guides/:id', {
            templateUrl: './views/car/guideShow.view.html',
            controller: 'guideShowController'
        })
        .when('/cars/add/:iduser', {
            templateUrl: './views/car/AddCar.view.html',
            controller: 'AddCarController'
        })
        .when('/cars/list/:iduser', {
            templateUrl: './views/car/ListCars.view.html',
            controller: 'ListCarController'
        })
        .when('/cars/show/:idcar', {
            templateUrl: './views/car/ShowCar.view.html',
            controller: 'ShowCarController'
        })
        .when('/cars/modify/:idcar', {
            templateUrl: './views/car/modify.view.html',
            controller: 'ModifyCarController'
        })
        .when('/car/history/:idcar', {
            templateUrl: './views/historyCar/HistoryCarList.view.html',
            controller: 'ListCarHistoryController'
        })
        .when('/car/history/add/:idcar', {
            templateUrl: './views/historyCar/AddCarHistory.view.html',
            controller: 'AddCarHistoryController'
        })
        .when('/car/history/modify/:idhistory', {
            templateUrl: './views/historyCar/modifyHistory.view.html',
            controller: 'ModifyCarHistoryController'
        })
        /**************Quiz URL ********************************/
        .when('/quiz/start/', {
            templateUrl: './views/quiz/StartQuiz.view.html',
        })
       .when('/quiz/:category/:iduser', {
                templateUrl: './views/quiz/quizView.view.html',
                controller: 'StartquizController'
       })														

}]);


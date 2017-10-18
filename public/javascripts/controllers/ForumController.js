angular.module('MyApp')
    .controller('ForumController', ['$scope', '$http','$timeout','$routeParams','$location',  function ($scope, $http,$timeout,$routeParams,$location ) {
        $scope.abbes=false;


        $http.get('/api/forums').success(function (data) {
            $scope.forums = data;


        });






    }]).controller('SujetController', ['$scope', '$http','$timeout','$routeParams','$location',  function ($scope, $http,$timeout,$routeParams,$location ) {


    $scope.updateSubject = function(id){

        $http.put('/api/sujets/'+id).success(function(data){
            $location.path('/sujets');
        });



    };
   $scope.like=true;
   $scope.dislike=false;
    $scope.result=[];
$scope.getLikes=function (id) {
    $http.get('/api/likes/'+id).success(function (data) {
        $scope.likes = data;
        //console.log($scope.likes);
        $scope.result.push($scope.likes) ;
        //console.log($scope.result);
    });
}
    $scope.result2=[];
    $scope.getResponse=function (id) {
        $http.get('/api/commentaires/count/'+id).success(function (data) {
            $scope.responses = data;
            //console.log($scope.likes);
            $scope.result2.push($scope.responses) ;
            console.log($scope.result2);
        });
    }





    $scope.addLike = function (id) {
        var data = {


        };
        $http.post('/likes/add/'+id, data).success(function (data, status) {

        });

        $scope.like=false;
        $scope.dislike=true;

    };

    $scope.adddislike= function (id) {
        var data = {


        };
        $http.delete('/likes/'+id, data).success(function (data, status) {

        });

        $scope.like=true;
        $scope.dislike=false;
    };

    $scope.removeSubject = function(id){

        $http.delete('/sujets/'+id).success(function(data){

        });


    };



    $http.get('/commentaires' ).success(function (data) {
        $scope.commentaires = data;
var nb=0;
$scope.getComments=function (id) {

    for(var i=0;i<$scope.commentaires.length;i++)
    {
        if($scope.commentaires[i].idSujet==id)
        {
            nb++;
        }
        $scope.nbr=nb;
    }
   // console.log(nb);
    $scope.nbr=nb;
    //console.log($scope.nbr);
    nb=0;

}







    });


    $scope.afficherForm=function () {
        $scope.abbes=true;
       // console.log("abbes");
    }
    $http.get('/sujets/'+$routeParams.id).success(function (data) {
        $scope.sujets = data;


    });
    $scope.addSubject = function () {
        var data = {
            libelle: $scope.libelle,
            description: $scope.description,
            titre:$scope.titre,
            idForum:$routeParams.id

        };
        $http.post('/sujets/add/'+$routeParams.id, data).success(function (data, status) {
             $scope.sujets.push(data);
        });

$scope.abbes=false;

    };



}]).controller('MessageController', ['$scope', '$http','$timeout','$routeParams','$location',  function ($scope, $http,$timeout,$routeParams,$location ) {
    $scope.removeMessage = function(id){

        $http.delete('/commentaires/'+id).success(function(data){

        });


    };


    $scope.afficherForm2=function () {
        $scope.comm=true;
       // console.log("abbes");
    }
    $scope.addMessage = function () {
        var data = {

            description: $scope.description,
            titre:$scope.titre,
            idSujet:$routeParams.id



        };
        $http.post('/commentaires/add/'+$routeParams.id, data).success(function (data, status) {

        });

        $scope.comm=false;

    };

    $http.get('/commentaires/' + $routeParams.id ).success(function (data) {
        $scope.commentaires = data;

        for(var i=0;i<$scope.commentaires.length;i++)
        {
            console.log("salut");
            console.log(data[i]);
        }






    });
/*
    $http.get('/forums/' + $routeParams.id ).success(function (data) {
        $scope.forums = data;
        console.log($routeParams.id2);
        $scope.message=[];
        //console.log(data);


        for(var i=0;i<data.sujets.length;i++)
        {
           if( data.sujets[i].id==$routeParams.id2)
           {

               for(var j=0;j<data.sujets[i].messages.length;j++)
               {

                   $scope.message.push(data.sujets[i].messages[j]);
               }
           }



        }


        console.log($scope.message);

    });
    */

}]);



angular.module('MyApp')
    .controller('FactureController', ['$scope', '$http','$timeout','$routeParams','$location',  function ($scope, $http,$timeout,$routeParams,$location ) {
        var trim1=[];
        $http.get('/api/factures').success(function (data) {
            $scope.factures = data;

            for(var i=0;i<data.length;i++)
            {
                if((data[i].mois==1)||(data[i].mois==2)||(data[i].mois==3))
                {
                  trim1.push(data[i]);
                }

            }


            $scope.facture1=trim1;
            for(var i=0;i<$scope.facture1.length;i++)
            {
                console.log($scope.facture1[i].luminositeN);
            }

        });


       $scope.generatePDF = function() {
                kendo.drawing.drawDOM($("#formConfirmation")).then(function(group) {
                    kendo.drawing.pdf.saveAs(group, "Converted PDF.pdf");
                });
            }




}])



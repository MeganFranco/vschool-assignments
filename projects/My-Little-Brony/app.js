var app = angular.module("MyLittleBronyApp", []);

app.controller("MainController", ["$scope", "PonyService", function ($scope, PonyService) {

    
    
//////////////ADD/////////////////
    $scope.favoritePonies = PonyService.poniesList
    console.log($scope.favoritePonies)
    
    $scope.addPony = function (pony) {
        console.log(pony);
        PonyService.addPony(pony);
        PonyService.addPonyToServer(pony);
       //NOT DISPLAYING WHEN ONLY ADDING TO SERVER
    };
///////////////SHOW///////////////
    $scope.showPonies = function (){
        
        $scope.favoritePonies = PonyService.takeFromServer();
        
    }
    
//////////////DELETE//////////////////////    
    $scope.deletePony = function($index){
        //PonyService.deletePony($index);
        PonyService.deletePonyFromServer($index);
    }
    
        
}]);

////////////////////////////








//1 call add function $scope.addpony()
//call managerService add pony
//
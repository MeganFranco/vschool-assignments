var app = angular.module("MyLittleBronyApp", []);

app.controller("MainController", ["$scope", "PonyService", function ($scope, PonyService) {

    
    $scope.favoritePonies = PonyService.poniesList
   // console.log($scope.favoritePonies)
    
    
//////////////ADD/////////////////
    
    $scope.addPony = function (pony) {
        console.log(pony);
//        PonyService.addPony(pony);
       PonyService.addPonyToServer(pony);
       
        
        $scope.pony = {};
    };
///////////////SHOW///////////////
    $scope.showPonies = function (){
    PonyService.showAllPonies();
        console.log($scope.favoritePonies)
        
        
    }
    
//////////////DELETE//////////////////////    
    $scope.deletePony = function(pony){
        PonyService.deletePony(pony);
        PonyService.deletePonyFromServer(pony);
//        PonyService.showAllPonies();
    }
    

    
    
///////////EDIT/////////////////
    $scope.editPony = function(pony, index){
        
        $scope.favoritePonies = PonyService.editPonyFn(pony, index); 
        console.log("hello")

        //let them change
        //make new pony
        //save new pony
        //delete old pony
    }
    
    
    
}]);








//1 call add function $scope.addpony()
//call managerService add pony
//
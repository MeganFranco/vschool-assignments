var app = ("MyLittleBronyApp", ["ngRoute"])

app.controller("MainController", ["$scope", "PonyService", function($scope, PonyService){
    
    $scope.favoritePonies = PonyService.poniesList
    
    $scope.addPony = function(){
        ManagerService.addPony($pony)
    }
    
}])

//1 call add function $scope.addpony()
//call managerService add pony
//
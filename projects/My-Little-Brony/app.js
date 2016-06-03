var app = ("MyLittleBronyApp", ["ngRoute"])

app.controller("MainController", ["$scope", "ManagerService", function($scope, ManagerService){
    
    $scope.addPony = function(){
        ManagerService.addPony($pony)
    }
    
}])

//1 call add function $scope.addpony()
//call managerService add pony
//
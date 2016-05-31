var app = angular.module("PokeProfile", [])

app.controller("MainController", ["$scope", "PokeServices", function($scope, PokeServices){
    
    $scope.getNumber = function(){
        $scope.userNumber = $scope.enteredNumber;
        
        console.log($scope.userNumber)
    }
}])
var app = angular.module("CartoonNetwork", []);

app.controller("MainController", ["$scope", "CartoonService", function($scope, CartoonService){
    
    $scope.addToon = function(toon){
        $scope.cartoonList = CartoonService.addToonToList(toon);
        $scope.toon = {}
        console.log($scope.cartoonList)
    }
    
    
}]);

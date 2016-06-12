var app = angular.module("UglyThings", [])

app.controller("MainController", ["$scope", function($scope){
    
        $scope.uglyThings = [];
        
    $scope.addUglyThing = function() {
        
        $scope.uglyThings.push($scope.uglyThing)
        $scope.uglyThing = {};
        
    }
    
}])
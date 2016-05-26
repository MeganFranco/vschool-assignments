var app = angular.module("NameBadge", []);

angular.module('app', ['ngMessages']);

app.controller("MainController", ["$scope", function($scope){
      
    $scope.users = [];
   
   $scope.addPerson = function(){
     $scope.users.push($scope.user);
       $scope.user = {};
   };
    
    $scope.colors["red", "blue", "green", "orange", "purple"]
    
}])
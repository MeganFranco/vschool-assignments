var app = angular.module("NameBadge", []);


app.controller("MainController", ["$scope", function($scope){
      
    $scope.users = [];
   
   $scope.addPerson = function(){
    
       $scope.users.push($scope.user);
       
       console.log($scope.user)
       $scope.user = {};
       
   };
    
    $scope.colors = ["crimson", "blue", "green", "darkorange", "purple" ]
    
//    "purple"
    
}])
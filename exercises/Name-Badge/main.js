var app = angular.module("NameBadge", ['ngCookies']);


app.controller("MainController", ["$scope", "$cookies", "$cookieStore", function($scope, $cookies, $cookieStore ){
    $scope.
    
    var vm = this;
    
    $scope.users = [];
   
   $scope.addPerson = function(){
    
       $scope.users.push($scope.user);
       
       console.log($scope.user)
       $scope.user = {};
       
   };
    
    $scope.colors = ["crimson", "blue", "green", "darkorange", "purple" ];

//////////////////STORE/////////////////////
    //give a key-value pair... but what should I make the value? 
    $cookieStore.put("keepBadge", vm.users )
    
/////////////////REMOVE////////////////

    //$scope.removeBadge function(person){
    //    $scope.person.splice(index, 1)
    //}    

    
}])
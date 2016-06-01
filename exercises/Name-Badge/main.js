var app = angular.module("NameBadge", ['ngStorage']);


app.controller("MainController", ["$scope", "$localStorage", function($scope, $localStorage){

    
    $scope.users = [];
   
   $scope.addPerson = function(){
    
       $scope.users.push($scope.user);
       
       console.log($scope.user)
       $scope.user = {};
       
//       $localStorage.badge = $scope.badge;
       
   };
    
    $scope.colors = ["crimson", "blue", "green", "darkorange", "purple" ];

//////////////////STORE/////////////////////


    
    
    
//$scope.exerciseObj = {};
//  
//  /**
//   * Function that saves scope object to Local Storage
//   */
//  $scope.saveToLocalStorage = function(){
//    $localStorage.exerciseObj = $scope.exerciseObj;
//  };
//  
//   $scope.anotherScopeObj = $localStorage.exerciseObj;
    
/////////////////REMOVE////////////////

    //$scope.removeBadge function(person){
    //    $scope.person.splice(index, 1)
    //}    

    
}])
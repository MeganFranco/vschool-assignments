var app = angular.module("HitList", [])

app.controller("MainController", ["$scope", "$http", function($scope, $http){
   
 $http.get('http://mean.codingcamp.us:6543/hitlist.json')
     .then(function(response){
         
    $scope.myData = response.data
    
           console.log(response.data);
    
        });
    
}]);





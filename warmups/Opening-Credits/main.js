var app = angular.module("OpeningCredits", [])

app.controller("MainController", ["$scope", "$http", function($scope, $http){
    var baseUrl = "http://swapi.co/api/"
    
    $scope.showSWStuff = function() {
        
        $http.get("http://swapi.co/api/films/1")
            .then(function(response){
            
            $scope.starWarsCredits = response.data;
            
            
        })
    }
    
    
    
}])
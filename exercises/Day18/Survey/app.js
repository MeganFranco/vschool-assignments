var app = angular.module("ElfSurvey", [])

app.controller("MainController", ["$scope", "$http", function($scope, $http){
    
    
    $scope.totalAnswers[];
    
    ////////////get survey(?)//////////////////
    $http.get("http://mean.codingcamp.us:4455/survey/elfquestions/", )
        .then
    
    
    
    //////////////Add color////////////////////
    $http.post("http://mean.codingcamp.us:4455/survey/elfquestions/",)
        .then(function(response){
        
        
        
    })
    
    
    
}])



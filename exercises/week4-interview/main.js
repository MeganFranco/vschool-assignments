//app
//controller, single module with array and display the contents of the array as a list
var app = angular.module("WeekFourInterview", []);

app.controller("MainController", ["$scope", function($scope){
    $scope.interviewArray = ["blue", "orange", "yellow", "purple", "green", "red"];
    
}])
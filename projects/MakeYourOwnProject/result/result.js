var app = angular.module("GetWeather")

app.controller("ResultController", ["$scope", "WeatherService", function($scope, WeatherService){
    $scope.weatherService = WeatherService;
    
}]);
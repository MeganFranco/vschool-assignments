var app = angular.module("GetWeather")

app.controller("HomeController", ["$scope", "WeatherService", function($scope, WeatherService){
    console.log(WeatherService.forecast)
    
}]);



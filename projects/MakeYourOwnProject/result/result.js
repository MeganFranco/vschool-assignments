var app = angular.module("GetWeather")

app.controller("ResultController", ["$scope", "WeatherService", function($scope, WeatherService){
    $scope.weatherService = WeatherService;
//    $scope.city = WeatherService.userCity;
//    $scope.state = WeatherService.userState;
//    console.log($scope.city)
//    console.log($scope.state)
    
   // WeatherService.determineDecision(WeatherService.forecast.temperature, WeatherService.forecast.humidity, WeatherService.forecast.precipitation)
    

}]);


app.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);


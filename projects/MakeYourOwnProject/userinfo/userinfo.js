var app = angular.module("GetWeather")

app.controller("UserInfoController", ["$scope", "WeatherService", "$location", function ($scope, WeatherService, $location) {

    $scope.getLatLonResult = function () {

        WeatherService.getLatAndLon($scope.city, $scope.state)
            .then(function(){
//            console.log(WeatherService.userLocation)
            
            WeatherService.getForecast(WeatherService.userLocation.lat, WeatherService.userLocation.lng).then(function(){
//                console.log(WeatherService.forecast)
            })
            
            
            $location.path("/result")
            
        })
        
//        console.log
        
    }

}]);
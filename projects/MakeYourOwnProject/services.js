var app = angular.module("GetWeather");

app.service("WeatherService", ["$http", function ($http) {
    var self = this;
    this.userLocation = {}
//    this.forecast = {}

    this.getLatAndLon = function (city, state) {
        //do I need an object or array to store things?
        //    var locationLatAndLon = {}

        return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "+" +
                state + "&key=AIzaSyAAz4sE41qrndUfdqWNarYgGZxbz21veUQ")
            .then(function (response) {
                self.userLocation = response.data.results[0].geometry.location
            })

    }

    this.getForecast = function () {
        return $http.get("https://api.forecast.io/forecast/eecbf01a57664fff99bbd3f17275ffcc/" + userLocation.lat + "," + userLocation.lng)
            .then(function (response) {
            return response.data                
            }) .then (function(response){
            var forecast = response.data
            console.log(forecast)
        })
    }


}])
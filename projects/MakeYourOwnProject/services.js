var app = angular.module("GetWeather");

app.service("WeatherService", ["$http", function ($http) {
    var self = this;
    this.userLocation = {};
    this.forecast = {};
    var forecast;

    this.getLatAndLon = function (city, state) {
        return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "+" +
                state + "&key=AIzaSyAAz4sE41qrndUfdqWNarYgGZxbz21veUQ")
            .then(function (response) {
                self.userLocation = response.data.results[0].geometry.location
            })

    }
    
    ///////////////////////GET FORECAST//////////////////////

    this.getForecast = function (userLat, userLng) {
        return $http.get("https://api.forecast.io/forecast/eecbf01a57664fff99bbd3f17275ffcc/" + userLat + "," + userLng)
            .then(function (response) {
                forecast = response.data  
                console.log(forecast)
            })
    }


}])
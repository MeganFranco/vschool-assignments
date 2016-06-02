/*  adding a header?
http://stackoverflow.com/questions/15598917/adding-a-custom-header-to-http-request-using-angular-js
exactly my problem
http://stackoverflow.com/questions/30157413/api-call-in-javascript-returns-cors-error
*/
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
        var config = {
            headers: {
              "Authorization": "eecbf01a57664fff99bbd3f17275ffcc/",
            }
        };

        
        return $http.get("https://api.forecast.io/forecast/" + config  + userLat + "," + userLng)
            .then(function (response) {
                forecast = response.data  
                console.log(forecast)
            })
    }


}])
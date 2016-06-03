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
            this.decision = "";
            var forecast;
            var userCity;
            var userState;

            this.getLatAndLon = function (city, state) {

                return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "+" +
                        state + "&key=AIzaSyAAz4sE41qrndUfdqWNarYgGZxbz21veUQ")
                    .then(function (response) {
                        self.userLocation = response.data.results[0].geometry.location

                    })

            }

            ///////////////////////GET FORECAST//////////////////////

            this.getForecast = function (userLat, userLng) {


                return $http.jsonp("https://api.forecast.io/forecast/eecbf01a57664fff99bbd3f17275ffcc/" + userLat + "," + userLng + "?callback=JSON_CALLBACK")
                    .then(function (response) {
                        self.forecast = response.data.currently;
                        console.log(self.forecast)
                        self.determineDecision(self.forecast.temperature, self.forecast.humidity, self.forecast.precipProbability);

                    })
                    //            .then (function (currently){
                    //            self.forecast = responsecurrently;
                    //        })

                //        console.log(self.forecast)
                //make it so that self.forecast is exactly what you want  self.forecast = response.data 
            }

            //////////////////////DETERMINE DECISION////////////////////////////////

            this.determineDecision = function (temperature, humidity, precipitation) {
                if (precipitation < .50) {
//                    self.decision = "go outside";

                    if (humidity < .5) {
//                        self.decision = "go outside";
                        if (temperature > 60) {
                            self.decision = "go outside";
                        } else {
                            self.decision = "stay warm inside";
                        }

                    } else {
                        self.decision = "stay inside, it's gross out";
                    }

                } else {
                    self.decision = "stay dry inside";
                }
            }

            }])
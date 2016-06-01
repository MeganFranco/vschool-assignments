//API key: eecbf01a57664fff99bbd3f17275ffcc

var app = angular.module("GetWeather", ["ngRoute"])

app.config(function ($routeProvider){
    $routeProvider
    .when ("/",{
        templateUrl: "home/home.html",
        controller: "HomeController",
    })
    .when ("/location", {
        templateUrl: "userinfo/userinfo.html",
        controller: "userinfo.js",
    })
})
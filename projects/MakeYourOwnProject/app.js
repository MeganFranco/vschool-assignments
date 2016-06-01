//forecast API key: eecbf01a57664fff99bbd3f17275ffcc
//google API key: AIzaSyAAz4sE41qrndUfdqWNarYgGZxbz21veUQ

var app = angular.module("GetWeather", ["ngRoute"])

app.config(function ($routeProvider){
    $routeProvider
    .when ("/",{
        templateUrl: "home/home.html",
        controller: "HomeController",
    })
    .when ("/location", {
        templateUrl: "userinfo/userinfo.html",
        controller: "UserInfoController",
    })
    .when ("/result",{
        templateUrl: "result/result.html",
        controller: "ResultController"
    })
})
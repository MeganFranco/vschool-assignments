var app = angular.module("RejectionApp", ['ngRoute', 'RejectionApp.Auth', 'ngAudio']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/welcome/welcome.html",
//            controller: "WelcomeController",
        }).when("/tracker", {
            templateUrl: "components/tracker/tracker.html",
            controller: "TrackController"
        }).when("/zenRoom", {
            templateUrl: "components/zen-room/zen-room.html",
            controller: "ZenController",
        }).when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController"
        }).when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        }).when("/logout", {
            templateUrl: "components/auth/logout/logout.html",
            controller: "LogoutController"
        });
})
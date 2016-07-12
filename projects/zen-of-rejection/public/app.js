var app = angular.module("RejectionApp", ['ngRoute', 'RejectionApp.Auth'])

app.config(function ($routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl: "components/auth/login/login.html",
        controller: "LoginController"
    }).when("/signup", {
        templateUrl: "components/auth/signup/signup.html",
        controller: "SignupController"
    }).when("/logout", {
        controller: "LogoutController"
    });
})

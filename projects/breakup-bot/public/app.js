var app = angular.module("BreakupbotApp", ["ngRoute", "BreakupbotApp.Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/welcome/welcome.html"
        })
        .when("/about", {
            templateUrl: "components/about"
        })

});

app.controller("BreakupBotController", [ function(){
    
}]);
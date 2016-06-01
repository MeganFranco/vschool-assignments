var app = angular.module("FavoriteState", ["ngRoute"])

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home/home.html",
            controller: "HomeController",
        })
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "AboutController",
        }) 
         .when("/whyilove",{
            templateUrl: "why/whyilove.html",
            controller: "WhyController",
        })
            .otherwise("/",{
                templateUrl: "home/home.html",
                controller:"HomeController",
            }) 

});

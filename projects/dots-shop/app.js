var app = angular.module("DotsShop", ["ngRoute", "ngCart"]);

app.service("ShopService", ["$http", function ($http) {

}]);

app.controller("MainController", ["$scope", "ShopService", function ($scope, ShopService) {

}]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home/home.html",
            controller: "Home Controller",
        })
        .when("/about", {
            templateUrl: "templates/about/about.html",
            controller: "AboutController",
        })
        .when("/products", {
            templateUrl: "templates/products/products.html",
            controller: "ProductsController",
        })
        .otherwise("/", {
            templateUrl: "index.html",
            controller: "MainController",
        })


});

////////////////////////////////////////////////////////

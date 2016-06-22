var app = angular.module("DotsShop", ["ngRoute", "ngCart"]);

app.service("ShopService", ["$http", function ($http) {

}]);

app.controller("MainController", ["$scope", "ShopService", "ngCart", function ($scope, ShopService, ngCart) {
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);

}]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home/home.html",
            controller: "HomeController",
        })
        .when("/about", {
            templateUrl: "templates/about/about.html",
            controller: "AboutController",
        })
        .when("/products", {
            templateUrl: "templates/products/products.html",
            controller: "ProductsController",
        })
        .when("/cart", {
            templateUrl: "templates/shoppingcart/cart.html",
            controller: "CartController",
        })
        .when("/checkout", {
            templateUrl: "templates/checkout/checkout.html",
            controller: "CheckOutController",
        })
        .otherwise("/", {
            templateUrl: "index.html",
            controller: "MainController",
        })


});

////////////////////////////////////////////////////////
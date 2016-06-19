var app = angular.module("DotsShop");

app.service("ProductsService", ["$http", function ($http) {
    var baseUrl = "http://localhost:8000";
    var self = this;

    this.productsList = [];

    //function will take params when you give the option to filter
    this.getProducts = function (params) {
        if (params) {
            var config = {
                params: params
            };
            return $http.get(baseUrl + "/products", config)
                .then(function (response) {
                    self.productsList = response.data
                });
        } else {
            return $http.get(baseUrl + "/products")
                .then(function (response) {
                    self.productsList = response.data;
                })
        }
    };

}]);

app.controller("ProductsController", ["$scope", "ProductsService", "$location", "ngCart", function ($scope, ProductsService, $location, ngCart) {
    $scope.productService = ProductsService;
    //    ProductsService.getProducts();


    $scope.findProducts = function () {
        ProductsService.getProducts();
        console.log("controller line 36")
    }

    $scope.findProducts();
    
    $scope.filterProduct = function(name){
        $scope.findProducts(Brada)   
    }



    //    $scope.filterProduct = function(x) {
    //        ProductsService.getProducts(x)
    //        $location.url($location.path());
    //    }


}]);
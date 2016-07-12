var app = angular.module("DotsShop");

app.service("ProductsService", ["$http", function ($http) {
    var baseUrl = "http://localhost:8000";
    var self = this;

    this.productsList = [];

    //function will take params when you give the option to filter
    this.getProducts = function (key, search) {
        if (search) {
            if (key === 'maker') {
                var config = {
                    params: {
                        maker: search
                    }
                }
            } else if (key === 'type') {

                var config = {
                    params: {
                        type: search
                    }
                };
            }
            return $http.get(baseUrl + "/products", config)
                .then(function (response) {
                    self.productsList = response.data
                    console.log(response.data + "service line 18")
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
            ProductsService.getProducts();


    //    $scope.findProducts = function () {
    //        ProductsService.getProducts();
    //        console.log("controller line 36")
    //    }
    //
    //    
    $scope.filterProduct = function (key, search) {
        ProductsService.getProducts(key, search);
        $location.url($location.path());
    }



    //    $scope.filterProduct = function(x) {
    //        ProductsService.getProducts(x)
    //        $location.url($location.path());
    //    }


}]);
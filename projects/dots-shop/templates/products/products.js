var app = angular.module("DotsShop");

app.service("ProductsService", ["$http", function ($http) {
    var baseUrl = "http://localhost:8000";
    var self = this;
    
    this.productsList = [];
    
    //function will take params when you give the option to filter
    this.getProducts = function(){
        return $http.get(baseUrl + "/products")
            .then(function(response){
            self.productsList = response.data;
        })
    };
    
}]);

app.controller("ProductsController", ["$scope", "ProductsService", function($scope, ProductsService){
    $scope.productService = ProductsService;
    
    
    $scope.findProducts = function(){
        ProductsService.getProducts();
    }
    
     $scope.findProducts();
    
    
}]);
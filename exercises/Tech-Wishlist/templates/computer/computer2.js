var app = angular.module("TechWishList");

app.controller("ComputerController", ["$scope", function($scope){
    $scope.list = [
        {
            image: "",
            name: "",
            price: "",
        },
        {
            image: "",
            name: "",
            price: "",
        },
        {
            image: "",
            name: "",
            price: "",
        }
        
    ]
}])
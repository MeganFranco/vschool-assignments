var app = angular.module("TechWishList");

app.controller("ComputerController", ["$scope", function($scope){
    $scope.list = [
        {
            image: "https://s3.amazonaws.com/urgeio-versus/00-blog-pics/00-post_header/Futuristic%20Mobile%20Phone%20.jpg",
            name: "Future Phone",
            price: "too much",
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
var app = angular.module("TechWishList");

app.controller("OtherController", ["$scope", function($scope){
    $scope.list = [
        {
            image: "https://static0.fitbit.com/simple.b-cssdisabled-png.h7f00310d787c49e7cce9ed4a3651c911.pack?items=%2Fcontent%2Fassets%2Fstore2%2Fimages%2Fproducts-retina%2Fcharge%2Fcharge_black_side.png",
            name: "FitBit",
            price: 100,
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQb2Sz-d6HAv1SKPoiLiMFOX8cb3Y_YOVnB1TtpVO-5CJmnm_MeK35nbtUTI3_POp1tG-GEXIBq&usqp=CAY",
            name: "Mororola Moto Watch",
            price: 300,
        },

        
    ]
}])
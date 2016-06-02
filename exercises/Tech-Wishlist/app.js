var app = ("TechWishlist", ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when("/computer", {
        templateUrl: "",
        controller: "",
    })
    .when("/other", {
        templateUrl: "",
        controller: "",
    })
})

app.directive("wishList", function(){
    return{
        templateUrl: "template/list",
        
    }
})
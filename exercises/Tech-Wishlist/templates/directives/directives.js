var app = ("TechWishlist")
app.directive("wishList", function(){
    return{
        templateUrl: "template/directives/list.html",
        restrict: "E",
        scope: {
            'list': '=';
        },
        
    };
});
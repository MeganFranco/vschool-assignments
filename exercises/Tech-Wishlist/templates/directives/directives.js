var app = ("TechWishlist")
app.directive("wishList", function(){
    return{
        templateUrl: "templates/directiveslist.html",
        restrict: "E",
        scope: {
            'list': '=';
        },
        
    };
});
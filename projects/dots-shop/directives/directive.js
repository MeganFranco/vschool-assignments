var app = angular.module("DotsShop");

app.directive('ngcart-cart', function () {
    return {
        restrict: 'E',
        scope: {
            'people': '='
        },
        templateUrl: 'directives/directive.js'
    };
});



/*

http://ngcart.snapjay.com/docs
<ngcart-addtocart id="{{ item.id }}" name="{{ item.name }}" price="{{ item.price }}" quantity="1" quantity-max="30" data="item"></ngcart-addtocart>

*/
var app = angular.module("RejectionApp");

app.directive("navbar", ["UserService", function (UserService) {
        return {
            templateUrl: "./components/navbar/navbar.html",
            restrict: 'E',
            link: function (scope) {
                scope.userService = UserService;
            }
        }
    }
]);
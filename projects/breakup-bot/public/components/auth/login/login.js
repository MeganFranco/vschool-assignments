var app = angular.module("BreakupbotApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.login = function (user) {
        UserService.login(user).then(function(response) {
            $location.path("/responses");
        }, function(response) {
            alert("There was a problem: " + response.data.message);
        });
    };
}]);
var app = angular.module("TodoApp.Auth")

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.passwordMessage = "";

    $scope.signup = function (user) {
        //check is pwds match
        if (user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match";
        } else { /*if they match, signup the user*/
            UserService.signup(user).then(function (response) {
                $location.path("/login");
            }, function (response) {
                alert("there was a problem: " + response.data.message)
            });
        }
    }
}]);
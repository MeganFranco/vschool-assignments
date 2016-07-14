var app = angular.module("RejectionApp.Auth");

app.controller("LogoutController", ["UserService", "$scope", function(UserService, $scope) {
    $scope.logout = UserService.logout();
}]);
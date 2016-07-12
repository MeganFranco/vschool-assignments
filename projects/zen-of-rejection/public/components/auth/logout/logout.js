var app = angular.module("RejectionApp.Auth");

app.controller("LogoutController", ["UserService", function(UserService) {
    UserService.logout();
}]);
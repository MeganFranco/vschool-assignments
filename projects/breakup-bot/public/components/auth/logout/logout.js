var app = angular.module("BreakupbotApp.Auth");

app.controller("LogoutController", ["UserService", function(UserService) {
    UserService.logout();
}]);
var app = angular.module("BreakupbotApp", ['ngRoute', 'BreakupbotApp.Auth'])
    //
    //#/login
    //#/signup
    //#/logout

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/welcome/welcome.html"
        })
        .when("/about", {
            templateUrl: "components/about/about.html"
        })
        .when("/bot", {
            templateUrl: "components/bot/bot.html",
            controller: "BotPageController"
        }).when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController"
        }).when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        }).when("/logout", {
            controller: "LogoutController"
        });

});

app.controller("BotController", ["$scope", "ConnectService", function ($scope, ConnectService) {

}]);

app.service("ConnectService", ["$http", function ($http) {





    //    this.getResponse = function () {
    //        return $http.post('http://localhost:8000/api/responses', {
    //            input: "I don't wanna break up."
    //        })
    //    }.then(function (response) {
    //        console.log(response.data);
    //    })
}]);









/*      https://www.npmjs.com/search?q=intelligence
        https://www.npmjs.com/package/rivescript
*/

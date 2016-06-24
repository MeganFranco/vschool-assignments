var app = angular.module("TodoApp", ["ngRoute", "TodoApp.Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html"
        })
        .when("/todos", {
            templateUrl: "components/todos/todos.html",
            controller: "TodoController"
        })
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            controller: "LogoutController",
            template: ""
        });
});

app.service("TodoService", ["$http", function ($http) {

    this.getTodos = function () {
        return $http.get("/api/todos").then(function (response) {
            return response.data;
        });
    };

    this.saveTodo = function (todo) {
        return $http.post("/api/todos", todo).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

}]);
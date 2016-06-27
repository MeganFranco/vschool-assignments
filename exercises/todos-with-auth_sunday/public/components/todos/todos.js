var app = angular.module("TodoApp");

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

app.controller("TodoController", ["$scope", "TodoService", "UserService", function ($scope, TodoService, UserService) {
    
    $scope.todo = {};
    $scope.todos = [];
    $scope.userService = UserService;
    
    (function getTodos() {
        TodoService.getTodos().then(function (todos) {
            $scope.todos = todos;
        });
    })();

    $scope.saveTodo = function (todo) {
        TodoService.saveTodo(todo).then(function (todo) {
            $scope.todos.push(todo);
            $scope.todo = {};

        });
    };
}]);
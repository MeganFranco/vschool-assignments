var app = angular.module("TodoApp");



app.controller("TodoController", ["$scope", "TodoService", "UserService", function ($scope, TodoService, UserService) {
    $scope.todo = {}
    $scope.todos = [];
    $scope.userService = UserService 

    (function getTodos() {
        TodoService.getTodos().then(function (todos) {
            $scope.todos = todos;

        });
    })();

    $scope.saveTodo = function (todo) {
        TodoService.saveTodo(todo).then(function (todo) {
            $scope.todos.push(todo);
        });
    };
}]);
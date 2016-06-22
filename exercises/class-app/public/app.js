var app = angular.module("TodoApp", []);

app.service("TodoService", ["$http", function ($http) {
    var self = this;
    this.todos = []

    this.getTodos = function () {
      return $http.get("/todos").then(function(response){
          return response.data;
      });  
    };    
    
    this.saveTodo = function (todo) {
        return $http.post("/todos", todo)
            .then(function (response) {
                self.todos.push(response.data);
                return response.data;
            })
    }

}]);


app.controller("TodoController", ["$scope", "TodoService", function ($scope, TodoService) {

    $scope.todoService = TodoService;

    var getTodos = function () {
        TodoService.getTodos().then(function (todos) {
            $scope.todos = todos;
        })
    };

    getTodos();



    $scope.saveTodo = function (todo) {
        TodoService.saveTodo(todo).then(function (response) {

        });
    }
}])
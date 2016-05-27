var app = angular.module("ToDoList", []);

app.service("ToDoService", ["$http", function ($http) {
    //inside, they look a lot like contsructor functions
    //    this.propertyName= "Value"

    //delegating the http calls to the service... if you made a new controller where you needed the http stuff done, then that stuff would already be done. This is for good code organization more than anything.

    this.getTodos = function (url) {
        //YOU HAVE TO RETURN SOMETHING
        return $http.get("http://mean.codingcamp.us/megan/todo/")
            .then(function (response) {
             //do something to the Todo data before it gets sent to the controller
            return response.data
            //BUT .then also returns a promse
            }).then(function(data){
                /*only the data portion of the previous response*/
                return data;
            });
    };

    this.postTodo = function (url, data) {

    };

    this.updateTodo = function (url, data) {

    };

    this.deleteTodo = function (url) {

    };

}]);

app.controller("MainController", ["$scope", "TodoService", function ($scope, $http) {

    $scope.toDos = [];

    ////////ADD ITEM///////////////
    $scope.addItem = function () {
        $scope.toDoItem.completed = false;
        $http.post("http://mean.codingcamp.us/megan/todo/", $scope.toDoItem)
            .then(function (response) {

                $scope.toDoItem = {};

                $scope.toDos.push(response.data);
                console.log($scope.toDos);


            })

        //        $scope.toDos.push($scope.toDoItem);
        //        $scope.toDoItem = {};
    };

    ///////REMOVE ITEM////////////////    
    $scope.removeItem = function (toDoItem) {

            var confirmed = confirm("Are you sure you want to delete this todo item?");

            if (confirmed) {
                $http.delete("http://mean.codingcamp.us/megan/todo/" + toDoItem._id)

                .then(function (response) {
                    var index = $scope.toDos.indexOf(toDoItem)

                    var itemForRemoval =

                        $scope.toDos.splice(index, 1)
                        ///splice will start removing at the first parameter and then it removes the amount of items specified in the second parameter 

                })

            }

        }
        ///////////CROSS OFF ITEM/////////    
    $scope.crossOffItem = function (item) {
        item.completed = !item.completed;
    }

    ////////////GET ALL ITEMS////////////////
    var promise =  TodoService.getTodos(baseUrl);
    promise.then(function(response){
        $scope.toDos = response.data;
        
    })
    
    //CHAINING
   var promise = TodoService.getTodos(baseUrl).promise.then(function(response){
        $scope.toDos = response.data;
        
    })

    /////////////////////////EDIT ITEM////////////////////////////
    $scope.editItem = function (item, index) {
        //update server
        $http.put("http://mean.codingcamp.us/megan/todo/" + item._id, item)
            .then(function (response) {
                //update array

                $scope.toDos[index] = response.data;

                item.editing = !item.editing

            });
    }



    ///////////////////////END/////////////////////////////////////
}])



//
//      where would you want to submit a post request, don't add an id --> when something is submitted at the endpoint the server will generate the unique ID
//
// if you want to delete just one item, then you could add the ID -- that's super important actually since you don't want to delete an entire database
//
// for put, you should also add an ID because the server needs to know what it's updating
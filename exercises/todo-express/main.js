var app = angular.module("ToDoList", []);

app.service("ToDoListService", ["$http", function ($http) {
    var self = this;
    this.list = [];

    this.getToDoItems = function () {
        return $http.get("http.get/localhost:8000/toDoList")
            .then(function (response) {
                self.list = response.data;
            })
    };

    this.addToDoItem = function (item) {
        return $http.post("http.get/localhost:8000/toDoList", item)
            .then(function (response) {
                self.list.push(response.data);
            })
    };

    this.editToDoItem = function (item) {
        return $http.put("http.get/localhost:8000/toDoList" + item.id, item)
            //?
    }
    
    this.deleteToDoItem = function(item) {
        return $http.delete("http.get/localhost:8000/toDoList" + item.id, item)
        }
}])

app.controller("MainController", ["$scope", "ToDoListService", function ($scope, ToDoListService) {

//
//
//    //////ADD ITEM///////////////
//        $scope.addItem = function() {
//
//    /////REMOVE ITEM////////////////    
//        $scope.removeItem = function(toDoItem)
//    /////////GET ALL ITEMS////////////////
//        $scope.getList = function() {
//
//    ///////////////////////EDIT ITEM////////////////////////////
//        $scope.editItem = function(item, index) {

}]);






///////////////////FROM PREVIOUS/////////////////////
//var app = angular.module("ToDoList", []);
//
//app.controller("MainController", ["$scope", "$http", function ($scope, $http) {
//
//    $scope.toDos = [];
//    
//    ////////ADD ITEM///////////////
//    $scope.addItem = function () {
//        $scope.toDoItem.completed = false;
//        $http.post("http://mean.codingcamp.us/megan/todo/", $scope.toDoItem)
//            .then(function (response) {
//
//                $scope.toDoItem = {};
//
//                $scope.toDos.push(response.data);
//                console.log($scope.toDos);
//
//
//            })
//
//        //        $scope.toDos.push($scope.toDoItem);
//        //        $scope.toDoItem = {};
//    };
//
//    ///////REMOVE ITEM////////////////    
//    $scope.removeItem = function (toDoItem) {
//
//        var confirmed = confirm("Are you sure you want to delete this todo item?");
//        
//        if(confirmed){
//            $http.delete("http://mean.codingcamp.us/megan/todo/" + toDoItem._id)
//
//            .then(function (response) {
//                var index = $scope.toDos.indexOf(toDoItem)
//
//                var itemForRemoval =
//    
//                    $scope.toDos.splice(index, 1)
//    ///splice will start removing at the first parameter and then it removes the amount of items specified in the second parameter 
//                
//            })
//
//            }
//
//        }
//        ///////////CROSS OFF ITEM/////////    
//    $scope.crossOffItem = function (item) {
//        item.completed = !item.completed;
//    }
//
//    ////////////GET ALL ITEMS////////////////
//    $scope.getList = function () {
//          $http.get("http://mean.codingcamp.us/megan/todo/")
//            .then(function (response) {
//
//                $scope.toDos = (response.data);
//
//                
//
//            })
//    }
//    
//    
///////////////////////////EDIT ITEM////////////////////////////
//    $scope.editItem = function(item, index) {
//        //update server
//        $http.put("http://mean.codingcamp.us/megan/todo/" + item._id, item)
//            .then(function(response){
//            //update array
//            
//            $scope.toDos[index] = response.data;
//            
//             item.editing = !item.editing
//            
//        });
//    } 
//    
//    
//    
/////////////////////////END/////////////////////////////////////
//}])
//
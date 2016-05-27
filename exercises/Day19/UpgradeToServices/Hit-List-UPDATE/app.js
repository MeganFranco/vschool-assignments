var app = angular.module("HitList", [])

app.service("HttpService", ["$http", function ($http) {
    this.getList = function () {
        return $http.get('http://mean.codingcamp.us:6543/hitlist.json')


    }

}])

app.controller("MainController", ["$scope", "HttpService", function ($scope, HttpService) {
    $scope.myData = [];
    
    HttpService.getList()
    //finish the promise
        .then(function(response){
        $scope.myData = response.data; 
    });

}]);
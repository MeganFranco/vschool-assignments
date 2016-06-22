var app = angular.module("dogApp", []);

app.service("DogService", ["$http", function ($http) {
    //    var baseUrl = "http://localhost:8000";
    var self = this;

    this.dogList = [];
    this.get = function (params) {
        if (params) {
            var config = {
                params: params
            };
            return $http.get("/api/dogs", config).then(function (response) {
                self.dogList = response.data;
            }, function (response) {
                console.log(response);
            });
        } else {
            return $http.get("/api/dogs").then(function (response) {
                self.dogList = response.data;

            }, function (response) {
                alert("There was a problem: " + response.statusText);
            });
        }
    }
}]);

app.controller('DogController', ["$scope", "$location", "DogService", function ($scope, $location, DogService) {

    $scope.dogService = DogService;
    DogService.get().then(function () {
    });

    $scope.filterByBreed = function (params) {
        DogService.get(params);
        $location.url($location.path());
    }

}]);
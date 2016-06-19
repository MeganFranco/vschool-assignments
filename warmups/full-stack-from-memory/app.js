var app = angular.module("dogApp", []);

app.service("DogService", ["$http", function ($http) {
    var baseUrl = "http://localhost:8000";
    var self = this;

    this.dogList = [];
    this.get = function (params) {
        if (params) {
            var config = {
                params: params
            };
            return $http.get(baseUrl + "/dogs", config).then(function (response) {
                self.dogList = response.data;
            });
        } else {
            return $http.get(baseUrl + "/dogs").then(function (response) {
                self.dogList = response.data;
            });
        }
    }
}]);

app.controller('DogController', ["$scope", "$location", "DogService", function ($scope, $location, DogService) {
    $scope.dogService = DogService;
    DogService.get();

    $scope.filterByBreed = function (params) {
        DogService.get(params);
        $location.url($location.path());
    }

}]);
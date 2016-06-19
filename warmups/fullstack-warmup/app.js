var app = angular.module("dogApp", []);

app.service("DogService", ["$http"function ($http) {
    var baseUrl = "http://localhost:8000";
    var seld = this;

    this.dogList = [];

    this.get = function (params) {
        if (params) {
            var config = {
                params: params /*passes in the params object through the controller from the scope*/
            }
              return $http.get(baseUrl + "/dogs", config).then(function (response) {
            self.dogList = response.data
        } else {
            var config = {};
        }


      
        })
    };

    //////Query parameters: https://docs.angularjs.org/api/ng/service/$http////
    //        var config = {
    //            params: {
    //                name: "Lady",
    //            }
    //        }


}]);

app.controller("MainController", ["$scope", "DogService", function ($scope, DogService) {

$scope.dogService = DogService;
//    $scope.params {}

DogService.get();

$scope.filterByBreed = function (params) {
    DogService.get(params)
}

    })


}]);
var app = angular.module("FormValidation", []);

app.controller("MainController", ["$scope", function ($scope) {
    $scope.submitForm = function (isValid) {
        if (isValid) {
            alert("Hey there! Way to follow directions!");
        }
    }
}]);
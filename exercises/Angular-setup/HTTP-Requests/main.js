var app = angular.module("Http", [])

app.controller("HttpController", ["$scope", "$http", function ($scope, $http) {

    $http.get("URL")
        .then(function (response)) {
            //success    
        }, 


}])
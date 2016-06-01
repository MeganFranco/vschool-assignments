var app = angular.module("PokeProfile", [])

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home/home.html",
            controller: "HomeController",
        })

app.controller("MainController", ["$scope", "PokeServices", function ($scope, PokeServices) {



    $scope.getNumber = function () {

        PokeServices.getPokemon($scope.enteredNumber).then(function (pokemon) {
            $scope.pokemon = pokemon;
            
            console.log(pokemon)
            
        })

    }
}])
var app = angular.module("PokeProfile", [])

app.controller("MainController", ["$scope", "PokeServices", function ($scope, PokeServices) {



    $scope.getNumber = function () {
        console.log("Blah");

        PokeServices.getPokemon($scope.enteredNumber).then(function (pokemon) {
            $scope.pokemon = pokemon;
        })

    }
}])
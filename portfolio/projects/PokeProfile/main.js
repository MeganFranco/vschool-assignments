var app = angular.module("PokeProfile", [])

app.controller("MainController", ["$scope", "PokeServices", function ($scope, PokeServices) {


    $scope.getNumber = function () {

        PokeServices.getPokemon($scope.enteredNumber).then(function (pokemon) {
            $scope.pokemon = pokemon;
            
            console.log(pokemon)
            
        })

    };
}]);
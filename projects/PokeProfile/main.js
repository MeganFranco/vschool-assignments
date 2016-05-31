var app = angular.module("PokeProfile", [])

app.controller("MainController", ["$scope", "PokeServices", function ($scope, PokeServices) {



    $scope.getNumber = function () {

        PokeServices.getPokemon($scope.enteredNumber).then(function (pokemon) {
            $scope.pokemon = pokemon;
            
            console.log($scope.pokemon.name)
            console.log($scope.pokemon.attack)
            console.log($scope.pokemon.ability.name)
            console.log($scope.pokemon.sprite)
            
        })

    }
}])
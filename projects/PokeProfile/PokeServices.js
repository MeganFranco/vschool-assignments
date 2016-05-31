var app = angular.module("PokeProfile")

app.service("PokeServices", ["$http", function ($http) {
    var baseUrl = "http://pokeapi.co/"
        //returns Ekans, add a number + / and the service returns another pokemon

    this.getPokemon = function (userNumber) {
        var currentPokemon = {};
        return $http.get(baseUrl + "api/v1/pokedex/1/")
            .then(function (response) {
                currentPokemon.name = response.data.pokemon[userNumber].name;

                return $http.get(baseUrl + response.data.pokemon[userNumber].resource_uri);
            })
            .then(function (response) {
                currentPokemon.attack = response.data.attack;
                currentPokemon.ability = response.data.abilities[0];
                return $http.get(baseUrl + response.data.sprites[0].resource_uri);
               
            
            })
            .then(function (response) {
                currentPokemon.sprite = baseUrl + response.data.image
                return currentPokemon;        
            })

    }



}])
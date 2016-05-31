var app = angular.module("PokeProfile")

app.service("PokeServices", [function($http){

    var baseUrl = "http://pokeapi.co/"
    //returns Ekans, add a number + / and the service returns another pokemon
    
    this.getPokemon = function(userNumber){
        return $http.get(baseUrl + "api/v1/pokedex/1/")
            .then(function(response){
            chosenPokemon.name = response.data.pokemon[userNumber].name;
            //but how do you pull userNumber and push chosenPokemon.name to/from the controller?
            return $http.get(baseUrl + response.data.pokemon[userNumber].resource_uri);
        })
    
    
    }
}])




//"http://pokeapi.co/api/v1/pokemon/" + inputNumber + "/"
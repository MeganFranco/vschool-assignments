var app = angular.module("PokemonService", []);



app.service("PokemonService", [function(){
    this.usersFavoritePokemon = [];
    
    this.getPokemon = function(/*add url*/) {
        $http.get(/*same url*/)
    }
    
    this.addPokemon = function(pokemon){
        this.usersFavoritePokemon.push(pokemon)
    }
    
    
    this.removeItem = function(pokemon) {
        this.usersFavoritePokemon.splice(pokemon, 1);
    }
    
}]);


////////////CONTROLLER//////////////////

app.controller("MainController",["$scope","PokemonService", function($scope , PokemonService){
   
$scope.addPokemonToPage = function(pokemon){
    
    PokemonService.addPokemon(pokemon);
    $scope.pokemonList = PokemonService.usersFavoritePokemon
    
 
    $scope.pokemonName = "";
}   

$scope.removePokemon = function(pokemon) {
    
    PokemonService.removeItem(pokemon);
    console.log($scope.pokemonList)
}
    
    
    
    
}])
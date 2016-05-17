//$.ajax("http://pokeapi.co/api/v1/pokedex/1/").success(function(data){
//    console.log(data);
//});



//more common option below
//use an object to write out your options (type will default to GET unless otherwise specified)

//<div class="col-xs-2 col-sm-2 col-md-2">Wartortle</div>

var pokemonList = $("#pokemonList");

$.ajax("http://pokeapi.co/api/v1/pokedex/1/", {
    success: function(data){
        var pokemonArray = data.pokemon;
        for(var i = 0; i < pokemonArray.length; i++) {
            //Access the current pokemon's name
            var pokemonName = pokemonArray[i].name;
            var newElement = $('<div class="col-xs-3 pokemon-badge">' + pokemonName + '</div>')
            pokemonList.append(newElement);
        }
        
        
    }
        
})

    


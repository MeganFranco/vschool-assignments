var url = "http://pokeapi.co/api/v1/pokedex/1/";

/*
<div class="col-xs-2 pokemon-badge">Wartortle</div>
*/

var pokemonList = $("#pokemon-list");

$("#pokemon-button").click(function () {
    $.ajax(url, {
        success: function (data) {
            var pokemonArray = data.pokemon;
            for (var i = 0; i < pokemonArray.length; i++) {
                var pokemonName = pokemonArray[i].name;
                var newElement = $('<a target="_blank" href="https://www.google.com/#q=' + pokemonName + '"><div class="col-xs-3 pokemon-badge">' + pokemonName + '</div></a>')
                pokemonList.append(newElement);
            }

        }
    });
});
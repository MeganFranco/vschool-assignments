


function parsePokemon(urlPath) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var object = JSON.parse(xhr.responseText);
            //            pokemon.innterHTML = object.name;
            console.log(object);

            var pokeArray = object.objects[0].pokemon;
            console.log(pokeArray);

            for (var i = 0; i < pokeArray.length; i++) {
                var newP = document.createElement("P");
                var newText = document.createTextNode(pokeArray[i].name);
                newP.appendChild(newText);
                document.body.appendChild(newP);
            }
        }

    }
    xhr.open("GET", urlPath, true);
    xhr.send();

    //turn jsonfile into a JS object or array? (kinda both)


}

parsePokemon("http://mean.codingcamp.us:6543/pokemon.json")






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
//create a new XMLHTTPRequest object


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
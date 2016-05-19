//AVOID GLOBAL SCOPE

function Player(name) {
    this.name = name;
    this.population = 1000000;
}

var communists = new Player("Communists");
var penguins = new Player("Penguins");

//////////////////functions///////////////////////////////

//starts the whole process off	

while (communists.population > 0 && penguins.population > 0) {

    //    setTimeout(startWar, 500)

    startWar();

    if (communists.population <= 0) {
        console.log("Looks like the penguins won!")
    } else {
        console.log("Looks like the communists won!")
    }

}
console.log(",---.                   ,---.                ")
console.log("|  _.,---.,-.-.,---.    |   |.   ,  ,---.,---.")
console.log("|   |,---|| | ||---'    |   | \\ / |---'|    ")
console.log("`---'`---^` ' '`---'    `---'  `'  `---'`    ")








function startWar() {
    var thisParty = new party();

    if (thisParty === penguins) {
        var secondParty = communists;
    } else {
        var secondParty = penguins;
    }

    sendNuke(thisParty);
    sendNuke(secondParty);


}


function sendNuke(party) {

    var target = secondParty(party);

    // var attackStatus = new hitormiss();

    if (hitormiss()) {

        console.log("It's a hit! the nuke " + party.name + " launched landed on " + target.name);
        target.population = target.population - 250000;
        console.log(target.name + " : " + target.population)
        console.log(party.name + " : " + party.population)


    } else {
        console.log("The nuke missed and " + party.name + "' opponent, " + target.name + ", sustained no damage")
    }

    //function to return fire

}

function hitormiss() {
    var newNumber = Math.floor(Math.random() * 2) + 1;
    return newNumber === 1;
}

var didStrikeLand = true;


function party() {
    randomNum = Math.floor(Math.random() * 2) + 1;
    if (randomNum === 1) {
        return penguins;
    } else {
        return communists;
    };
}

function secondParty(firstParty) {
    if (firstParty === penguins) {
        return communists;
    } else {
        return penguins;
    };
}





//////// challenge - delay the execution of each iteration of a loop

//    var x = 0;
//function myLoop() {
//
//    setTimeout(function(){
//        console.log(x);
//        if(x < 10) {
//            x++;
//            myLoop();
//        }
//    }, 500)
//}
//
//myLoop();
//
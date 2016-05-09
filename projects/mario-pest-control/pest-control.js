var gCoins = document.getElementById("goombaCoins").innerHTML;
var gCaught = document.getElementById("goombaCaught").innerHTML;
var bCoins = document.getElementById("bobCoins").innerHTML;
var bCaught = document.getElementById("bobCaught").innerHTML;
var cCoins = document.getElementById("cheepCoins").innerHTML;
var cCaught = document.getElementById("cheepCaught").innerHTML;

var gCoinsNumber = Number(gCoins);
var gCaughtNumber = Number(gCaught);
var bCoinsNumber = Number(bCoins);
var bCaughtNumber = Number(bCaught);
var cCoinsNumber = Number(cCoins);
var cCaughtNumber = Number(cCaught);

var goombaCost = gCoinsNumber * gCaughtNumber;
var bobCost = bCoinsNumber * bCaughtNumber;
var cheepCost = cCoinsNumber * cCaughtNumber;

document.getElementById("goombaResult").innerHTML = goombaCost 
document.getElementById("bob-bombResult").innerHTML = bobCost 
document.getElementById("cheep-cheepResult").innerHTML = cheepCost 

console.log(goombaCost);
console.log(bobCost);
console.log(cheepCost);



//console.log(document.getElementById("goombaCoins"));
//console.log(document.getElementById("goombaCaught"));
//console.log(document.getElementById("bobCoins"));
//console.log(document.getElementById("bobCaught"));
//console.log(document.getElementById("cheepCoins"));
//console.log(document.getElementById("cheepCaught"));
//
//
//
//console.log(document.getElementById("goombaResult"));
//console.log(document.getElementById("bob-bombResult"));
//console.log(document.getElementById("cheep-cheepResult"));
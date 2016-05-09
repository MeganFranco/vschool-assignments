// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Braniac", "General Zod", "Doomsday"];

for (i = 0; i < enemies.length; i++) {
    var isThereKryptonite = (i % 2); 
}

function whoWins(isThereKryptonite, enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}
console.log(whoWins(isThereKryptonite, enemies[Math.floor(Math.random() * enemies.length)]));



function HowAttractedIsLoisLaneToMe() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) + 1);
}

console.log(HowAttractedIsLoisLaneToMe());



var clarkKent = true;
var superman = false;

while (clarkKent = true) {
    console.log("I'm just a nerdy columnist");
    break;
}
    
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent == false;
        superman == true;
        console.log("Now I'm Superman!");
    }

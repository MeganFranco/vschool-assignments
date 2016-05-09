var readline = require("readline-sync");
//var response = readline.question("Enter a number: ") 

var inventory = ["slingshot ", " bag of blue marbles"];
var HP = 0;
var enemies = ["Funshine Bear", "Goodluck Bear", "Friend Bear"];

function enemyAppears() {
    var randomEnemy = enemies[Math.floor(Math.random() * 3 )]; 
    
    function attackEnemy() {
        var userAttackPoints = Math.floor(Math.random()*((15-4)+1)+4);
        
        function enemyAttacksBack() {
            var enemyAttackStrength = Math.floor(Math.random()*((14-4)+1)+4)
            if(enemyAttackStrength >= 7){
                console.log("Whelp. That was a good run but " + randomEnemy + " defeated you.")
                //game over message
            } else {
                console.log("It looks like you escaped! " + randomEnemy + " hit you with " +enemyAttackStrength + " attack points. You might be a little scratched up, but you live to fight another day!");
                HP = HP - enemyAttackStrength;
                
            }
        }
        
//        var userAttackPoints = Math.floor(Math.random()*((15-4)+1)+4);
        console.log("You attack " + randomEnemy + " and they lose " + userAttackPoints + " hit points")
        
        if(userAttackPoints < 8){
            console.log("It looks like your attack wasn't strong enough " + randomEnemy + " continues with their assault of unconditional love");
            enemyAttacksBack();
        } else {
            console.log("You are victorious! Your enemy disappears and in their place appears a  and you gain 7 more HP")
            inventory.push();
            HP = HP + 7;
        }
    }

    var fightFlight = readline.question("Oh no! " + randomEnemy + " has appeared. Their arms outstreched, ready to inflict a fatal hug. Do you want to run or attack? ");
    
    if(fightFlight == "run") {
        var runChances = Math.floor(Math.random() * 2) + 1
        if(runChances == 1){
            console.log("You got away this time! Looks like the odds were in your favor!");
            /*moveForward();*/
        }else {
            console.log("Unfortunately " + randomEnemy + " caught up with you, and it looks like you'll have to attack");
            attackEnemy();
        }
        
    } else if(fightFlight == "attack") {
        attackEnemy();
    } else {
        console.log("Sorry please respond with either 'run' or 'attack'");
        enemyAppears();
    }
}

function walking() {
    var getAttackedChance = Math.random();
    if (getAttackedChance < 0.34) {
     enemyAppears()
    }  else {
        console.log("So far so good, but things are quiet... too quiet");
        readlineResponse = readline.question(" ");
            } 
}




//var moveForward = function(readlineResponse) {
//    if(readlineResponse == 'Print') {
//    console.log("Name: " + userName + " HP: " + HP + " Inventory: " + inventory);
//    /*var readlineResponse = readline.question(" ");  */
//    } else if(readlineResponse == 'continue'){
//        return;
//    }
////    else if(readlineResponse = 'w') {
////        walk();
////        var readlineResponse = readline.question(" "); 
////    }
////    
////}
//
//



/* walk function here*/

//
//var readlineResponse = readline.question(" ");
//moveForward();

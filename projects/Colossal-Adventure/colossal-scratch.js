///////////////VARIABLES////////////////////
var readline = require("readline-sync");
//var response = readline.question("Enter a number: ") 

var inventory = ["slingshot ", " bag of blue marbles"];
var HP = 0;
var enemies = ["Funshine Bear", "Goodluck Bear", "Friend Bear"];
var magicItems = ["glowing sword", "bejewled chalice", "baby dragon",];
var userAlive = true;
var userName;

//////////////////FUNCTIONS/////////////////
var userDead = function () {
    console.log("The End");
    userAlive = false;
}
var youWin = function(){
    console.log("Congrats, you win!")
    userAlive = false;
}

var userContinue = function () {
    var userResponse = readline.question("Would you like to continue? Enter 'Yes' or 'No' ")
    if (userResponse === 'Yes') {
        console.log("Great! Let's continue on our adventure");
    } else if (userResponse === "No") {
        console.log("Well that's a shame. See you next time");
        userDead();
    } else {
        console.log("Sorry, please enter 'Yes' or 'No' ");
        userContinue();
    }
}
function walking() {
    var getAttackedChance = Math.random();
    if (getAttackedChance < 0.34) {
        enemyAppears()
    } else {
        console.log("So far so good, but things are quiet... too quiet. Let's keep going.");
    }
}

function enemyAppears() {
    function attackEnemy() {
        var userAttackPoints = Math.floor(Math.random() * ((14 - 4) + 1) + 4);

        function enemyAttacksBack() {
            var enemyAttackStrength = Math.floor(Math.random() * ((15 - 4) + 1) + 4)
            if (enemyAttackStrength >= 7) {
                console.log("Whelp. That was a good run but " + randomEnemy + " defeated you.")
                userDead();
            } else {
                console.log("It looks like you escaped! " + randomEnemy + " hit you with " + enemyAttackStrength + " attack points. You might be a little scratched up, but you live to fight another day!");
                HP = HP - enemyAttackStrength;

            }
        }


        console.log("You attack " + randomEnemy + " and they lose " + userAttackPoints + " hit points")

        if (userAttackPoints < 7) {
            console.log("It looks like your attack wasn't strong enough " + randomEnemy + " continues with their assault of unconditional love");
            enemyAttacksBack();
        } else {
            var randomItem = magicItems[Math.floor(Math.random() * 3)]
            console.log("You are victorious! Your enemy disappears and in their place appears a " + randomItem + " and you gain 7 more HP")
            inventory.push(randomItem);
            HP = HP + 7;
            moveForward();
        }
    }
    var randomEnemy = enemies[Math.floor(Math.random() * 3)];

    var fightFlight = readline.question("Oh no! " + randomEnemy + " has appeared. Their arms outstreched, ready to inflict a fatal hug. Do you want to run or attack? ");

    if (fightFlight == "run") {
        var runChances = Math.floor(Math.random() * 2) + 1
        if (runChances == 1) {
            console.log("You got away this time! Looks like the odds were in your favor! Let's keep exploring");
            moveForward();
        } else {
            console.log("Unfortunately " + randomEnemy + " caught up with you, and it looks like you'll have to attack");
            attackEnemy();
        }

    } else if (fightFlight == "attack") {
        attackEnemy();
    } else {
        console.log("Sorry please respond with either 'run' or 'attack'");
        enemyAppears();
    }
}

var moveForwardFirst = function () {
    var readlineResponse = readline.question(" ");
    if (readlineResponse == 'Print') {

        console.log("Name: " + userName + " HP: " + HP + " Inventory: " + inventory);
    }
}
var moveForward = function () {

        if(userAlive === true){
        var readline = require("readline-sync");
        var readlineResponse = readline.question(" ");
        if (readlineResponse == 'Print') {

        console.log("Name: " + userName + " HP: " + HP + " Inventory: " + inventory);
        readlineResponse = readline.question(" ");
        moveForward();

        } else if (readlineResponse == 'w')

        walking();

        readlineResponse = readline.question(" ");
        
            if(HP >= 50){ 
                youWin();
            }else{
                moveForward();
                }
    }
   
}




/////////////BEGIN/////////////////////////
function theGame() {

     if(userAlive === true) {
        console.log("Greetings! You find that you've woken up in a hellish landscape. And by Hellish, we mean cartoonish. You're stuck in a cartoon. Something red, a fluffy collection of rounded apendages pops out behind a hedge, 'Hey there!' Says the creature in a pitch generally reserved for dog whistles and whale communication. 'How are you feeling today?!?!' its mouth twistd into a contemptuous grin. It's stomach begins to glow and a wave of nausea hits you. Luckily a slingshot is sitting beside your backpack, and you manage to slay the beast.");

        userContinue();

        if (userAlive === true) {
            userName = readline.question("Okay awesome! Let's get started. First order of business. What is your name?: ");

            console.log("Okay " + userName + ", You glance at your trusty old Jansport backpack. If you would like to check inside it, enter 'Print' and we will list your name, HP, and inventory, or enter 'continue' then 'enter' to keep moving ");
            moveForwardFirst();
            
            console.log("You walk over to the creature and inspect it. You poke it with your toe, and realize that this is a carebear. Even though you're twenty-five and care-bears were both before and after your time, 'this is most definitely a carebear,' you decide. The bear disolves and and a vial of healing elixer appears in it's place. Enter 'w' to start exploring.");
            
            console.log("You walk over to the creature and inspect it. You poke it with your toe, and realize that this is a carebear. Even though you're twenty-five and care-bears were both before and after your time, 'this is most definitely a carebear,' you decide. The bear disolves and and a vial of healing elixer appears in it's place. Enter 'w' to start exploring.");

            inventory.push(" healing elixer");
            HP = 7;
            moveForward();
           }



    }
}

theGame();

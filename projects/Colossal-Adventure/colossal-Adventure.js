var readline = require("readline-sync");
//var response = readline.question("Enter a number: ") 

var inventory = ["slingshot ", " bag of blue marbles"];
var HP = 0;
var enemies = ["Funshine Bear", "Goodluck Bear", "Friend Bear"];

//////////////////FUNCTIONS/////////////////

var userContinue = function () {
    var userResponse = readline.question("Would you like to continue? Enter 'Yes' or 'No' ")
    if (userResponse == 'Yes') {
        console.log("Great! Let's continue on our adventure");
    } else if (userResponse == "No") {
        exit("wompasaurus. I guess this is goodbye then. Press ctrl + C to exit.");

    } else {
        console.log("Sorry, please enter 'Yes' or 'No' ");
        userContinue();
    }
}

var moveForward = function(){
    if(readlineResponse == 'Print') {
       console.log("Name: " + userName + " HP: " + HP + " Inventory: " + inventory);
       
    } 
    
    readlineResponse = readline.question(" "); 
}

/////////////BEGIN/////////////////////////

console.log("Greetings! You find that you've woken up in a hellish landscape. And by Hellish, we mean cartoonish. You're stuck in a cartoon. Something red, a fluffy collection of rounded apendages pops out behind a hedge, 'Hey there!' Says the creature in a pitch generally reserved for dog whistles and whale communication. 'How are you feeling today?!?!' its mouth twistd into a contemptuous grin. It's stomach begins to glow and a wave of nausea hits you. Luckily a slingshot is sitting beside your backpack, and you manage to slay the beast.");
userContinue();

var userName = readline.question("Okay awesome! Let's get started. First order of business. What is your name?: ");

console.log("Okay " + userName + ", You glance at your trusty old Jansport backpack. If you would like to check inside it, enter 'Print' and we will list your name, HP, and inventory, or enter 'continue' to keep moving ");

var readlineResponse = readline.question(" ");
moveForward();

console.log("You walk over to the creature and inspect it. You poke it with your toe, and realize that this is a carebear. Even though you're twenty-five and care-bears were both before and after your time, this is most definitely a carebear, you decide. The bear disolves and and a vial of healing elixer appears in it's place. Enter 'w' to start exploring.");

inventory.push(" healing elixer");
HP = 7;







var readline = require("readline-sync");
var readlineResponse = readline.question(" ");
moveForward();
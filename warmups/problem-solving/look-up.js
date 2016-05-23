//Using objects, create a dictionary--list of words and definitions--that allows a user to make up words, save them, and look them up again.
//
//Requirements:
//Create a function that:
//allows the user to enter new words and saves them into your object (be sure to pass the object in as a parameter). Does not allow duplicate words to be stored in the dictionary. This includes case-sensitivity.
//Allows the user to look up words in the dictionary and see the definition of that word.

//dictionary
//function to add word -- pushes word to dictionary
//function to get word (asks user for word & def)
// while dictisrunning
    //run the dict
        //if they choose to quit, change dictRunning to false

//if response === 'q' 
    // dictRunning = false

//how can you check to see if an element already exists in an object?



var readline = require("readline-sync");
var userDictionary = {}
var end = true;


var userChoice = function() { readline.question("Hello! please enter 'a' to add to the dictionary and 'end' to stop adding words, enter 'd' to view your dictionary, and 'l' to look up the definition of a word in your dictionary ") }

    if(userChoice === 'a'){
        keepAdding()
    }else if()

function keepAdding() {
    while(end) {
        addToDictionary()
} 


    function addToDictionary(word, def) {
    var word = readline.question("Please enter the word you would like to define: ");
    var def = readline.question("Please enter the word's definition: ");
    if(word === 'end') {
        
    } else {
        userDictionary[word] = def;
    }
        
        

}
    




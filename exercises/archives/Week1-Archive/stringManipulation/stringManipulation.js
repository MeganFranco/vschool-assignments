var readline = require("readline-sync");
//var response = readline.question("Enter a number: ") 

reportBack = function() {
    var upCase = readline.question("What is your name? ");
    var numChars = readline.question("What is your favorite color? ");
    var addUs1 = readline.question ("What state are you from? ");
        var addUs2 = readline.question ("What town are you from? ");
    var longMessage = readline.question ("So. Tell me about yourself. ");
    var yourStory = readline.question("would you like me to tell you about yourself? please let me know the the number of the letter of your story that you would like me to begin to repeat back to you ");
    var yourStory = Number(yourStory);
      
    console.log(upCase.toUpperCase()); 
    console.log("there are " + numChars.length + " letters in the color " + numChars);
    console.log("Cool so you are from " + addUs2 + ", " + addUs1 )
    console.log("cool so I hear: " + longMessage.slice(longMessage.length / 2, longMessage.length))
    console.log("\nThis is part of your story: " + longMessage.slice(yourStory, longMessage.length))

}

reportBack();
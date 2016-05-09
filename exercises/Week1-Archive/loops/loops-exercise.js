/* http://coursework.vschool.io/exercise-loops/ */

//
var readline = require("readline-sync");
//var response = readline.question("Enter a number: ") 

/////////
////1///
///////


//var printIndividual = function(inputString){
//    
//    for(var i = 0; i < inputString.length; i++){
//        var chars = inputString.charAt(i);
//        console.log(chars);
//        
//    }
//}
//
//console.log(printIndividual("Hereisabunchofwords"))


//or//////////
//
//for(var i = 0; i < inputString.length; i++){
//        console.log(inputString[i]);

////////
///2////
////////


//var readline = require("readline-sync");
//var myString = "This is a string";
//
//var guess = readline.question("Guess a letter: ");
//
//var stilllooking = true;
//
//for(var i = 0; i < myString.length; i++) {
//    if(guess === myString[i]){
//        console.log(i);
//        stilllooking = false;
//        break;
//    } 
//
//}
// if (stilllooking) {console.log("character not found");}


///or/////////

//
//function secondFunction(string) {
//
//    while (true) {
//        var response = readline.question("Type a single character: ")
//
//        for (var i = 0; i < string.length; i++) {
//            if (response === string[i]) {
//                return string.indexOf(response);
//            }
//        }
//        
//        console.log("Character not found");
//    }
//}
//
//console.log(secondFunction("Hello Bob."));



/////////
///3////
///////

//var enterFortyTwo = function() {
//    var readline = require("readline-sync");
//    var input = readline.question("Enter a number: ");
//    var input = Number(input)
//    
//    
//    while (input != 42) {
//        var myBool = true;
//        var input = readline.question("Enter another number: ");
//        if (input == 42) {
//            input = 42;
//            break;
//        }
//    } 
//    
//}
//
//enterFortyTwo()

////////
///4///
///////


//var readline = require("readline-sync");
//
//var numbers = [];
//
//function findSmall() {
//    for (var i = 0; i < 10; i++) {
//        var tenNumber = readline.question("Enter a number: ");
//        numbers.push(parseInt(tenNumber));
//    }
//    numbers.sort(function(a, b) {
//        return a - b;
//    });
//    console.log(numbers[0]);
//}
//
//findSmall();


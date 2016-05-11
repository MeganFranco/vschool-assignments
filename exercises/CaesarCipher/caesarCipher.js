var readline = require('readline-sync');
//var theResponse = readline.question("Place generic question here: ")

var phrase = ask.question('What phrase would you like to encrypt? ').toUpperCase();  
var shift = parseInt(ask.question('How many letters would you like to shift? '));  
var alphabet = "abcdefghijklmnopqrstuvwxyz";


function shiftletter(phrase, shift){
    var shiftedString
    for (var i = 0; i < phrase.length; i++) {
        var letter = phrase[i];
        var index = alphabet.indexOf(letter);
        
        if (index === - 1) {
            shiftedString += letter;
        } else {
            var newIndex = (index + shift) % 26;
            shiftedString += alphabet[newIndex] 
        }
    } return shiftedString;
}

console.log(shiftedLetters(phrase, shift))



//var myAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//
//var readlineSync = require('readline-sync'); input = readline.question('What phrase would you like to encrypt? ').toUpperCase();  
//var shift = parseInt(readline.question('How many letters would you like to shift? '));  
//var alphabetShifted = [];
//
//function cypherThis (input, shift) {
//    for(var i = 0; i < myAlphabet.length; i++){
//        alphabetShifted.push(myAlphabet[i] + shift);
//       
//    }
//    
//}
//
//cypherThis(input, shift);
//console.log(alphabetShifted);
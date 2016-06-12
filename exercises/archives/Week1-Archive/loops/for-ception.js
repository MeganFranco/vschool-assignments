/*http://coursework.vschool.io/for-within-for-within-for/*/

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
var alphabet = alphabet.toUpperCase();
var longArray = [];


for(var i = 0; i < people.length; i++){
    longArray.push(people[i]);
    for(var a = 0; a < alphabet.length; a++){
        longArray.push(alphabet[a])
    }
}

console.log(longArray)


[[0, 0]], [[0,1]]


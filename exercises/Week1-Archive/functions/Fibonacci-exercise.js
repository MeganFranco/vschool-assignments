/* problems from: http://coursework.vschool.io/exercise-functions/ */


//////////////////
//////FIRST//////
////////////////
//
//function firstFunction(num1, num2) {
//        return num1 + num2;
//    } 
//console.log(firstFunction(6, 7))
//
///////////////////
///////2nd////////
//////////////////
//
//var secondFunction = function(num1, num2, num3) {
//    var arrayForSize = [num1, num2, num3]
//    return Math.max.apply(null, arrayForSize);
//}
//console.log(secondFunction(18, 90, 67));
//
////alternatively
//
//var secondFunction2 = function(num1, num2, num3) {
//    return Math.max(num1, num2, num3)
//}
//
////////////////
///////3rd/////
///////////////
//
//var thirdFunction = function(num1){
//    if(num1 % 2 === 0) {
//        return "even"
//    } else {
//        return "odd"
//    }
//}
//
//console.log(thirdFunction(67))
//console.log(thirdFunction(68))
//
//////////////
/////4th/////
////////////
//
//function fourthFunction(words){
//    if(words.length <= 20){
//        return words + words;
//    } else {
//        var stringLength = words.length;
//        var newLength = stringLength / 2;
//        var newWords = words.slice(0, newLength);
//        var newWords = words.slice(0, newLength);
////        console.log(newWords);
//        return newWords
//    }
//   
//}
//
//console.log(fourthFunction("strawberries are my favorite"));

////////////////
///Fizz-Buzz///
///////////////
//var fizzBuzz = function(myNum){
//    if (myNum % 3 === 0 && myNum % 5 === 0) {
//        return "Fizz Buzz";
//    } else if(myNum % 5 === 0) {
//        return "Buzz";
//    } else if (myNum % 3 === 0) {
//        return "Fizz";
//    } else {
//        return "this number is not cool enough..."
//    }
//    
//}
//
//console.log(fizzBuzz(6))
//console.log(fizzBuzz(10))
//console.log(fizzBuzz(15))
//console.log(fizzBuzz(16))

//////////////
//opt1///////
/////////////

//var optionalOne = function(n) {
//    sequence = [0,1];
//    for(i=2; i < n ; i++){
//        var addMe = sequence[sequence.length-1]/*<-I want this value not its index*/ + sequence[sequence.length-2];
//        sequence.push(addMe);
//    }
//    return sequence;  
//}
//
//console.log(optionalOne(4))


///////////
///opt3///
//////////


var optionTwo = function(stringParameter) {
    
}

console.log(optionTwo("Here is a string of letters, as well as a couple of spaces"))

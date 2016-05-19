/*Return the number of times that the string "hi" appears anywhere in the given string.
Return the number of times that the string "hi" appears anywhere in the given string.

countHi('abc hi ho') → 1 
countHi('ABChi hi') → 2 
countHi('hihi') → 2

*/

function countHi(string){
    //split string into an array by the word "hi"
    var array = string.split("hi")
    //return length of new array - 1
    return array.length - 1;
}



countHi('abc hi ho')
countHi('ABChi hi')  
countHi('hihi') 
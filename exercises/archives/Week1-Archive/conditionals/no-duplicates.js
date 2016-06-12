/* http://coursework.vschool.io/exercise-no-duplicates/ */


//var input = "bookkeeper larry";
//var output = "";
//var myWay =  "";

var noDuplicate = function(input) {
  var input = "bookkeeper larry";
  var output = [];
  var myWay = [];
  var input = input.split("")

    for (var i = 0; i < input.length; i++) {
        if(output.indexOf(input[i]) > -1){
            myWay.push(input[i]);
        } else {
            output.push(input[i]);
        }
    
    }
console.log(output.join(""));
console.log(myWay.join(""));    
    
}
noDuplicate()
////////////////////////////////////////////////////////////////////

//input
var input = 'bookkeeper larry'.split("");
//console.log(input);
// output
// No duplicates: 'bokepr lay'
// The Extras: 'okeerr'

var noDupes = [];
var extras = [];

for (var i = 0; i < input.length; i++) {
    // if current item already in noDupes
    if (noDupes.indexOf(input[i]) > -1) {
        // add to extras
        extras.push(input[i]);
    } else {
        // add to noDupes
        noDupes.push(input[i]);
    }
}
// join noDupes
console.log(noDupes.join(""));
// join extras
console.log(extras.join(""));

//////////////////////////////////////////////





////var input = "bookkeeper larry";
////var output = "";
////var myWay =  "";
//
//var noDuplicate = function (input) {
//
//    var input = "bookkeeper larry";
//    var output = "";
//    var myWay = "";
//
//    if (input.indexOf(output) > -1) {
//        output = output + input.indexOf(output);
//    } else
//        myWay = myWay + input.indexOf(output);
//
//    return output;
//    return myWay;
//}
//
//console.log(noDuplicate());
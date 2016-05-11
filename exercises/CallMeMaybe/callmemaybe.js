//http://coursework.vschool.io/call-me-maybe/
 ar names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"]; 

function attemptCall(name, dontCall, call, sendText){
    var letterA = 0;
    for(var i= 0;){
        if(name[i].toLocaleLowerCase() === "a"){
            a++
        }
    }
    
    if(letterA > 1) {
        sendText(name);
    }else if(name.length % 2 === 0){
        call(name);
    } else {
        dontCall(name);
    }



function call(name) {
    console.log("Called " name + ".")
}

function dontCall(name){
    console.log("You didn't call " name + ".")
}

function sendText(name) {
   console.log("Sent a text to" name + ".") 
}

for(var i = 0; i < name.length; i++){
    attemptCall(name[i], dontCall, call, sendText)
}




//var firstNames = ["Emily", "Hannah", "Madison", "Ashley", "Sarah", "Jacob", "Michael", "Matthey", "Joshua", "Christopher"];
//
//var sendText = function(name) {
//  console.log("sending text") 
//}
//
//var dontCall = function(name) {
//    console.log("not calling")
//}
//
//var call = function(name){
//    console.log("calling")
//}
//
//
//var attemptCall = function(names, dontCall, call, sendText) {
//    var underTwoA = true;
//    for (var i = 0; i < firstNames.length; i++){
//        
//        var letters = firstNames[i].split();
//        function checkString(letters){
//           var aCount = 0;
//            for (var j = 0; j < letters.length; j++){
//                if(j == 'a'){
//                   aCount = aCount + 1 
//                } else {continue};
//                if (aCount >= 2){
//                    underTwoA = false;
//                }
//            }
//            
//        }
//        if (underTwoA == true) {
//            if (i % 2 == 0){
//                console.log("this should be the calling function " + firstNames[i]);
//            } else {console.log("this should be the don't call function " + firstNames[i])}
//        } else {
//            sendText(firstNames[i]);
//        }
//    }
//}
//
//attemptCall();
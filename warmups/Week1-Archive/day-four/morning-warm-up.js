//function sleepIn(weekday, vacation) {
//    
//    if (weekday == true && vacation == false) {
//        return false;
//    } else if (weekday == false && vacation == false) {
//        return true;
//    } else if (weekday == true && vacation == true) {
//        return true;
//    } else if (weekday == false && vacation == true){
//        return true;
//    }
//    
//}


/////ALTERNATIVELY////////

function sleepIn(weekday, vacation){
    return (vacation || !weekday);
}

console.log(sleepIn(false, false))
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));


//most conscise

function sleepInBetter(){
    return(!weekday || vacation);
}
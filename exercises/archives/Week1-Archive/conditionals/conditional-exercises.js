var lowest = function(num1, num2) {
    if (num1 > num2) {
        return num2;
    } else {
        return num1;
    }
}

console.log(lowest(10, 50))
console.log(lowest(30, 16))
console.log(lowest(5, 8))

///////////////////////////////////////////////////////

var asmile = true;
var bsmile = true;

monkeyTrouble = function(asmile, bsmile){
    if (asmile && bsmile) {
        return true;
    } else if (!asmile && !bsmile) {
        return true;
    } else {
        return false;
    }
}

console.log(monkeyTrouble(true, true))
console.log(monkeyTrouble(false, false))  
console.log(monkeyTrouble(true, false))

/////////////////////////////////////////////////////////
    currentTime = new Date();
    currentHour = currentTime.getHours();
console.log(currentHour);

properGreeting = function(currentTime){

    
    if(currentHour > 11 && currentHour < 17){
        return "Good Afternoon";
    }else if(currentHour > 17 && currentHour < 3) {
        return "Good Evening";
    } else if(currentHour > 3 && currentHour < 11) {
        return "Good Morning";
    }
}

console.log(properGreeting(currentTime))

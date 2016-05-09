//function displayTime () {
//var day = new Date();
//    var weekday = new Array(7);
//            weekday[0]=  "Sunday";
//            weekday[1] = "Monday";
//            weekday[2] = "Tuesday";
//            weekday[3] = "Wednesday";
//            weekday[4] = "Thursday";
//            weekday[5] = "Friday";
//            weekday[6] = "Saturday";
//    var n = weekday[day.getDay()];
//    return "Today is: " + n;
//
//}



//var dayNames = [
//    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//]
    now = new Date();
//    dayIndex = now.getDay();
//    hours = now.getHours();
//    minutes = now.getMinutes();
//    seconds= now.getSeconds();
//    ampm = hours >= 12 ? 'PM':'AM';
//
//hours = hours % 12;
//
//minutes = minutes < 10 ? '0' + minutes : minutes;
////using the ternary operator
////the else is after the minutes
////the stuff before the question mark is the question mark
//seconds = seconds < 10 ? '0' + seconds : seconds;
//
//console.log ("Today is " +dayNames[dayIndex]);
//console.log("Current time is " + hours + ":" + minutes + ":" + seconds);


var dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
],
    now = new Date(),
    dayIndex = now.getDay(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds(),
    ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

console.log("Today is: " +dayNames[dayIndex]);
console.log("Current time is: " + hours + ":" + minutes + ":" + seconds + " " + ampm);



//console.log(now)

var longDate = new Date();
var timeString = longDate.toTimeString();

console.log(timeString.slice (0, 8));

///////
//24h//
///////


var longDate = new Date();
var timeString = longDate.toTimeString()

var hours = timeString.slice(0, 2);
var numHours = Number(hours)
numHours %= 12;
numHours < 10 ? numHours = "0" + numHours.toString() : numHours.toString();

var time = numHours + timeString.slice(2, 8);

console.log(time);


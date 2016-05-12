//http://www.w3schools.com/js/js_timing.asp
//
//update the time in the HTML, and at the end call the function with the updated time (so call it every second,)  
// take 1000 milliseconds off it each time it's called 
//when it reaches zero show the popup
//
//figure out minutes and hours, ?


var time = document.getElementById("countdown")

function showTime() {
    setInterval(function(time){
    time = time - 1;
    }, 1000)
}

document.getElementById("countdown").innerHTML.value = showTime();


/////////////////// ATTEMPT 1 //////////////////////////
//var toDisplay = setInterval(countdown(document.getElementById("countdown").innerHTML), 1000)
//var myCountdown = function {
//    var startAt = Number(document.getElementById("countdown"));
//        while(startAt > 0) {
//        //redefine startAt
//        startAt = startAt - 1;
//        
//        myCountdown()    
//        } else {/*popup*/}
//}
//
//document.getElementById("countdown").innerHTML = toDisplay

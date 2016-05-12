//http://www.w3schools.com/js/js_timing.asp
//
//update the time in the HTML, and at the end call the function with the updated time (so call it every second,)  
// take 1000 milliseconds off it each time it's called 
//when it reaches zero show the popup
//
//figure out minutes and hours, ?


var time = parseInt(document.getElementById("countdown").innerHTML);

function showTime() {
    var handler = setInterval(function () {
        if(time > 0){
            time = time - 1;
            if (time < 10 ){time = "0" + time};
            document.getElementById("countdown").innerHTML = time;
        } else{
                time = 0;                
              }
        
    }, 1000)
}

//clearInterval(handler);
//document.getElementById("countdown").innerHTML = showTime();
showTime();

/////////////////// ATTEMPT 1 //////////////////////////
//var toDisplay = setInterval(countdown, 1000)
//var myCountdown = function() {
//    var startAt = Number(document.getElementById("countdown"));
////        while(startAt > 0) {
//        //redefine startAt
//        startAt = startAt - 1;
//        
//        myCountdown()    
//         /*else ->  popup*/
//}
//
//document.getElementById("countdown").innerHTML.value = toDisplay
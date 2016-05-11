//http://www.w3schools.com/js/js_timing.asp
//
//have this system call a method that updates the time and the visual of it and at the end it calls itself with the updated time of course. so like call it every second,
//    
//up have it keep trackof the "global time" and take 1000 milliseconds off it each time it's called    
//
//
//when it reaches zero show the popup
//
//do the "time math" to do more complex times (which is just for the visual they can stay in milliseconds for the system to work properly) and you have to figure out minutes and hours, 


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('countdown').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}





  var seconds;
  var temp;
 
  function countdown() {
    seconds = document.getElementById('countdown').innerHTML.toLocaleString();
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
      temp = document.getElementById('countdown');
      temp.innerHTML = "The end of the world has come upon us";
      return;
    }
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    theEnd = setTimeout(countdown, 1000);
  } 
 
  countdown();
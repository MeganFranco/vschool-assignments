var time = parseInt(document.getElementById("countdown").innerHTML);

function subtractSecond() {
    time--;
    var displayTime = time.toString();
    if (time < 10) {
        displayTime = "0" + time;
    }
    
    document.getElementById("countdown").innerHTML = displayTime;

    if (time === 0) {
        clearInterval(handler);
    }
}

var handler = setInterval(subtractSecond, 1000);

//function showTime() {
//    var handler = setInterval(function () {
//        if (time > 0) {
//            time = time - 1;
//            if (time < 10) {
//                time = "0" + time
//            };
//            document.getElementById("countdown").innerHTML = time;
//        } else {
//            time = 0;
//            clearInterval(handler)
//
//        }
//
//    }, 1000)
//}

//showTime();

//set time out waits an amount of time before running it once
//don't do this inside a for-loop, it'll act weird
//set interval waits a certain amount of time before running it over and over and over
$( document ).ready(function(){
    
var countMe = document.getElementsByTagName("html")[0];

countMe.addEventListener("click", countClicks);

var currentCount = 0;

    var newCount;

function countClicks() { 
    
currentCount ++ ;
    document.getElementById("currentClickCount").innerHTML = currentCount;
    
};

  
});




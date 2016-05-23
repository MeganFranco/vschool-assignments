$( document ).ready(function(){
    
//var countMe = document.getElementsByTagName("body");
//
// countMe = countMe.addEventListener("click", countClicks());

//function countClicks() { 
//    
//    var currentCount = Number(document.getElementById("currentClickCount").value)
//    newCount = currentCount + 1;
//    document.getElementById("currentClickCount").innerHTML = newCount
//    
//}

    $('body').each(function() {
    $(this).click(function() {
        var currentCount = Number(document.getElementById("currentClickCount").value)
    newCount = currentCount + 1;
    document.getElementById("currentClickCount").innerHTML = newCount
    }) 

})
//countClicks();
});



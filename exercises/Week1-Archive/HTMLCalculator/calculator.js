var addMe = function(num1, num2){
    var number1 = document.getElementById("add1").value;
    var number2 = document.getElementById("add2").value;
    console.log(number1);
    
    
    var num1 = Number(number1);
    var num2 = Number(number2);
    
    
    var theResult = num1 + num2;
    
        console.log(theResult)
    
    document.getElementById("addResult").innerHTML = theResult;  
    }

var subtractMe = function(num1, num2){
    var number1 = document.getElementById("sub1").value;
    var number2 = document.getElementById("sub2").value;
    
    
    
    var num1 = Number(number1);
    var num2 = Number(number2);
    
    
    var theResult = num1 - num2;
    
        
    
    document.getElementById("subtractResult").innerHTML = theResult;  
    }

var timesMe = function(num1, num2){
    var number1 = document.getElementById("times1").value;
    var number2 = document.getElementById("times2").value;
    
    
    
    var num1 = Number(number1);
    var num2 = Number(number2);
    
    
    var theResult = num1 * num2;
    
        
    
    document.getElementById("timesResult").innerHTML = theResult;  
    }


var reload = function() {
     location.reload();
}

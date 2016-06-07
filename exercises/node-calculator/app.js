var calculate = function(num1, num2, operation) {
    var add = require("./addition");
    //call by saying something like: add(num1, num2);
    var subtract = require("./subtraction");
    
    var multiply = require("./multiplication");
    //call by saying: multiply.result(num1, num2);
    var divide = require("./division");
    
    var exponentiate = require("./exponentiation").exponentiate;
    //call by saying exponentiate(num1, num2)
    
    if(operation === "add"){
        add(num1, num2)
    };
    if(operation === "subtract"){
        subtract(num1, num2)
    };
    if(operation === "multiply"){
      multiply.result(num1, num2)  
    };
    if(operation === "divide"){
        
    };
    if(operation === ){}
    
}
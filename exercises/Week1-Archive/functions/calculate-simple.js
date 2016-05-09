function calculate(num1, num2, operation) {
    if (operation === "subtract"){
        return num1 - num2;
    } else if(operation === "add"){
        return num1 + num2;
    } else if(operation === "multiply") {
        return num1 * num2;
    } else if(operation === "divide") {
        return num1 / num2;
        if (num2 === 0) {
            return "Nan please choose an integer"
        }
    }
}

//console.log(calculate(10, 4, "subtract"));
console.log(calculate(10, 4, "add"));
console.log(calculate(10, 4, "subtract"));
console.log(calculate(25, 5, "divide"));
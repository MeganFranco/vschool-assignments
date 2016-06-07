//pattern 3 

function Divide(num1, num2) {
    this.result = function(num1, num2){
        num1 / num2;
    }
}

module.exports = new Divide();
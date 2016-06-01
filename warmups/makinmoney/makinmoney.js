//Write a function that takes an integer as an argument and formats it to look like a currency amount, including a dollar sign, commas, and a decimal. E.g.:
//
//formatMoney(1234567890)  // returns $1,234,567.80  

function formatMoney(number){
    number = number.toString();
    //working right to left...    
    //add decimal place before the last two
    var withDecimal = number.slice(0, number.length-2) + "." + number.slice(number.length - 2, number.length)
//    console.log(withDecimal)
    //add commas after every third number (while everything after the decimal point is a certain length)
    var wholeNum = withDecimal.slice(0, number.length - 2)
    var decimal = withDecimal.slice(number.length - 2, number.length + 1)
//    console.log(decimal)
//    console.log(wholeNum)
    
    //loop from right to left
    
        wholeNum = wholeNum.split("")
        wholeNum = wholeNum.reverse()
           console.log(wholeNum)
        for(var i = 2; i < wholeNum.length; i+4){
            var wholeNum = wholeNum.splice(wholeNum[i], 0, ",") 
        }
    //reverse and join
    

    console.log(wholeNum)
    //add dollar sign to beginning
}
formatMoney(1234567890)
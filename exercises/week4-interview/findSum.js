//Given an integer, find the sum of all its digits.

function digitSum(n) {
    var digits = n.toString().split('')
    var finalSum = 0;
    for(var i = 0; i < digits.length; i++) {
        finalSum = finalSum + Number(digits[i])
    }
    console.log(finalSum)
}

digitSum(123);
digitSum(1359);
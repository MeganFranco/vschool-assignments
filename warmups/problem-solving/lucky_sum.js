function luckySum(a, b, c) {
    var sum = 0;
    if(a === 13) {
        console.log("please start with any other number")
    }else if(b === 13){
        sum = a;
    } else if(c === 13){
        sum = a + b;
    }else{
        sum = a + b + c
    }
    
    console.log(sum)
}

luckySum(1, 2, 3)
luckySum(1, 2, 13)
luckySum(1, 13, 3)
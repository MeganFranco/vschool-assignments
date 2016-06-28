function decToFrac(decimal) {
    var decPointNum = 0;
    var top = decimal;
    var bottom = 1;
    
    //count number of decimals after decimal point
    var beforeAndAfter = decimal.toString();
    beforeAndAfter = beforeAndAfter.split(".")
    decPointNum = Number(beforeAndAfter[1].length);
    console.log(" ")
//    console.log(decPointNum + " line 13");
    
    //multiply both top and bottom by that number
    top = top * decPointNum
    bottom = bottom * decPointNum
    console.log("top: " + top + "/n bottom: " + bottom);
    //simplify
        //find GCD
        //divide by GCD
    //return
}


decToFrac(0.5);
decToFrac(1.25)
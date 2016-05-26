function camelCase(input) {
    input.toLowerCase();
    
       function whyDoesThisSuck(){

   }

    for (var i = 0; i < input.length; i++) {
        if (input[i].indexOf("-") > -1) {   
            
            caseArray = input.split("-");
            whyDoesThisSuck()
            
        } else if(input[i].indexOf("_") > -1) {
            
            caseArray = input.split("_");
            whyDoesThisSuck();
            
        }else {
            
            caseArray = input.split(" ")
            whyDoesThisSuck();
        }
    }
    
            outputArray = [caseArray[0], ]

    for (var i = 1; i < caseArray.length; i++) {
        var thisWord = caseArray[i];
        var newWord = thisWord.charAt(0).toUpperCase() + thisWord.slice(1, thisWord.length)
        outputArray.push(newWord);

    }
    
    console.log(caseArray)





    var cappedString = outputArray.toString();
    var finalString = cappedString.split(",").join("")
    console.log(finalString)
}


camelCase("hello there how are you")
camelCase("hello-there-how-are-you")
/*
Return the number of times that the string "code" appears anywhere
in the given string, except we'll accept any letter for the "d", so
"cope" and "cooe" would also count.



countCode("aaacodebbb") -> 1
countCode("codexxcode") -> 2
countCode("cozexxcope") -> 2

var string = "foo",
    substring = "oo";
console.log(string.indexOf(substring) > -1);
*/

function countCode(string) {
    string = string.toLowerCase
   codeCount = 0;
    for(var i = 0; i < string.length - 3; i++)
    
    if(string.charAt(i) == 'c' && string.charAt(i + 1) == 'o' && string.charAt(i + 3) == 'e'){
        codeCount = codeCount + 1
    }
    console.log(codeCount)
}


countCode("aaacodebbb"); 
countCode("codexxcode");
countCode("cozexxcope");
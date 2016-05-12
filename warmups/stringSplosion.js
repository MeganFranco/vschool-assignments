/*
Given a non-empty string like "Code" return a string like "CCoCodCode".

stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"

*/

function stringSplosion(string) {
    var theNewstring = "";
    for (var i = 0; i < string.length; i++) {
        str += string.slice(0, i + 1);
    }
    console.log(theNewstring)
}

stringSplosion("word");

//wwow,worw,wo,w,word
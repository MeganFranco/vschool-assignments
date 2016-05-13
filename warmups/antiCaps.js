function antiCaps(aString) {
    var antiString = "";
    for(var i = 0; i < aString.length; i++){
        if(aString[i] == aString[i].toLowerCase()){
            antiString += aString[i].toUpperCase();
        }else {
            antiString += aString[i].toLowerCase();
        }
    } console.log(antiString)
}

antiCaps('Hello') 
antiCaps('racEcar')
antiCaps('bAnAnA')

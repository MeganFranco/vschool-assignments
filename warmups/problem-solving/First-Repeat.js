

function firstRepeat(string) {
    for (var i = 1; i < string.length; i++) {
        if(string[i] === string[i-1]){
            continue
        } else {
            console.log(string[i]);
            break;
        }
    }
}

firstRepeat("ggggggggxkljfvlsjkfg");
firstRepeat("ggggggggfkljfvlsjkfg")
firstRepeat("gfkljfvlsjkfg")

var lyrics = ["This","hit","that","ice","cold","Michelle","Pfeiffer","that","white","gold","This","one","for","them","hood","girls","Them","Them","good","girls","straight","masterpieces","Stylin","whilen","livin","it","up","in","the","city","Got","Chucks","on","with","Saint","Laurent","Got","kiss","myself","Im","so","pretty"];

function firstFunction(lyrics){

    var lyricsAs = lyrics.join(' ');
    return lyricsAs
}

console.log(firstFunction(lyrics))

function secondFunction(lyrics) {
    return lyrics.reverse().join(' ')
}

console.log(secondFunction(lyrics))


function stride(lyrics) {
    var everyOtherLyric = "";
    for (var i = 0; i < lyrics.length; i += 2) {
        everyOtherLyric += lyrics[i];
    }
    return everyOtherLyric;
}


console.log(stride(lyrics))



/////////////////////
////////////////////
var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin", "whilen", "livin", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Got", "kiss", "myself", "Im", "so", "pretty"];

//function printLyrics() {
//    var forward = ""; 
//    for (var i = 0; i < lyrics.length; i++) {
//        forward += lyrics[i] + " "; 
//    } 
//    console.log(forward); 
//}

/////////////////////
//////////////////////


function printLyrics() {
    return lyrics.join(" ");
}

function backwardsLyrics() {
    return lyrics.reverse().join(" ");
}

function everyOtherWord() {
    var everyOtherLyric = "";
    for (var i = 0; i < lyrics.length; i += 2) {
        everyOtherLyric += lyrics[i];
    }
    return everyOtherLyric;
}

console.log(printLyrics());
console.log(backwardsLyrics());
console.log(everyOtherWord());

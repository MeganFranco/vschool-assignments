//find the length of the longest word in the sentence "The quick brown fox jumped over the lazy dog"

function findTheLongest(string) {
    var arrayOfWords = string.split(" ")
    
    var longWord = 0;
    
    for(var i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length >= longWord){
            longWord = arrayOfWords[i].length;
        }
        
       
    }  
     console.log(longWord) 
}

findTheLongest("The quick brown fox jumped over the lazy dog")


//studying terminology treat like an exam
//heroku and node
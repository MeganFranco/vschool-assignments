function findPalindrome(word) {

    word = word.replace(/\s+/g, '').toLowerCase();
    var newWord = word.replace(/[^a-z+]+/gi, '');

    if (newWord === newWord.split('').reverse().join('')) {
        console.log("true");

    } else {
        console.log("false")
    }

}

findPalindrome("racecar")
findPalindrome("race car")
findPalindrome("StAr! Rats")
findPalindrome("lol")
findPalindrome("fdsajfldsa")
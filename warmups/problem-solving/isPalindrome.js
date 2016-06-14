//Write a JavaScript function that checks whether a passed string is palindrome or not?

function isPalindrome(string){
    if(string === string.split('').reverse().join('')){
        console.log("true")
    }else {
        console.log("false")
    }
}



isPalindrome("racecar");
isPalindrome("lol");
isPalindrome("cat");


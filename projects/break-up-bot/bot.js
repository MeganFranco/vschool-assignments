/*the Fuzzy-string search https://en.wikipedia.org/wiki/Approximate_string_matching#endnote_Nav01
http://ntz-develop.blogspot.com/2011/03/fuzzy-string-search.html
*/
/*Given a pattern string
    P=p_{1}p_{2}...p_{m}} 
and a text string 
    T=t_{1}t_{2}... t_{n}} , 
find a substring 
    T_{j',j}=t_{j'}... t_{j}}  in T, which, of all substrings of T, has the smallest edit distance to the pattern P  */

var readline = require("readline-sync");
/////////////////////ARRAYS and OBJECTS/////////////////////////////

//eventually put these in a database?
var checkPhrases = [
    "talk more",
    "i want to keep",
    "like you",
    "but i like you"
];


var keyWords = [
    "",
    "",
];

var firstWord = [
    "but",
    "when",
    "why"

];

var whyResponses = [
    "I just don't see this working out",
    "Because we're very different people",
    "I've been thinking a lot about where my life is going, and I don't see a future with us together",
    "Because this relationship is not working for me"
]

var previousResponses = [];

var whyContextArray = [];
//var butContextArray = []; //??


////////////////////CONDITIONALS + LOOPS/////////////////////////////
//think about what can be modularized into a function

/////////////////RESPONSE FUNCTIONS//////////////////////
var checkPhrasesResponses = function (phrase) {
    //    console.log(phrase + " line 48")
    if (phrase == checkPhrases[0]) {
        console.log("there's nothing more to talk about, I think we should see other people");
        previousResponses.push("there's nothing more to talk about, I think we should see other people" + "/n");
    } else if (phrase == checkPhrases[1]) {
        console.log("It would be easier for both of us if we just stopped communicating, and we can just move on in dating and in life");
        previousResponses.push("It would be easier for both of us if we just stopped communicating, and we can just move on in dating and in life" + "/n");
    } else if (phrase == checkPhrases[2] || phrase == checkPhrases[3]) {
        console.log("I like you as a person, but don't want to waste either of our time in a relationship that I know is not going to work out");
        previousResponses.push("I like you as a person, but don't want to waste either of our time in a relationship that I know is not going to work out" + "/n");
    }
};

var firstWordResponses = function (triggerWord) {
    if (triggerWord == firstWord[0]) {
        console.log("I know, I just have decided to focus on other areas of my life right now, and I don't want to string you along.");
        previousResponses.push("I know, I just have decided to focus on other areas of my life right now, and I don't want to string you along." + "/n")
    } else if (triggerWord == firstWord[1]) {
        console.log("By 'forseeable future' I meant forever. You should start seeing other people.");
        previousResponses.push("By 'forseeable future' I meant forever. You should start seeing other people.")
    } else if (triggerWord == firstWord[2]) {
        whyContextFunction();
    }
};


////////////////////////////Responses to why///////////////////////////////
var whyContextFunction = function () {
    if (whyContextArray[whyContextArray.length - 1] === "I just don't see this working out") {
        console.log("I've just been thinking about where my life is going, and I don't see a future with us together");
        whyContextArray.push("I've just been thinking about where my life is going, and I don't see a future with us together");
    } else if (whyContextArray[whyContextArray.length - 1] === "I've just been thinking about where my life is going, and I don't see a future with us together") {
        console.log("Because we're very different people, and I don't think we're compatible");
        whyContextArray.push("Because we're very different people, and I don't think we're compatible");
    } else if (whyContextArray[whyContextArray.length - 1] === "Because we're very different people, and I don't think we're compatible"){
        console.log("because this relationship is just not working for me, please move on an start seeing other people");
        whyContextArray.push("because this relationship is just not working for me, please move on an start seeing other people");
    } else {
        console.log("I just don't see this working out");
        whyContextArray.push("I just don't see this working out");
    }
};

/////////////////////CHECK FUNCTIONS////////////////////////

var checkFirstWord = function (input) {
    input.split(" ")
    for (var i = 0; i < firstWord.length; i++) {
        if (input[0] === firstWord[i]) {
            var triggerWord = firstWord[i]
            console.log(firstWordResponses(triggerWord))
        } else continue;
    }
}

var checkLoserInput = function (input) {
    //    var thePhrase = "";
    for (var i = 0; i < checkPhrases.length; i++) {
        if (input.indexOf(checkPhrases[i]) > -1) {
            checkPhrasesResponses(checkPhrases[i])
            console.log("line 113")
        } else {
            checkFirstWord(input)
            console.log("line 115")
        }
    }
    //    checkPhrasesResponses(thePhrase);
}

//////////////////////WHILE LOOP/////////////////////////////
//timeout: http://stackoverflow.com/questions/34069086/using-javascript-how-to-break-the-while-loop-after-a-set-time

var breakupBot = function () {
        console.log("Hey, I'm not going to be available for the forseeable future, so I think we should stop seeing each other")

        while (true) {
            ///put all of this in a timeout callback?//

            var input = readline.question(" ").toLowerCase();
            ///if accepted....////
            if (input === "okay" || input === "oh. okay" || input === "oh okay" || input === "k") {
                break;
            } else {
                checkLoserInput(input);
                console.log("line 84")
            }

        }
        console.log("thanks for understanding... I wish you the best in your future dating endeavors")
    }
    /////////////////////////////////////////////////////////

breakupBot()
    //console.log(previousResponses)
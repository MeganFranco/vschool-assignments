var express = require("express");
var app = express();
var cors = require("cors");

var mongoose = require("mongoose");

var response = {};

app.use(cors());

// var readline = require("readline-sync");
/////////////////////ARRAYS and OBJECTS/////////////////////////////

//eventually put these in a database?
var checkPhrases = [
    "talk more",
    "keep",
    "like you",
    "but i like you",
    "why",
    "I thought",
    "but",
    "when",
    "can't even",
    "should"
    
];


var keyWords = [
    "",
    "",
];

var firstWord = [
    "but",
    "when",
//    "why"

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
        return ("there's nothing more to talk about, I think we should see other people");
        previousResponses.push("there's nothing more to talk about, I think we should see other people" + "/n");
    } else if (phrase == checkPhrases[1]) {
        return ("It would be easier for both of us if we just stopped communicating, and we can just move on in dating and in life");
        previousResponses.push("It would be easier for both of us if we just stopped communicating, and we can just move on in dating and in life" + "/n");
    } else if (phrase == checkPhrases[2] || phrase == checkPhrases[3]) {
        return ("I like you as a person, but don't want to waste either of our time in a relationship that I know is not going to work out");
        previousResponses.push("I like you as a person, but don't want to waste either of our time in a relationship that I know is not going to work out" + "/n");
    } else if (phrase == checkPhrases[4]) {
        return "I just don't see this working out"
    } else if (phrase == checkPhrases[5]) {
        return "I've been thinking a lot about where my life is going, and I don't see a future with us together"
    }else if (phrase == checkPhrases[6]) {
        return "I'm sorry, this relationship just isn't working out for me"
    }else if (phrase == checkPhrases[7]) {
        return "By 'forseeable future' I meant forever. You should start seeing other people."
    }else if (phrase == checkPhrases[8]) {
        return "Why do white girls always travel in odd numbers........ because they can't even!"
    }else if (phrase == checkPhrases[9]) {
        return "well, we're just such different people!"
    }


};

function firstWordResponses(triggerWord) {
    if (triggerWord == firstWord[0]) {
        return ("I know, I just have decided to focus on other areas of my life right now, and I don't want to string you along.");
        previousResponses.push("I know, I just have decided to focus on other areas of my life right now, and I don't want to string you along." + "/n")
    } else if (triggerWord == firstWord[1]) {
        return ("By 'forseeable future' I meant forever. You should start seeing other people.");
        previousResponses.push("By 'forseeable future' I meant forever. You should start seeing other people.")
    } else if (triggerWord == firstWord[2]) {
        return whyContextFunction();
    } 
};


////////////////////////////Responses to why///////////////////////////////
function whyContextFunction() {
    //how do I get response.why over to botRoutes?
    //    var mongoGet, why array.
    //response.why = true;    
    if (whyContextArray[whyContextArray.length - 1] === "I just don't see this working out") {
        response.why = true;
        //        whyContextArray.push("I've just been thinking about where my life is going, and I don't see a future with us together")
        return ("I've just been thinking about where my life is going, and I don't see a future with us together");

        whyContextArray.push("I've just been thinking about where my life is going, and I don't see a future with us together");
    } else if (whyContextArray[whyContextArray.length - 1] === "I've just been thinking about where my life is going, and I don't see a future with us together") {
        response.why = true;
        //        whyContextArray.push("Because we're very different people, and I don't think we're compatible")
        return ("Because we're very different people, and I don't think we're compatible");

        whyContextArray.push("Because we're very different people, and I don't think we're compatible");
        //    } else if (whyContextArray[whyContextArray.length - 1] === "Because we're very different people, and I don't think we're compatible") {
        response.why = true;
        //        whyContextArray.push("because this relationship is just not working for me, please move on an start seeing other people");
        return ("because this relationship is just not working for me, please move on an start seeing other people");

    } else {
        response.why = true;
        //        whyContextArray.push("I just don't see this working out");
        return ("I just don't see this working out");


    }
};

/////////////////////CHECK FUNCTIONS////////////////////////

function checkFirstWord(input) {
    var response;
    var input = input.split(" ")
    for (var i = 0; i < firstWord.length; i++) {
        if (input[0] === firstWord[i]) {
            var triggerWord = firstWord[i]
            response = firstWordResponses(triggerWord);
        }else {
            response = "I'm not sure I understand you, just say 'okay' if you understand we're breaking up"
        }
            
    }
    //    console.log('check first word response', response);
    return response;
}

function checkLoserInput(input) {
    //    var thePhrase = "";
    var needResponse = true;
    var loserResponse;
    for (var i = 0; i < checkPhrases.length; i++) {
        if (input.indexOf(checkPhrases[i]) > -1) {
            loserResponse = checkPhrasesResponses(checkPhrases[i])
            needResponse = false;
            break;
        }
    }
    if (needResponse) {
        loserResponse = checkFirstWord(input);
    }
    return loserResponse;

    //    checkPhrasesResponses(thePhrase);
}



//////////////////////WHILE LOOP/////////////////////////////
//timeout: http://stackoverflow.com/questions/34069086/using-javascript-how-to-break-the-while-loop-after-a-set-time

function breakupBot(input) {

    //        return("Hey, I'm not going to be available for the forseeable future, so I think we should stop seeing each other")

    //        while (true) {
    ///if accepted....////

    if (input === "okay" || input === "oh. okay" || input === "oh okay" || input === "k") {
        response.response = "thanks for understanding... I wish you the best in your future dating endeavors"
        return response;
    } else {

        response.response = checkLoserInput(input);
        //        console.log(response + " line 164")
        //        console.log(response.response + " line 165")
        return response;
    }

    //     if(response.response === undefined) {
    //       return "I'm not sure I understand, you just say 'okay' if you understand we're breaking up"
    ////        return response;
    //    }



    //        }
}
/////////////////////////////////////////////////////////

//breakupBot()
//console.log(previousResponses)

module.exports.breakupBot = breakupBot;
//module.exports.whyContextFunction = whyContextFunction;

//exports.checkLoserInput = checkLoserInput;
//exports.checkPhrasesResponses = checkPhrasesResponses;
//exports.firstWordResponses = firstWordResponses;
//exports.whyContextFunction = whyContextFunction;
//exports.checkFirstWord = checkFirstWord;
//
//
/*http://coursework.vschool.io/loops-arrays/*/

function createEvenArray(highestNum) {
    var evenArray = [];
    for (var i = 0; i < highestNum; i += 2) {
        evenArray.push(i);
    }
    evenArray.shift();
    return evenArray;
    
}

var evensArray = createEvenArray(16));

function addOdds(evensOnlyArray) { 
    var evensOnlyArray = createEvenArray(10);
    var oddsArray [];
    var finalArray[];
    for(var i = 0; i < evensOnlyArray.length; i++){  
        oddsOnly.push(evensOnlyArray[i] + 1)
    }
    finalArray = evensOnlyArray.concat(oddsOnly);
    return finalArray;
}

var evensArray = createEvenArray(20);
addOdds(createEvenArray(20));



///////////////////////////////////////////////////
function createEvenArray(highestNum) {
    var evenNum = [];
    for (var i = 2; i <= highestNum; i += 2) {
        evenNum.push(i);
    }
    return evenNum;
};


function addOdds(evensOnlyArray) {
    var oddsOnly = [];
    var finalArray = [];
    for (var i = 0; i < evensOnlyArray.length; i++) {
        oddsOnly.push(evensOnlyArray[i] + 1);
    }
    finalArray = evensOnlyArray.concat(oddsOnly);
    return finalArray;
}

console.log(addOdds(createEvenArray(20)));
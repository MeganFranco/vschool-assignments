var Location = require("./location")
var readline = require("readline-sync")

var board = makeBoard();
console.log()
//printBoard();
var numHits = 0;

function makeBoard() {
    var board = [];
    for (var i = 0; i < 10; i++) {
        var line = [];
        for (var j = 0; j < 10; j++) {
            line.push(new Location());
        }
        board.push(line);
    }
    return board;
}

function printBoard(smurf) {
//    console.log(smurf)
    var printedBoard = "";
    for (var i = 0; i < smurf.length; i++) {
        var line = "";
        for (var j = 0; j < smurf[i].length; j++) {
            line += smurf[i][j].display + " ";
        }

        printedBoard += line + "\n"
    }
    console.log(printedBoard)
}

console.log("hi")
//printBoard(board);

function updateBoard(x, y, board) {
    var currentLocation = board[y][x];
//    console.log(currentLocation)
    if (currentLocation.ship) {
        console.log("HIT!")
        currentLocation.display = "X";
        currentLocation.hit = true;
        numHits++;
    } else {
        console.log("Miss :( ");
        currentLocation.display = "m";
    }
    printBoard(board);
}

function userGuess(board) {
    var x = readline.question("Guess an X coordinate: ");
    var y = readline.question("Guess a Y coordinate: ");

    updateBoard(x, y, board);
}

//userGuess(board);
//printBoard();

while(numHits < 3){
    userGuess(board)
}




//iife -> wrap it all in parenthese, and then put an empty set of parentheses at the end



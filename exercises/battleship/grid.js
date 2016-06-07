var grid = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    ]


//console.log(grid[1][1])
//console.log(grid[3][3])
//console.log(grid[7][5])
//console.log(grid[0][0])
//function createGrid(){
//    var grid = [];
//    for(var i = 0; i < 10; i++){
//        var line = [];
//        
//    }
//}

function showGrid(grid) {
    //    console.log(0 + "," + 0)
    var finalDisplay = "";
    for (var i = 0; i < 10; i++) {
        var line = "";
        for (var j = 0; j < 10; j++) {
            line += '"' + i + ',' + j + '" ' // + "j, "
        }
        line += "\n";
        finalDisplay += line;
        
    }

    console.log(finalDisplay)
}
//creating and displaying?
showGrid(grid)

function makeGrid








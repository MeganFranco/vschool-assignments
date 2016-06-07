function Location() {
    this.ship = Boolean;
    this.hit = Boolean;
    this.display = "?";
}

var grid = [];

function makeGrid() {

    for (var i = 0; i < 10; i++) {
        var row = []
        for (var j = 0; j < 10; j++) {
            var boat = new Location()
            row.push(boat.display);
//            console.log()   
        }
//        console.log(row)
        grid.push(row);
//        console.log("pushed row");
    }
    console.log(grid)
}

//console.log(makeGrid());

makeGrid()

//
//var finalDisplay = "";
//    for (var i = 0; i < 10; i++) {
//        var line = "";
//        for (var j = 0; j < 10; j++) {
//            line += '"' + i + ',' + j + '" ' // + "j, "
//        }
//        line += "\n";
//        finalDisplay += line;
//        
//    }
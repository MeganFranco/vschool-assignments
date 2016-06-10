//helper function to choose the number
function isShip() {
    var num = Math.floor(Math.random() * 3) + 1;
    return num === 1;
}


function Location() {
    this.ship = isShip();
    this.ship;
    this.miss = false;
    this.display = "O"

}

module.exports = Location;

//so you can instantiate a NEW object in your profile
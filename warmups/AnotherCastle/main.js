function Player(name) {
    this.name = name;
    this.totalCoins = 0;
    this.status = "Small";
    this.star = false;
    this.gameActive = true;
    this.setName = function (namePicked) {
        this.name = namePicked;
    }
    this.gotHit = function () {
        if (this.star === false) {
            if (this.status === "Powered Up") {
                this.status = "Big";
            } else if (this.status == "Big") {
                this.status = "Small"
            } else if (this.status === "Small") {
                this.status = "Dead";
                this.gameActive = false;
            }
        }
    };

    this.powerUp = function () {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status == "Big") {
            this.status = "Small"
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false;
        }
    };
    
    this.addCoin = function(){
        this.totalCoins++;
        
    };
    
    this.print = function(){
        console.log("Name: " + this.name + "\n" + "Coins: " + this.totalCoins + "\n" + "Status: " + this.status + "\n" + "Star: " + this.star + "\n" )
    }
};


function game(player){
    var player = new Player("Mario");
    var randomNum = Math.
    switch(randomNum) {
        case 0:
            player.gotHit();
            break;
        case 1:
            player.gotPowerUp();
            break;
        case 2:
            player.addCoin();
            break;
        case 3: 
            player.gotStar();
            break;
        default:
            break;
    }
    
}

function playGame(n, name) {
    var player = new Player("Mario");
    for(var i = 0; i < n; i++){
        game(player)
        
    }
}










/////////////////////////////////////////////////////////////////////////////////////////////
//var player = {
//    name: "Mario",
//    totalCoins: 10,
//    status: "big",
//    star: Boolean,
//    setName: function(namePicked){
//        var myRandNum =  Math.floor(Math.random() * 2) + 1;
//        if (myRandNum === 1){
//            return "Mario";
//        } else {
//            return "Luigi";
//        }
//    },
//    gotHit: function(){
//        if(){}
//    }, 
//    gameActive: true,
//    gotPowerup: function(){},
//    printMe: function(){
//        console.log(this.name + ": /n" +)
//    }
//},
//
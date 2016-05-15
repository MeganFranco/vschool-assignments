//need system to keep track of hits and destriction level
	//then can tick down population levels until end 
	//need to loop system
	

function Player(name) {
    this.name = name;
    this.population = 1000000;
}

Player.prototype.logInfo = function(){
    console.log("hello");
}

var communists = new Player("Communists");
var penguins = new Player("Penguins");

//////////////////functions///////////////////////////////

//var attackFirst = function() {
//    var randomNum = Math.floor(Math.random() * 2) + 1
//    if (randomNum === 1) {
//        party = penguins;
//    }else {
//        party = communists;
//    }   
//} ///WHY DIDN'T THIS WORK?!?!?! :(
	
//starts the whole process off	
startWar();
	
function startWar(){
	var thisParty = new party();
	
	sendNuke(thisParty);
}

function sendNuke(party){
	
	var target = new secondParty(party);
	
	// var attackStatus = new hitormiss();
	
	if(hitormiss()){
		console.log("It's a hit! the nuke " + party.name + " launched landed on " + target.name)
	}else{
		console.log("The nuke missed and " + party.name + " /' opponent, " + target.name  +", sustained no damage")
	}
    
}
    
    
var didStrikeLand = true;
//need to turn below variable into working function
function party(){
    randomNum = Math.floor(Math.random() * 2) + 1; 
    if (randomNum === 1) {
        return penguins;
    }else {
        return communists;
    };
}

function secondParty(firstParty){
    if(firstParty === penguins){
        return communists;
    } else{
        return penguins;
    };
}
    
    
function hitormiss(){
        var newNumber = Math.floor(Math.random() * 2) + 1;
        
		if(newNumber === 1){
			return true;
        } else {
            return false;
		};
} 
	//////////////////////////OLD CODE///////////////////////////////////
function Player(name) {
    this.name = name;
    this.population = 1000000;
}

Player.prototype.logInfo = function(){
    console.log("hello");
}

var communists = new Player("Communists");
var penguins = new Player("Penguins");

//need to turn below variable into working function?


//////////////////functions///////////////////////////////

var sendNuke = function(party, onHit, onMiss){  
    
    var party =
        randomNum = Math.floor(Math.random() * 2) + 1; 
        if (randomNum === 1) {
            party = penguins;
            console.log(party);
        }else {
            party = communists;
            console.log(party);
        };
    
    var secondParty = function(){
        if (party === penguins) {
            secondParty = communists;
        } else{
            secondParty = penguins;
        }
    };
    
    console.log("the party chosen is " + party)
    
//    var party;
//    var secondParty; 
    var didStrikeLand = true;
     
    
    var onHit = function(party){
    console.log("It's a hit! the nuke " + party.name + " launched landed on their opponent" )
    }
    var onMiss = function(party){
    console.log("The nuke missed and " + party.name + "' opponent sustained no damage")
    }
    
    
    var hitOrMiss = function(){
        var newNumber = Math.floor(Math.random() * 2) + 1;
        
        if(newNumber === 1){
            didStrikeLand = true;
            onHit();
        } else {
            didStrikeLand = false;
            onMiss();
        }
   
    } 
    
   console.log(hitOrMiss());

   
}


sendNuke();

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
	
//starts the whole process off	

while(communists.population > 0 || penguins.population > 0){
    
startWar();


};

//startWar();

function startWar(){
	   var thisParty = new party();
     
        if (thisParty === penguins){
            var secondParty = communists;
        } else{
           var secondParty = penguins;
        }
        

	
    sendNuke(thisParty);
    sendNuke(secondParty);
    
}


function sendNuke (party){
	
	var target = new secondParty(party);
	
	// var attackStatus = new hitormiss();
	
	if(hitormiss()){
		console.log("It's a hit! the nuke " + party.name + " launched landed on " + target.name);
     target.population = target.population - 250000;
     console.log(target.population)
     
	}else{
		console.log("The nuke missed and " + party.name + "' opponent, " + target.name  +", sustained no damage")
	}
    
    //function to return fire
    
}

var didStrikeLand = true;


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
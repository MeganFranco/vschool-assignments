//http://coursework.vschool.io/enemy-generator/


var enemyType = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
//var myEnemy = "";
//hitPoints = 0;
//var enemyArray [];
//defense = Number(hitPoints) * 3;

//function returnNumber() {
//   mynumber = enemyType[Math.floor(Math.random() * 3 )]; 
//    console.log(mynumber)
//}

//function chooseType() {
//    var enemyType = enemyType[Math.floor(Math.random() * 3 )]; 
//    console.log(myEnemy)
//}


function chooseType() {
    var randomInt = Math.floor(Math.random() * 3) + 1;
    if (randomInt === 1) {
        return "ancientDragon";
    } else if (randomInt === 2) {
        return "prowler";
    } else {
        return "mightyGrunt";
    }
}


function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseHitPoints(type) {
    if(type == "Ancient Dragon"){
        return getRandomInt(80, 100);
    }else if(type == "Prowler") {
        return getRandomInt(50, 79);
    }else {
        return getRandomInt(29, 49);
    }
}


//function chooseHitPoints(type) {
//    if(type == "Ancient Dragon"){
//        var hitPoints = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
//    }else if(type == "Prowler") {
//        var hitPoints = Math.floor(Math.random() * (79 - 50 + 1)) + 50;
//    }else {
//        var hitPoints = Math.floor(Math.random() * (49 - 20 + 1)) + 20;
//    }
//    console.log(hitPoints);
//    console.log(defense)
//}

//chooseType();
////returnNumber();
//chooseHitPoints();
////enemyDefense();
//console.log(myEnemy + " : " + hitPoints)


/////////////CLASS//////////////////////////////////

function Enemy(){
    enemyArray = [];
    this.type = chooseType();
    this.hitPoints = chooseHitPoints(this.type);
    this.defense = this.hitPoints * 3;
}

////////////////GENERATOR///////////////////////////

function generateEnemies(){    
    for (var i=0; i < 100; i++) {
        var enemy = new Enemy();
        enemyArray.push(enemy)
    }
    return enemyArray
}

console.log(generateEnemies())


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//function Enemy(enemyType, enemyHitPoints) {
//
//    this.type = enemyType;
//    this.hitPoints = enemyHitPoints;
//    this.defense = enemyHitPoints * 3;
//}
//
//function typeChooser() {
//
//    var types = [
//
//        {
//            name: "Ancient Dragon",
//            hitPoints: [80, 100]
//        }, {
//            name: "Prowler",
//            hitPoints: [50, 79]
//        }, {
//            name: "Mighty Grunt",
//            hitPoints: [20, 49]
//        }
//    ];
//
//    var index = Math.floor(Math.random() * types.length);
//    return types[index];
//}
//
//function statGenerator(typeChosen) {
//    return Math.floor(Math.random() * (typeChosen.hitPoints[1] - typeChosen.hitPoints[0] + 1) + typeChosen.hitPoints[0]);
//}
//
//
//
//function generateEnemies(howMany) {
//
//    var storedEnemies = [];
//
//    for (var i = 0; i < howMany; i++) {
//        var newEnemy = new Enemy(typeChooser().name, statGenerator(typeChooser()));
//        storedEnemies.push(newEnemy);
//    }
//
//    console.log(storedEnemies);
//};
//
//generateEnemies(100);
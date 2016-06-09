var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

myFruit = [
    {
        
    }
]

app.get('/fruitList', function(req, res){
    console.log(req.query);
    if(req.query.type){
        //if this is falsy we'll filter by type
       var filteredByType = myFruit.filter(function(fruit){
           return fruit.type === req.query.type
       });
    } else {
        res.send(myFruit)
        //if it's falsy send the whole array back
    }
    
    res.send(fruit)
});

app.post('/fruitList', function(req, res){
    req.body.id = uuid.v4();
    listOfMovies.push(req.body);
    res.send(listOfMovies);
});

app.put('/fruitList/:fruitID', function(req, res){
    
});

app.listen(8000, function(){
    console.log("app is listening");
});
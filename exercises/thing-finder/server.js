var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

myFruit = [
    {
        type: "apple",
        brand: "Jonny AppleSeed's",
        price: 1,
    },
    {
        type: "apple",
        brand: "Ocher Orchards",
        price: .74,
    },
    {
        type: "orange",
        brand: "Spanish Queen",
        price: .5,
    },
    {
        type: "banana",
        brand: "Chiquita",
        price: .25,
    }
]

app.get('/fruit', function (req, res) {
    if (req.query.type) {
        var filteredByType = myFruit.filter(function (fruit) {
            return fruit.type === req.query.type
        });
        return res.send(filteredByType)
        console.log("sent thing")
    }

    res.send(myFruit);
    console.log("sent whole array")
})

app.post('/fruit', function (req, res) {
    req.body.id = uuid.v4();
    myFruit.push(req.body);
    res.send(myFruit);
});

app.put('/fruit/:fruitID', function (req, res) {

});

app.listen(8000, function () {
    console.log("app is listening");
});
var express = require("express");
var productRouter = express.Router();
var Product = require("../models/collections");

//productRouter.get("/products", function (req, res) {
//    Product.find(function (err, products) {
//        if (err) {
//            res.status(500).send(err)
//        } else {
//            res.send(products)
//        }
//    });
//});

productRouter.post("/products", function (req, res) {
    var newProduct = new Product(req.body);
    newProduct.save(function (err, product) {
        if (err) throw err;
        res.send(product);
    });
});


module.exports = productRouter;



////filtering?//
//Product.find({maker:"auntEdna"})//
//productRouter.get("/products", function(req, res){
//    Product.find({type:"quilt"}, function(err, products){
//        if(err){ res.status(500).send(err)}
//        else{
//            res.send(products)
//        }
//        
//    });
//});

productRouter.get("/products", function(req, res){
    Product.find(req.query, function(err, products){
        if(err){ res.status(500).send(err)}
        else{
            res.send(products)
        }
        
    });
});
//OR GO TO FRONT END AND USE CONFIG WITH BUTTONS WHICH WILL TAKE PARAMS --> the value of the params key will be maker:"makerName"
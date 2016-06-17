var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
//        ref: "Category",
        required: true,
    },
    maker: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model("Product", productSchema)

//EXPORT ME

//Product.find({maker:"auntEdna"})//

/*
item:
image: ***path to the image in your server
http://meganfranco.com/dots_shop_images/blueAndBrown_blanket.JPG
http://meganfranco.com/dots_shop_images/blueQuilt_Sandy.jpeg
http://meganfranco.com/dots_shop_images/eleanorInBlanket.JPG
http://meganfranco.com/dots_shop_images/yellow_blanket.JPG
http://meganfranco.com/dots_shop_images/easterDress_Dress.JPG
http://meganfranco.com/dots_shop_images/fallQuilt_Dot.JPG
*/
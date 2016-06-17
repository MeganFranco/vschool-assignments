var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    productType: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    maker: {
        type: Schema.Types.ObjectId,
    }
});

/*
item:
image: ***path to the image in your server
http://meganfranco.com/dots_shop_images/yellow_blanket.JPG
http://meganfranco.com/dots_shop_images/easterDress_Dress.JPG
*/
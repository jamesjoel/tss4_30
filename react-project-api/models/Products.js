require("../config/db");

let mongoose = require("mongoose");

let ProductSchema = mongoose.Schema({
    title : String,
    price : Number,
    category : String,
    detail : String,
    discount : Number,
    quantity : Number
})

module.exports = mongoose.model("product", ProductSchema);
require("../config/db");
const mongoose = require("mongoose");

const ProdcutSchema = mongoose.Schema({
    title : String,
    price : Number,
    category : String,
    detail : String
})

module.exports =  mongoose.model("product", ProdcutSchema);




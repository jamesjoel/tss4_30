require("../config/db");

const mongoose = require("mongoose");
var StudentSchema = mongoose.Schema({
    fullname : String,
    age : Number,
    city : String
})

// 3. create a model
module.exports = mongoose.model("student", StudentSchema);
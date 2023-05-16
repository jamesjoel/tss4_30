require("../config/db");

const mongoose = require("mongoose");

const DemoSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
}, { collection : "demo"});

module.exports = mongoose.model("demo", DemoSchema);
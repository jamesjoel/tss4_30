require("../config/db");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    contact : String,
    gender : String,
    address : String,
    city : String
})

module.exports = mongoose.model("user", UserSchema);
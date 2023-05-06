require("../config/db");
const mongoose = require("mongoose");

const Subject = mongoose.Schema({
    name : String
})

module.exports = mongoose.model("subject", Subject);
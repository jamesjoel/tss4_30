const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

mongoose.connect("mongodb://0.0.0.0:27017/tss4_30");

const DemoSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
}, { collection : "demo"});

const Demo = mongoose.model("demo", DemoSchema);


app.get("/", async (req, res)=>{

    const result = await Demo.find();

    var obj ={ name : "rohit", result };
    res.render("show", obj);

    
    
})

app.listen(3000, ()=>{
    console.log("server running");
})
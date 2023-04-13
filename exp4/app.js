const express = require("express");
const app = express(); // constructor

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");


app.get("/", (req, res)=>{

    var a = "rohit";
    var b = 25;

    var obj = { x : "amar", y : 30, z : "mumbai"}

    res.render("index", obj);
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running ", port);
})
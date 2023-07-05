const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));

app.set("view engine", "ejs");

// app.set("views", "demo");


app.get("/", (req, res)=>{
    var data = [
        {
            name : "amar",
            age : 24, 
            city : "indore"
        },
        {
            name : "vijay",
            age : 21,
            city : "mumbai"
        },
        {
            name : "jaya",
            age : 25,
            city : "pune"
        }
    ];
    var obj = { data };
    
    res.render("home", obj);
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server running ", port);
    
})
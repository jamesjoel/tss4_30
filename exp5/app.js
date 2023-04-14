const express = require("express")
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    var name = "gaurav";
    var obj = { name : name, city : "indore" };
    res.render("index", obj);
})
app.get("/about", (req, res)=>{
    
    var color = ["red", "green", "blue", "yellow"];
    var city = ["indore", "mumbai", "pune", "delhi", "bhopal"];
    var obj = { color : color, city : city };
    res.render("about", obj);
})


app.get("/student", (req, res)=>{

    var data = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "amar",
            age : 21,
            city : "mumbai"
        },
        {
            name : "gaurav",
            age : 20,
            city : "pune"
        },
        {
            name : "gaurav",
            age : 20,
            city : "pune"
        },
        {
            name : "gaurav",
            age : 20,
            city : "pune"
        },
        {
            name : "gaurav",
            age : 20,
            city : "pune"
        },
        {
            name : "gaurav",
            age : 20,
            city : "pune"
        },
        {
            name : "gaurav",
            age : 20,
            city : "pune"
        },
        {
            name : "gaurav",
            age : 20,
            city : "pune"
        },
        {
            name : "gaurav",
            age : 20,
            city : "pune"
        }
    ]

    var obj = { stu : data};

    res.render("student", obj);
})



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running ", port);
})
/*
var data = [];

data.forEach((X, n)=>{
    if(n==9){
        break;
    }
})




*/
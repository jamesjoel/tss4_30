const app = require("express").Router();


app.get("/", (req, res)=>{
    res.render("about/index");
});
app.get("/info", (req, res)=>{
    var name = "Goutam";

    var obj = {name : name};

    res.render("about/info", obj);
});
// localhost:3000/about/more
app.get("/more", (req, res)=>{
    res.render("about/more");
});

module.exports = app;
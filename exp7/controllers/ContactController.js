var app = require("express").Router();

app.get("/", (req, res)=>{
    res.render();
})
app.get("/local", (req, res)=>{ // localhost:3000/contact/local
    res.render("contact/demo");
})
app.get("/global", (req, res)=>{
    res.render();
})

module.exports = app;
const app = require("express").Router();

app.get("/", (req, res)=>{
    res.render();
})
app.get("/local", (req, res)=>{
    res.render();
})
app.get("/global", (req, res)=>{
    res.render();
})

module.exports = app;
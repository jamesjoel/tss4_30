const app = require("express").Router();

app.get("/", (req, res)=>{
    res.render();
})
app.get("/chat", (req, res)=>{
    res.render();
})
app.get("/chat/online", (req, res)=>{
    res.render();
})
app.get("/demo", (req, res)=>{
    res.render();
})

module.exports = app;
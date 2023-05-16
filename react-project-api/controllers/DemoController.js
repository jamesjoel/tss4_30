const routes = require("express").Router();
const Demo = require("../models/Demo");

routes.get("/", async (req, res)=>{
    var result = await Demo.find();
    res.send(result);
})

module.exports = routes;

/*
    req.body
    req.params


    res.render
    res.redirect
    res.sendFile


*/
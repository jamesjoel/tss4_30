const routes = require("express").Router();
const Category = require("../models/Category");

routes.post("/", async(req, res)=>{
    Category.create(req.body);
    res.send({ success : true});
})

module.exports = routes;
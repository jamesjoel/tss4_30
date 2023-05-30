const routes = require("express").Router();
const Product = require("../models/Products");

routes.post("/", async(req, res)=>{
    Product.create(req.body);
    res.send({ success : true});
})
routes.get("/", async(req, res)=>{
    var result = await Product.find();
    res.send(result);
})

module.exports = routes;
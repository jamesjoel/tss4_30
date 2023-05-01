const routes = require("express").Router();
const Product = require("../models/Product");

routes.get("/", (req, res)=>{
    res.render("product");
})

routes.post("/save", async (req, res)=>{
    await Product.create(req.body);
    res.redirect("/product");
})

routes.get("/view", async (req, res)=>{
    var result = await Product.find();
    var obj = {result};
    res.render("pro_view", obj);
})
module.exports = routes;
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


routes.get("/detail/:x", async (req, res)=>{
    var a = req.params.x;

    var result = await Product.find({ _id : a });
    // allways getting single/one data only

    var obj = { result : result[0]};
    res.render("detail", obj);
})
routes.get("/edit/:x", async (req, res)=>{
    var a = req.params.x;
    var result = await Product.find({ _id : a });
    var obj = { result : result[0]};
    res.render("edit", obj);
})
routes.get("/delete/:x", async (req, res)=>{
    var a = req.params.x;
    
    await Product.deleteMany({_id : a})
    res.redirect("/product/view");
})
routes.post("/update/:x", async(req, res)=>{
    var a = req.params.x;
    await Product.updateMany({_id : a }, req.body);
    res.redirect("/product/view");

})


module.exports = routes;
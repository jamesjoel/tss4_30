const routes = require("express").Router();
const Category = require("../models/Category");

routes.post("/", async(req, res)=>{
    Category.create(req.body);
    res.send({ success : true});
})
routes.get("/", async(req, res)=>{
    var result = await Category.find();
    res.send(result);
})

routes.delete("/:a", async(req, res)=>{
    var x = req.params.a;

    await Category.deleteMany({ _id : x});
    res.send({ success : true });
})

module.exports = routes;
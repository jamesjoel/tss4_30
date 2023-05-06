const routes = require("express").Router()
const Subject = require("../models/Subjects");

routes.get("/", (req, res)=>{
    res.render("subject/index");
})
routes.get("/list", async (req, res)=>{

    var result = await Subject.find();
    var obj = {result};
    res.render("subject/list", obj);
})

routes.post("/save", async(req, res)=>{
    Subject.create(req.body);
    res.redirect("/subject/list");
})

routes.get("/delete/:x", async (req, res)=>{
    var a = req.params.x;
    await Subject.deleteMany({ _id : a});
    res.redirect("/subject/list")
})
routes.get("/edit/:x", async (req, res)=>{
    var a = req.params.x;
    
    var result = await Subject.find({ _id : a});
    
    var obj = { data : result[0]};
    res.render("subject/edit", obj);
})

routes.post("/update/:x", async (req, res)=>{
    var a = req.params.x;
    await Subject.updateMany({ _id : a}, req.body);
    res.redirect("/subject/list");
})

module.exports = routes;
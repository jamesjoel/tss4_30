const routes = require("express").Router();
const mongoose = require("mongoose");

// 1. connect to mongodb
mongoose.connect("mongodb://0.0.0.0:27017/tss4_30");

// 2. create a Schema
var StudentSchema = mongoose.Schema({
    fullname : String,
    age : Number,
    city : String
})

// 3. create a model
var Student = mongoose.model("student", StudentSchema);

routes.get("/", (req, res)=>{
    res.render("student/index")
})

routes.post("/save", async(req, res)=>{
   
    await Student.create(req.body);

    res.redirect("/student/list");
})

routes.get("/list", async (req, res)=>{
    var result = await Student.find();
    var obj = {result};
    res.render("student/list", obj);
})


routes.get("/delete/:id", async (req, res)=>{
    var x = req.params.id;

    await Student.deleteMany({ _id : x});
    res.redirect("/student/list")
    
})


routes.get("/edit/:id", async(req, res)=>{
    var x = req.params.id;
    var result = await Student.find({ _id : x });
    var data = result[0];
    var obj = {data};
    res.render("student/edit", obj);
})

routes.post("/update/:id", async (req, res)=>{
    var x = req.params.id;
    await Student.updateMany({ _id : x }, req.body)
    res.redirect("/student/list");
})


module.exports = routes;

/*
    <a href="/about">
    <a href="/about/info">
    <a href="/about/info/demo">
    <a href="/about/user">
    <a href="/about/user/help">
    <a href="/about/setting/help/demo">

    +

    <form action="/about/hello" method="post"

    +

    res.redirect("/about/user/help")




    Controller

    routes.get("/")
    routes.get("/info")
    routes.get("/info/demo")
    routes.get("/user")
    routes.get("/user/help")
    routes.get("/setting/help/demo")
    routes.post("/hello")




*/
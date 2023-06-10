const routes = require("express").Router();
const City = require("../models/City")


routes.get("/", async(req, res)=>{

    var result = await City.find();
    res.send(result);
})
routes.get("/pagination/:x/:y", async(req, res)=>{
    var cityperpage = req.params.x; // 100
    var skip = req.params.y; // 400

    var result = await City.find().skip(skip).limit(cityperpage)
    // .find().skip(10).limit(10)
    res.send(result);
})

routes.get("/total", async(req, res)=>{
    

    var result = await City.count();
    res.send({ total : result });
})




routes.get("/pagination2/:x", async (req, res)=>{
    let a = req.params.x;
    var result = await City.find().limit(a);
    res.send(result);
})


routes.get("/statecity", async (req, res)=>{
    var result = await City.distinct("state");
    res.send(result);
})
routes.get("/statecity/:a", async (req, res)=>{
    var x = req.params.a;
    var result = await City.find({ state : x});
    res.send(result);
})



module.exports = routes;

/*
        5           401-500     .find().skip(400).limit(100)
        8           701-800     .find().skip(700).limit(100)


        





*/
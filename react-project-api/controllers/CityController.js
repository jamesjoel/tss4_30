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
    res.send(result);
})

routes.get("/total", async(req, res)=>{
    

    var result = await City.count();
    res.send({ total : result });
})




module.exports = routes;

/*
        5           401-500     .find().skip(400).limit(100)
        8           701-800     .find().skip(700).limit(100)


        





*/
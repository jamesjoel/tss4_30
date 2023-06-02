const routes = require("express").Router();
const Product = require("../models/Products");
const path = require("path");

routes.post("/", async(req, res)=>{
    
    // console.log(JSON.parse(req.body.formdata));
    // console.log(req.files);
    
    var formdata = JSON.parse(req.body.formdata);
    var image = req.files.image;
    formdata.image = image.name;

    // console.log(path.resolve()+"/assets/upload-images/");
    await image.mv(path.resolve()+"/assets/upload-images/"+image.name);


    await Product.create(formdata);

    res.send({ success : true});
})
routes.get("/", async(req, res)=>{
    var result = await Product.find();
    res.send(result);
})

module.exports = routes;
const routes = require("express").Router();
const Product = require("../models/Products");
const path = require("path");
const uni = require("random-strings")


routes.post("/", async(req, res)=>{
    
    // console.log(JSON.parse(req.body.formdata));
    // console.log(req.files);
    
    var formdata = JSON.parse(req.body.formdata);
    var image = req.files.image;
    var oldname = image.name;  // 1.jpg
    var arr = oldname.split("."); // [1, jpg]
    var ext = arr[arr.length-1]; // jpg
    var uniname = uni.base64(20); // CDVART5421sdfg5sd4fg
    var newname = uniname+"."+ext; //CDVART5421sdfg5sd4fg.jpg

    formdata.image = newname;
    await image.mv(path.resolve()+"/build/upload-images/"+newname);
    await Product.create(formdata);
    res.send({ success : true});
})
routes.get("/", async(req, res)=>{
    var result = await Product.find();
    res.send(result);
})

routes.get("/:cate", async(req, res)=>{
    var cate = req.params.cate;
    var result = await Product.find({category : cate});
    res.send(result);
})

module.exports = routes;
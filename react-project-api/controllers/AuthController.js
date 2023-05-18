const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");

routes.post("/", async (req, res)=>{
    var e = req.body.email;
    var p = sha1(req.body.password);
    var result = await User.find({ email : e });
    if(result.length == 1)
    {
        if(result[0].password == p)
        {
            res.send({success : true });
        }else{
            res.send({success : false, type : 2});
        }
    }else{
        res.send({success : false, type : 1});
    }
})

module.exports = routes;
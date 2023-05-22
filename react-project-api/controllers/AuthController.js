const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", async (req, res)=>{
    var e = req.body.email;
    var p = sha1(req.body.password);
    var result = await User.find({ email : e });
    if(result.length == 1)
    {
        if(result[0].password == p)
        {
            var obj = { name : result[0].name, email : result[0].email, id : result[0]._id };
            var token = jwt.sign(obj, "the stepping stone");
            res.send({success : true, token : token });
        }else{
            res.send({success : false, type : 2});
        }
    }else{
        res.send({success : false, type : 1});
    }
})

module.exports = routes;
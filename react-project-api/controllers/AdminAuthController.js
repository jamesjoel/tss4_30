const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", async (req, res)=>{
    var u = req.body.username;
    var p = sha1(req.body.password);    
    var result = await Admin.find({ username : u });
    if(result.length == 1)
    {
        if(result[0].password == p)
        {
           var obj = { id : result[0]._id };
           var token = jwt.sign(obj, "the stepping stone"); 
           res.send({ success : true, token : token });
        }
        else{

            res.send({ success : false, errType : 2})
        }
    }
    else{
        res.send({ success : false, errType : 1})
    }
})

module.exports = routes;
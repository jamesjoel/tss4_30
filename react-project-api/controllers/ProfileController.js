const routes = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// localhost:3001/api/profile
routes.get("/:a", async (req, res)=>{
    let x = req.params.a;
    let obj = jwt.decode(x, "the stepping stone");
    let id = obj.id;
    let result = await User.find({ _id : id });
    res.send(result[0]);
})

module.exports = routes;

/*
var obj = { name, email, id}
var token = jwt.sign(obj, "")

*/


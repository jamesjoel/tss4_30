const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("student/index")
})

routes.post("/save", (req, res)=>{
    console.log(req.body);
})


module.exports = routes;
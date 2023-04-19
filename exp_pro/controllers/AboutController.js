const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("about/index")
})
routes.get("/demo", (req, res)=>{
    res.render("about/demo")
})

module.exports = routes;
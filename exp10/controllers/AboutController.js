const routes = require("express").Router();

// localhost:3000/about/about
routes.get("/", (req, res)=>{
    res.render("about");
})

module.exports = routes;

/*
    route 

        routes.get("/")
        href=""
        action=""
        res.redirect("")



*/
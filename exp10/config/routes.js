const routes = require("express").Router();


routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/product", require("../controllers/ProductController"));

module.exports = routes;
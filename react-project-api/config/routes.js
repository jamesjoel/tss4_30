const routes = require("express").Router();

routes.use("/api/demo", require("../controllers/DemoController"));

module.exports = routes;
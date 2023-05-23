const routes = require("express").Router();

routes.use("/api/demo", require("../controllers/DemoController"));
routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/auth", require("../controllers/AuthController"));
routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/profile", require("../controllers/ProfileController"));

module.exports = routes;
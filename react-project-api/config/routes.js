const routes = require("express").Router();

routes.use("/api/demo", require("../controllers/DemoController"));
routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/auth", require("../controllers/AuthController"));
routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/profile", require("../controllers/ProfileController"));
routes.use("/api/admin/auth", require("../controllers/AdminAuthController"));
routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/product", require("../controllers/ProductController"));

module.exports = routes;
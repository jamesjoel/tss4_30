const routes = require("express").Router();

const HomeCtrl = require("../controllers/HomeController");
const AboutCtrl = require("../controllers/AboutController");
const ContactCtrl = require("../controllers/ContactController");
const HelpCtrl = require("../controllers/HelpController")
const StudentCtrl = require("../controllers/StudentController");


routes.use("/", HomeCtrl);
routes.use("/about", AboutCtrl);
routes.use("/contact", ContactCtrl);
routes.use("/help", HelpCtrl);
routes.use("/student", StudentCtrl);

routes.use("/subject", require("../controllers/SubjectController"))


module.exports = routes;

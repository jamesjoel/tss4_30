const app = require("express").Router();


const HomeCtrl = require("../controllers/HomeController");
const AboutCtrl = require("../controllers/AboutController");
const HelpCtrl = require("../controllers/HelpController");
const ContactCtrl = require("../controllers/ContactController");
const ServiceCtrl = require("../controllers/ServiceController");

app.use("/", HomeCtrl);
app.use("/about", AboutCtrl);
app.use("/contact", ContactCtrl);
app.use("/help", HelpCtrl);
app.use("/service", ServiceCtrl);

module.exports = app;








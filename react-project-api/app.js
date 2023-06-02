const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./config/routes");
const upload = require("express-fileupload");
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors());
app.use(upload());

app.use(routes);


const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})

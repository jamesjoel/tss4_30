const express = require("express");
const app = express();
const routes = require("./config/routes");


app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

// .json() and .urlencoded() function convert data 0-1 to normal form
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(routes);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("sever running with port ", port);
})


/*
    <% code %>

    <%= print %>

    <%- include("") %>


*/
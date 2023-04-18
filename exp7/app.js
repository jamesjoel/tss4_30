const express = require("express");
const app = express();

const routes = require("./config/routes");

app.use(express.static(__dirname+"/assets"));

app.set("view engine", "ejs");

app.use(routes);


const port = process.env.PORT || 3000;



app.listen(port, ()=>{
    console.log("server running");
})



/*
1. app.use((req, res)=>{  // before all routes

})

2. app.use("/about", (req, res)=>{ // before only about routes

})

3. app.use(["/about", "/contact", "/help"], (req, res)=>{ // before "/about", "/contact", "/help"

})


*/
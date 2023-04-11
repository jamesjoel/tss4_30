const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    // console.log(__dirname);
    // e:/tss4_30/exp2/home.html
    res.sendFile(__dirname+"/home.html");
});
app.get("/about", (req, res)=>{  // localhost:3000/about
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
});
app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/not-found.html");
})




app.listen(3000, ()=>{
    console.log("server running");
}); // port number
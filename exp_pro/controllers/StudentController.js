const routes = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

routes.get("/", (req, res)=>{
    res.render("student/index")
})

routes.post("/save", async(req, res)=>{
    
    console.log(req.body);
    MongoClient.connect("mongodb://0.0.0.0:27017", (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("success");
    });






})


module.exports = routes;
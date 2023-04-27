const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/tss4_30");

var TeacherSchema = mongoose.Schema({
    city : String,
    name : String,
    age : Number
})

var Teacher = mongoose.model("teacher", TeacherSchema);
// app.set("views", "demo");
app.set("view engine", "ejs");

app.use(express.static(__dirname+"/assets"));

app.use(express.json())
app.use(express.urlencoded({ extended : true}));


app.get("/", async (req, res)=>{

    // var teacher = { name : "amar", age : 25, city : "indore"};

    // await Teacher.create(teacher);

    res.render("index");
})

app.get("/teacher", (req, res)=>{
    res.render("teacher");
})


app.post("/save", async (req, res)=>{
    // console.log(req.body);
    var data = req.body;  // { name : "rohit", age : 25, city :"indore"}
    await Teacher.create(data);
    res.redirect("/list");
})



app.get("/list", async(req, res)=>{
    var result = await Teacher.find();

    var obj = { result }

    res.render("list", obj);
})



app.get("/about/:name/:city/:age/:fee", (req, res)=>{
    var x = req.params.name;
    var y = req.params.city;
    console.log(x, y);
    
})

app.get("/delete/:a", async (req, res)=>{
    var x = req.params.a;
    await Teacher.deleteMany({ _id : x});
    res.redirect("/list");
})

app.get("/edit/:a", async(req, res)=>{
    var x = req.params.a;
    var result = await Teacher.find({ _id : x });
    var data = result[0];

    var obj = {data};
    res.render("edit", obj);
})

app.post("/update/:a", async (req, res)=>{
    var x = req.params.a;
    
    // console.log(req.body);
    await Teacher.updateMany({ _id : x }, req.body);
    res.redirect("/list");
})


/*

    var result = await Student.find({ _id : 14571254 })






    res.render()
    res.sendFile()
    res.redirect()


    req.body
    req.params


*/





app.listen(3000, ()=>{
    console.log("Server Running");
})

/*

    res.sendFile   ------ only for static html pages
    res.render   ---- use in ejs (tempate engine pages) with sending data also

*/
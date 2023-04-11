// var mod1 = require("./mod1");

// var ans =mod1.demo(5); 

// ans.calc(6);

var fs = require("fs"); // file system

fs.readFile("hello.txt", "utf8", (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
});




// 1. readfile
// 2. writefile
// 3. delete file data
// 4. delete file


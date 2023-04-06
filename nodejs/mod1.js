// var a = require("fs");
// var b = require("path");

// console.log(b);

var x = require("reverse-string")
var y = x("rohit");
// console.log(y);

var rand = require("randomstring");
var num = rand.generate({
    length : 5,
    charset : 'alphabetic',
    capitalization : 'uppercase'
});

console.log(num);
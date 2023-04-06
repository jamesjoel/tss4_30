var a = "Hello";

var b = a;

a = "indore";

/*
var arr = ["rohit", "amar", "gaurav"];
var data = arr;

arr[0] = "jaya";

console.log(arr);
console.log(data);
*/

//  De-Stru

var info = [1, 5, 17, 20, 100, 18, 23];

var [...x] = info;
var x = info;



info[0]=1000;
console.log(x);
console.log(info);
var obj1 = { name : "amar", age : 30};

var obj2 = obj1;

obj1.name = "demo";

console.log(obj1); // { name : "demo", age : 30}
console.log(obj2)// { name : "amar", age : 30}


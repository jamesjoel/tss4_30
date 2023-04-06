var user = {
    name : "rohit",
    age : 25
}

// var obj = user;
var {...obj} = user;


user.name = "amar";

console.log(user)
console.log(obj)

var user = {
    name : "gaurav",
    age : 25,
    city : "indore"
};

var info = user;




user.name = "amar";
user.age = 30;
user.city = "bhopal";

console.log(user)
console.log(info)
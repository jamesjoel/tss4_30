var a = "Lorem ipsum dolor sit amet consectetur rohit adipisicing elit. Porro quod labore ducimus quasi rerum rohit ad laborum soluta, accusantium rohit accusamus, nemo ipsa aspernatur? Harum ad distinctio vero rohit at temporibus sapiente nisi.";
var data = a.split(" ");

var n = data.length-1;
for(var i = 0; i <= n; i++){
    if(data[i]=="rohit"){
        data.splice(i, 1);
    }
}

var b = data.join(" ");
console.log(b);


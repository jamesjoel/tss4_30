// 1 + 4 + 25 = 30
var a = 125;
var b = a.toString();
var data = b.split("");

var n = data.length-1;
var total = 0;

for(var i = 0; i <= n; i++){
    var x = data[i];
    var y = x*x;

    total += y;
}
console.log(total);

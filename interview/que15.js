//  Armstrong Number
// 1 + 4 + 25 = 30
var a = 1634;
var b = a.toString();
var data = b.split("");

var m = data.length;
var n = data.length-1;
var total = 0;

for(var i = 0; i <= n; i++){
    var x = data[i];
    var y = Math.pow(x, m);

    total += y;
}
if(total == a){
    console.log("YES")
}else{
    console.log("NO");
}




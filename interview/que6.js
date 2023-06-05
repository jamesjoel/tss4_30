// getting max value for an array
var data = [7, 15, 19, 4, 3, 9, 10, 14, 2, 20];
var n = data.length-1;
var x = data[0]; // 7

for(var a = 1; a <= n; a++){
    if(x > data[a]){
        x = data[a];
    }
}

console.log(x);
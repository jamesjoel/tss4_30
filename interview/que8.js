let data1 = [7, 15, 8, 3, 9, 16, 14];
let data2 = [9, 3, 17, 20];

let n = data2.length-1;

for(var i = 0; i <= n; i++){
    var x = data2[i];
    var m = data1.indexOf(x);
    if(m == -1){
        data1.push(x);
    }
}

console.log(data1);









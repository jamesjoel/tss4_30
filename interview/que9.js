let arr = ["rohit", "amar", "gautam", "vijay", "abcxcba", "nilesh"];
let n = arr.length-1;

let ans = "";
for(var i = 0; i <= n; i++){
    var x = arr[i];
    var data = x.split("");
    data.reverse();
    var y = data.join("");

    if(x == y){
        ans = x;
    }
}

console.log(ans);
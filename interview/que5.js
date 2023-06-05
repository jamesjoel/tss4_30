var a = "abcdcba";
var data = a.split("");
data.reverse();
var b = data.join("");

if(a == b){
    console.log("YES")
}else{
    console.log("NO");
}

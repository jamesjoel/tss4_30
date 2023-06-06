// Prime Number 1,2,3,5,7,11,13,17,19,23,29,31,37,

var a = 73;
var check = true;

for(var i = 2; i < a/2; i++){
    if(a % i == 0){
        console.log(i);
        check = false;
        break;
    }
}


if(check){
    console.log("YES") 
}else{
    console.log("NO") 
}

/*
13

*/
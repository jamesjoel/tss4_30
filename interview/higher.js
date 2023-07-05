/*
    var arr = [4, 5, 8, 10, 12, 6, 3, 18];

    arr.forEach((val, index, arr2, cb)=>{
        console.log(val);
    })
    
    
    var data = arr.map((val, index, arr2, cb)=>{
                    
                        return val;
                    
                })
    
    var data = arr.filter((val, index, arr2, cb)=>{
                return val>10;
                })
    
    var data = arr.reduce((accu, val, index, arr2, cb)=>{
                    return accu+val;
                })


*/

var arr = [4, 5.5, 8];
var count = arr.reduce((accu, val)=>{
    return accu+val;
})

console.log(count);
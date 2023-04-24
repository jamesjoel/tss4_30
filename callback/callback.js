
function demo(x, y, cb){
    setTimeout(()=>{
        var ans  = x*y;
        cb(ans);
    }, 3000)
}

function demo2(a, cb){
    setTimeout(()=>{
        var ans = a*2;
        cb(ans);
    }, 2000)
}
function demo3(a, cb){
    setTimeout(()=>{
        var ans = a+10;
        cb(ans);
    }, 1000)
}




demo(7, 3, (z)=>{
    demo2(z, (y)=>{
        demo3(y, (x)=>{
            console.log(x);
        });
    });
});

async function hello(){

    var a =await demo(7, 3);
    var b =await demo2(a);
    var c =await demo3(b);
}




// 1000 = 1sec

/*
    async, await


*/

var counter = 1;
var demo = () =>{
    process.stdout.write("*");
    if(counter < 100){
        setTimeout(demo, 10);
    }
    counter++;
}
// 1000 = 1 sec

setTimeout(demo, 1000);
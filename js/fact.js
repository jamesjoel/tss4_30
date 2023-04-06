var n = 0;
var ans = 1;
if(n != 0)
{
    for(var a = n; a >= 1; a--)
    {
        ans *= a;
    }

}
else{
    ans = 1;
}

console.log(ans);
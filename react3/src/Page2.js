import { useState } from 'react'
let Page2 = ()=>{

    let [divStyle, setDivStyle] = useState({
        backgroundColor : "red",
        height : "100px",
        width : "100px",
        borderRadius : "100px",
        marginTop : "0px",
        marginLeft : "0px"
    })

    let [a, setA] = useState("The Stepping Stone");

    let demo1 = ()=>{
        setA("Indore");
    }

    let demo2 = ()=>{
        setDivStyle({...divStyle, backgroundColor : "green"});
    }
    let demo3 = ()=>{
        setDivStyle({...divStyle, backgroundColor : "red"});
    }

    let demo4 = ()=>{
        let x = Math.random()*500;
        let y = Math.floor(x); //410
        
        let m = Math.random()*700;
        let n = Math.floor(m);// 650

        setDivStyle({...divStyle, marginTop : y+"px", marginLeft : n+"px"})
    }

    return(
        <>
            
            <div onMouseMove={demo4} onMouseOut={demo3} onMouseOver={demo2} style={divStyle}></div>
        </>
    )
}

export default Page2;
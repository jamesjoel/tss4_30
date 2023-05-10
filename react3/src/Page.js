import { useState } from 'react'
let Page = ()=>{

    // let a = "amar";

    let [a, b] = useState("amar");
    
    let hello = ()=>{
        console.log("welcome");
        b("rohit");
    }

    return(
        <>
            <h1>{ a }</h1>    
            <button onClick={hello}>OK</button>
        </>
    )
}

export default Page;

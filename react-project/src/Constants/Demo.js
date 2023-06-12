import React, { useState } from 'react'

const Demo = () => {
   
   let [num, setNum] = useState(0);

   let [data, setData] = useState(["red", "green", "blue"]);

    let test = ()=>{
    //    setNum(1);
        // setNum((x)=>{
        //     return x++;
        // })

        setData((oldArr)=>{
            return oldArr.filter(x=>x != "green");
        })
    }
    return(
        <>
            <h1>{ num }</h1>
            <button onClick={test}>OK</button>   
        </>
        
    )
}

export default Demo
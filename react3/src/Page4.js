import React, { useState } from 'react'

const Page4 = () => {

    let [name, setName] = useState("");
    let [age, setAge] = useState(0);
    let [city, setCity] = useState("");
    
  return (
    <>
        <div>Page4</div>
        <h1>{name}, {age}, {city}</h1>
        
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
        <br />
        <br />
        <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}/>
        <br />
        <br />
        <select value={city} onChange={(e)=>setCity(e.target.value)}>
            <option>select</option>
            <option>indore</option>
            <option>mumbai</option>
            <option>pune</option>
        </select>
        {/* <button onClick={demo}>OK</button> */}
        {/* <button onClick={(e)=>demo(e)}>OK</button> */}
    </>
  )
}

export default Page4
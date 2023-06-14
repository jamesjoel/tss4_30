import React, {useState} from 'react'
import { add, del2 } from './StudentSlice'
import { useDispatch } from 'react-redux';

const Form = () => {

  let disp = useDispatch();
  let [name, setName] = useState();
  let [a, setA] = useState();

  let save = ()=>{
    disp(add(name));
    setName("");
  }
  let remove = ()=>{
    disp(del2(a));
  }
  return (
    <div style={{ backgroundColor : "#ccc", width : "800px", height : "500px", float : "left"}}>
        <br />
        <br />
        <br />
        Name : <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
        <br />
        <br />
        <button onClick={save}>Add</button>
        <br />
        <br />
        <br />
        <br />
        Insert Number <input type='text' value={a} onChange={(e)=>setA(e.target.value)}/>
        <button onClick={remove}>Del</button>
      
    </div>
  )
}

export default Form
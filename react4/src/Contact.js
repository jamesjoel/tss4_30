import React, {useState} from 'react'

const Contact = () => {

  // let [a, setA] = useState("");
  // let [b, setB] = useState("");

  let [user, setUser] = useState({ name : "", email : "" })


  let show = ()=>{
    console.log(user);
  }
  return (
    <>
    <br />
    <br />
      <input type='text' value={user.name} onChange={(e)=> setUser({...user, name : e.target.value})}/>
      <br />
      <br />
      <input type='text' value={user.email} onChange={(e)=>setUser({...user, email : e.target.value})} />
      <br />
      <button onClick={show}>OK</button>
    </>
  )
}

export default Contact
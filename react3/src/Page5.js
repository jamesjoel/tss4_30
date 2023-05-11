import React, { useState } from 'react'

const Page5 = () => {
    let [user, setUser] = useState({ name : "", email : "", contact : "" })

    let show = ()=>{
        console.log(user)
    }
  return (
    <>
        Full Name : <input value={user.name} type='text' onChange={(e)=>setUser({...user, name : e.target.value})} />
        <br />
        <br />
        Email : <input value={user.email} type='text' onChange={(e)=>setUser({...user, email : e.target.value})}/>
        <br />
        <br />
        Contact : <input value={user.contact} type='text' onChange={(e)=>setUser({...user, contact : e.target.value})}/>
        <br />
        <br />
        <button onClick={show}>Show</button>
    </>
  )
}

export default Page5
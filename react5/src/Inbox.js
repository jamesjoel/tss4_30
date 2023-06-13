import React from 'react'
import { useSelector } from 'react-redux'

const Inbox = () => {
    let name = useSelector(z=>z);
  return (
    <div style={{backgroundColor : "red", height : "300px", width : "400px", float : "left"}}>
        Inbox
        <h4>{name}</h4>
    </div>
  )
}

export default Inbox
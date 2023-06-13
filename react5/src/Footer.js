import React from 'react'
import { useSelector } from 'react-redux'
const Footer = () => {
    let i = useSelector(state=>state);
  return (
    <div style={{backgroundColor : "blue", width : "100%", height : "100px"}}>
        Footer
        <h2>{i}</h2>
    </div>
  )
}

export default Footer
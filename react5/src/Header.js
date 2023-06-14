import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  let a = useSelector(x=>x);
  return (
    <div style={{ backgroundColor : "#065874", width : "100%", height : "80px"}}>
      <h3>Total Student : {a.length}</h3>
    </div>
  )
}

export default Header
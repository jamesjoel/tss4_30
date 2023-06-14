import React from 'react'
import { useSelector } from 'react-redux'

const List = () => {
  let a = useSelector(x=>x);
  
  return (
    <div style={{ width : "200px", minHeight : "500px", backgroundColor : "#007411", float : "left"}}>
      <h3>All List</h3>
      {
        a.map((val, index)=><h4 key={index}>{val}</h4>)
      }
    </div>
  )
}

export default List
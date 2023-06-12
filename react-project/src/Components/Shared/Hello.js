import React from 'react'

const Hello = (props) => {
  return (
    <>
        <h1 style={{backgroundColor : "red"}}>{props.name+" "+props.age}</h1>
        
    </>
  )
}

export default Hello
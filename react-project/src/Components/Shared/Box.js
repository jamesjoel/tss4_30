import React from 'react'
import './Box.css';
const Box = (x) => {
    
  return (
    <>
        <div className='box'>
            <h1>{x.hello.city}</h1>
            <p>{x.hello.para}</p>
        </div>
    </>
  )
}

export default Box
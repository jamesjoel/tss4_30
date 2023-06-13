import React from 'react'
import Show from './Show'
import Input from './Input'

const App3 = () => {

    let data = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "amar",
            age : 30
        },
        {
            name : "jaya",
            age : 21
        },
        {
            name : "vijay",
            age : 23
        }
    ]

  return (
    <>
        <Input />
        <br />
        <br />
        {
            data.map(x=><Show info={x}/>)
        }
    </>
  )
}

export default App3
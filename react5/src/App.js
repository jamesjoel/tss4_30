import React from 'react'
import Header from './Header'
import List from './List'
import Form from './Form'
import DeleteStu from './DeleteStu'

import { useDispatch } from 'react-redux'
import { fetch } from './StudentSlice'

const App = () => {
  let disp = useDispatch();

  disp(fetch(["vijay", "rohit", "neeraj"]))

  return (
    <>
      <Header />
      <div style={{backgroundColor : "#000"}}>
          <List />
          <Form />
          <DeleteStu />
      </div>
    </>
  )
}

export default App
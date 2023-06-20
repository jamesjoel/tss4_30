import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Albums from './components/Albums'
import Header from './shared/Header'
import Student from './components/Student'
const App2 = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='albums' element={<Albums />} />
            <Route path='student' element={<Student />} />
        </Routes>


    </>
  )
}

export default App2
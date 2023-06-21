import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Albums from './components/Albums'
import Header from './shared/Header'
import Student from './components/Student'
import Teacher from './components/Teacher'
import Employee from './components/Employee'
const App2 = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='albums' element={<Albums />} />
            <Route path='student' element={<Student />} />
            <Route path='teacher' element={<Teacher />} />
            <Route path='employee' element={<Employee />} />

        </Routes>


    </>
  )
}

export default App2
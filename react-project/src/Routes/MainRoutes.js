import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import About from '../Components/Pages/About/About'
import Contact from '../Components/Pages/Contact/Contact'
import Signup from '../Components/Pages/Signup/Signup'
import Login from '../Components/Pages/Login/Login'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
        </Routes>
    </>
  )
}

export default MainRoutes
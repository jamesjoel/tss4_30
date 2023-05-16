import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import About from '../Components/Pages/About/About'
import Contact from '../Components/Pages/Contact/Contact'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
        </Routes>
    </>
  )
}

export default MainRoutes
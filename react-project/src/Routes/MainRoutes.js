import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import About from '../Components/Pages/About/About'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
        </Routes>
    </>
  )
}

export default MainRoutes
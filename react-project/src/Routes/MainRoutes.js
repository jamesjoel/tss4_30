import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import About from '../Components/Pages/About/About'
import Contact from '../Components/Pages/Contact/Contact'
import Signup from '../Components/Pages/Signup/Signup'
import Login from '../Components/Pages/Login/Login'
import Help from '../Components/Pages/Help/Help'
import Logout from '../Components/Pages/Logout/Logout'
import Profile from '../Components/Pages/Profile/Profile'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='help' element={<Help />} />
            <Route path='logout' element={<Logout />} />
            <Route path='profile' element={<Profile />} />
        </Routes>
    </>
  )
}

export default MainRoutes
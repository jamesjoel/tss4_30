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

import UserLayout from '../Layout/UserLayout'
import AdminLayout from '../Layout/AdminLayout'

import Dashbaord from '../Components/AdminPages/Dashboard'
import Category from '../Components/AdminPages/Category'
import Prodcut from '../Components/AdminPages/Product'

const MainRoutes = () => {
  return (
    <>
        <Routes>
              <Route path='' element={<UserLayout />}>
                    <Route path='' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='login' element={<Login />} />
                    <Route path='help' element={<Help />} />
                    <Route path='logout' element={<Logout />} />
                    <Route path='profile' element={<Profile />} />
              </Route>
              <Route path='admin' element={<AdminLayout />}>
                  <Route path="" element={<Dashbaord />} />
                  <Route path="product" element={<Prodcut />} />
                  <Route path="category" element={<Category />} />
              </Route>
        </Routes>
    </>
  )
}

export default MainRoutes
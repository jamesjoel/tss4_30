import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Shared/Header'
import Header2 from '../Components/Shared/Header2'
import Footer from '../Components/Shared/Footer'

const UserLayout = () => {
  return (
    <>
        <Header2 />
            <Outlet />
        <Footer />
    </>
  )
}

export default UserLayout
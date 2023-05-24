import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Components/AdminShared/Header'
import Footer from '../Components/AdminShared/Footer'

const AdminLayout = () => {
  return (
    <>
        <Header />
        <div style={{ minHeight : "700px"}}>

            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default AdminLayout
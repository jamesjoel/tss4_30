import React from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from '../shared/UserHeader'
import UserFooter from '../shared/UserFooter'
const UserLayout = () => {
  return (
    <>
        <UserHeader />
            <Outlet />
        <UserFooter />
    </>
  )
}

export default UserLayout
import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('nimda')){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false);
    }
  }, [])


  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/admin">Administrator</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          {
            isLoggedIn ? (<div className="navbar-nav">
            
            <NavLink className="nav-item nav-link" to="/admin/dashboard">Dashboard</NavLink>
            <NavLink className="nav-item nav-link" to="/admin/product">Products</NavLink>
            <NavLink className="nav-item nav-link" to="/admin/category">Category</NavLink>
            <NavLink className="nav-item nav-link" to="/admin/logout">Logout</NavLink>
            
            </div>) : ''
          }
            
        </div>
        </nav>
    </>
  )
}

export default Header
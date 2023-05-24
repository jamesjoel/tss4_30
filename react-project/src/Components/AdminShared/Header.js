import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/admin">Administrator</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            
            <NavLink className="nav-item nav-link" to="/admin">Dashboard</NavLink>
            <NavLink className="nav-item nav-link" to="/admin/product">Products</NavLink>
            <NavLink className="nav-item nav-link" to="/admin/category">Category</NavLink>
            
            </div>
        </div>
        </nav>
    </>
  )
}

export default Header
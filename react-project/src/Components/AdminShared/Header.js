import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

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
            
                <ul className='nav'>
                  <li className='nav-item'>
                    <NavLink className="nav-item nav-link" to="/admin/dashboard">Dashboard</NavLink>
                  </li>
                  <li className='nav-item dropdown'>
                    <NavLink className='nav-link dropdown-toggle' to="/admin/product" data-toggle="dropdown">Product</NavLink>
                    <div className='dropdown-menu'>

                      <NavLink className="dropdown-item" to="/admin/product/list">List</NavLink>
                      <NavLink className="dropdown-item" to="/admin/product/add">Add</NavLink>
                    </div>
                  </li>
                  <li className='nav-item dropdown'>
                    <NavLink className='nav-link dropdown-toggle' to="/admin/category" data-toggle="dropdown">Category</NavLink>
                    <div className='dropdown-menu'>

                      <NavLink className="dropdown-item" to="/admin/category/list">List</NavLink>
                      <NavLink className="dropdown-item" to="/admin/category/add">Add</NavLink>
                    </div>
                  </li>
                  <li className='nav-item'>
                  <NavLink className="nav-item nav-link" to="/admin/pagination">Pagination</NavLink>
                  </li>
                  <li className='nav-item'>
                  <NavLink className="nav-item nav-link" to="/admin/pagination2">Pagination 2</NavLink>
                  </li>
                  <li className='nav-item'>
                  <NavLink className="nav-item nav-link" to="/admin/city-state">City-State</NavLink>
                  </li>
                  <li className='nav-item'>
                  <NavLink className="nav-item nav-link" to="/admin/logout">Logout</NavLink>
                  </li>
                  
                </ul>
            
            </div>) : ''
          }
            
        </div>
        </nav>
    </>
  )
}

export default Header

/*


            
            

*/
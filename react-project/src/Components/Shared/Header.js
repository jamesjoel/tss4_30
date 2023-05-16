import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
   
   <div className="header-area">
       <div className="main-header header-sticky">
           <div className="container-fluid">
               <div className="menu-wrapper">
                   
                   <div className="logo">
                       <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                   </div>
                   
                   <div className="main-menu d-none d-lg-block">
                       <nav>                                                
                           <ul id="navigation">  
                               <li><NavLink to="/">Home</NavLink></li>
                               <li><NavLink to="/about">about</NavLink></li>
                               <li><NavLink to="/contact">contact</NavLink></li>
                               
                               {/* <li className="hot"><a href="#">Latest</a>
                                   <ul className="submenu">
                                       <li><a href="shop.html"> Product list</a></li>
                                       <li><a href="product_details.html"> Product Details</a></li>
                                   </ul>
                               </li> */}
                               
                           </ul>
                       </nav>
                   </div>
                   
                   <div className="header-right">
                       <ul>
                           <li>
                               <div className="nav-search search-switch">
                                   <span className="flaticon-search"></span>
                               </div>
                           </li>
                           <li> <a href="login.html"><span className="flaticon-user"></span></a></li>
                           <li><a href="cart.html"><span className="flaticon-shopping-cart"></span></a> </li>
                       </ul>
                   </div>
               </div>
               
               <div className="col-12">
                   <div className="mobile_menu d-block d-lg-none"></div>
               </div>
           </div>
       </div>
   </div>
   
</header>
    </>
  )
}

export default Header
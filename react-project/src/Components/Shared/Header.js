import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import API from '../../Constants/ApiUrl'
import LiTag from './LiTag'
import { useSelector } from 'react-redux'

const Header = () => {

    let cart = useSelector(x => x);




    let [isLoggedIn, setIsLoggedIn] = useState(false);
    let [name, setName] = useState("");
    let [allCate, setAllCate] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem("token"))
        {
            setIsLoggedIn(true);
            setName(localStorage.getItem("displayname"));
        }

        axios.get(`${API}category`).then(result=>{
            setAllCate(result.data);
        })

    },[])


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
                               <li className="hot"><NavLink to="#">Category</NavLink>
                                   <ul className="submenu">
                                    {
                                        allCate.map(x=>{
                                            return(
                                                <LiTag key={x._id} list={x}/>
                                            )
                                        })
                                    }
                                       
                                   </ul>
                               </li> 
                                {
                                    isLoggedIn ? (
                                        <>
                                        <li><NavLink to="/profile">Profile</NavLink></li>
                                        <li><NavLink to="/logout">Logout</NavLink></li>
                                        </>
                                    ) : (
                                        <>
                                        <li><NavLink to="/signup">Signup</NavLink></li>
                                        <li><NavLink to="/login">Login</NavLink></li>
                                        </>
                                    )
                                }
                                
                               


                               
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
                            {
                                name !="" ? (
                                    <li> <a href="login.html" style={{color : "#fff", backgroundColor : "#FF2424", padding : "5px"}}>{name}</a></li>
                                ) : '' 
                            }
                           
                           <li>
                               <div className="nav-search search-switch">
                                   <span className="flaticon-search"></span>
                               </div>
                           </li>
                           <li>
                            <NavLink style={{color : "#000"}} to="/cart"><span className="flaticon-shopping-cart"></span>My Cart ({cart.length})</NavLink>
                           </li>
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
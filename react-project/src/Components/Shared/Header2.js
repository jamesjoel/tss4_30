import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import API from '../../Constants/ApiUrl'
import LiTag from './LiTag'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/UserAuthSlice'

const Header2 = () => {

    let cart = useSelector(x => x.CartSlice);
    
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    let [name, setName] = useState("");
    let [allCate, setAllCate] = useState([]);
    let disp = useDispatch();
    useEffect(()=>{
        if(localStorage.getItem("token"))
        {
            disp(add());
            setIsLoggedIn(true);
            setName(localStorage.getItem("displayname"));
        }

        axios.get(`${API}category`).then(result=>{
            setAllCate(result.data);
        })

    },[])

    let demo = useSelector(x => x.UserAuthSlice);

  return (
    <>
    
    <nav className="navbar bg-danger navbar-expand-sm navbar-dark">
            <NavLink to="/" className="navbar-brand">MyShopping.com</NavLink>
            <button className='navbar-toggler' data-toggle="collapse" data-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>

           <div className='collapse navbar-collapse' id="menu">
           <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

                <li className='nav-item'><NavLink className="nav-link" to="/about">about</NavLink></li>
                <li className='nav-item'><NavLink className="nav-link" to="/contact">contact</NavLink></li>
                <li className='nav-item dropdown'>
                    <NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Category</NavLink>
                    <div className="dropdown-menu">
                    {
                        allCate.map(x=>{
                            return(
                                <LiTag key={x._id} list={x}/>
                            )
                        })
                    }
                        
                    </div>
                </li> 
                {
                    demo.check ? (
                        <>
                        <li className='nav-item'><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
                        <li className='nav-item'><NavLink className="nav-link" to="/logout">Logout</NavLink></li>
                        </>
                    ) : (
                        <>
                        <li className='nav-item'><NavLink className="nav-link" to="/signup">Signup</NavLink></li>
                        <li className='nav-item'><NavLink className="nav-link" to="/login">Login</NavLink></li>
                        </>
                    )
                }
                
                               
            </ul>
           </div>

            </nav>   
    
    </>
  )
}

export default Header2
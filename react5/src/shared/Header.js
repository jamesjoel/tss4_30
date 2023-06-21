import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { insert } from '../redux/AlbumSlice'


const Header = () => {

    let disp = useDispatch();
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then(response=>{
            disp(insert(response.data.products));
        })
    }, [])

    let album = useSelector(x=>x.AlbumSlice);
    let teacher = useSelector(x=>x.TeacherSlice);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/student">Student</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/teacher">Teacher ({teacher.length})</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/albums">Albums ({album.length})</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/employee">Employee</NavLink>
            </li>
        </ul>
        </nav>
  )
}

export default Header
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { remove } from '../../../redux/UserAuthSlice'

const Logout = () => {
    let navigate = useNavigate();
    let disp = useDispatch();

    useEffect(()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("displayname");
        disp(remove());
        navigate("/login");

    },[])

    
  
}


const Hello = ()=>{
    return(<h1>hello</h1>)
}

export default Logout
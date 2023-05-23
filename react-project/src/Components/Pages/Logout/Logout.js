import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    let navigate = useNavigate();

    useEffect(()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("displayname");
        navigate("/login");

    },[])

    
  
}

export default Logout
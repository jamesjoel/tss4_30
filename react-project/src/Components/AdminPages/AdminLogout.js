import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const AdminLogout = () => {
    let navigate = useNavigate();

    useEffect(()=>{
        localStorage.removeItem("nimda");
        
        navigate("/");

    },[])

    
  
}

export default AdminLogout
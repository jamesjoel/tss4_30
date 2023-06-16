import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch  } from 'react-redux';
import { remove } from '../../redux/AdminAuthSlice'
const AdminLogout = () => {
    let navigate = useNavigate();
    let disp = useDispatch();

    useEffect(()=>{
        localStorage.removeItem("nimda");
        disp(remove());
        navigate("/");

    },[])

    
  
}

export default AdminLogout
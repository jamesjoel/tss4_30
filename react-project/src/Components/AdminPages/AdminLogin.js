import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import API from '../../Constants/ApiUrl';
import { useDispatch } from 'react-redux'
import { add } from '../../redux/AdminAuthSlice'

const AdminLogin = () => {

    let navigate = useNavigate();
    let disp = useDispatch();


    useEffect(()=>{
        if(localStorage.getItem('nimda')){
            navigate("/admin/dashboard");
        }
    }, [])


    let [msg, setMsg] = useState("");
    let { handleChange, handleSubmit } = useFormik({
        initialValues : { username : "", password : ""},
        onSubmit : (formdata)=>{
            axios.post(`${API}admin/auth`, formdata).then(result=>{
                if(result.data.success==true){
                    localStorage.setItem("nimda", result.data.token);
                    disp(add());
                    navigate("/admin/dashboard");
                }
                if(result.data.errType==1)
                {
                    setMsg("This Username and Password incorrect");
                }
                if(result.data.errType==2)
                {
                    setMsg("This Password incorrect");
                }
            })
        }
    });

  return (
    <div className='container my-4'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" onChange={handleChange} name='username' className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" onChange={handleChange} name='password' className="form-control" placeholder="Enter password"/>
                </div>
                
                <button type="submit" style={{padding : "10px 20px"}} className="btn-primary">Submit</button>

                {
                    msg ? (<div className='alert alert-danger mt-4'>{msg}</div>) :  ''
                }
                
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin
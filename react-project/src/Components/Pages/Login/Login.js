import React, { useState } from 'react'
import axios from 'axios'
import API from '../../../Constants/ApiUrl'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let navigate = useNavigate();

    let [showMsg, setShowMsg] = useState(false);
    let [passMsg, setPassMsg] = useState(false);

    let [user, setUser] = useState({
        email : "",
        password : ""
    })

    // localhost:3001/api/auth
    let doLogin = ()=>{
        axios.post(`${API}auth`, user).then(result=>{
            if(result.data.success == true)
            {
                navigate("/");
            }


            if(result.data.type==1)
            {
                setPassMsg(false);
                setShowMsg(true);
            }
            if(result.data.type==2)
            {
                setShowMsg(false);
                setPassMsg(true);
            }
        })
    }

  return (
    <>
        <div className='container my-4' style={{ minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4>Login</h4>
                
                <div className='form-group'>
                    <label>Email</label>
                    <input type='text' value={user.email} onChange={(e)=>setUser({...user, email : e.target.value })}  className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' value={user.password} onChange={(e)=>setUser({...user, password : e.target.value })} className='form-control' />
                </div>
                
                <br />
                <input type='submit' value="Login" onClick={doLogin} className='btn btn-primary' />
                
                
                {
                    showMsg ? (
                        <div className='alert alert-danger mt-3'>This Email and Password is Incorrect !</div>
                    ) : ''
                }
                {
                    passMsg ? (
                        <div className='alert alert-danger mt-3'>This Password is Incorrect !</div>
                    ) : ''
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
import React, { useState } from 'react'
import axios from 'axios'
import API from '../../../Constants/ApiUrl'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { add } from '../../../redux/UserAuthSlice'

let loginSchema = Yup.object({
    email : Yup.string().required("Insert Your Email Id"),
    password : Yup.string().required("Insert Your Password")
})
const Login = () => {
    let disp = useDispatch();
    let navigate = useNavigate();
    let [showMsg, setShowMsg] = useState(false);
    let [passMsg, setPassMsg] = useState(false);
    let {handleChange, handleSubmit, errors, touched} = useFormik({
        validationSchema : loginSchema,
        initialValues : { email : "", password : ""},
        onSubmit : (formdata)=>{
            axios.post(`${API}auth`, formdata).then(result=>{
                if(result.data.success == true)
                {
                    let token = result.data.token;
                    localStorage.setItem("token", token);
                    localStorage.setItem("displayname", result.data.dispname)
                    disp(add());
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
        
    })
  
    /*
    
    */


  return (
    <>
        <div className='container my-4' style={{ minHeight : "700px"}}>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h4>Login</h4>
                        
                        <div className='form-group'>
                            <label>Email</label>
                            <input type='text' name='email' onChange={handleChange} className={'form-control ' + (errors.email && touched.email ? 'is-invalid' : '')} />
                            <small className='text-danger'>{ errors.email && touched.email ? errors.email : ""}</small>
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' name='password' onChange={handleChange} className={'form-control ' + (errors.password && touched.password ? 'is-invalid' : '')} />
                            <small className='text-danger'>{ errors.password && touched.password ? errors.password : ""}</small>
                        </div>
                        
                        <br />
                        <input type='submit' value="Login" className='btn btn-primary' />
                        
                        
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
        </form>
    </div>
    </>
  )
}

export default Login
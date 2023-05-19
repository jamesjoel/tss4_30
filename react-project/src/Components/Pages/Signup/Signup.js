import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API from '../../../Constants/ApiUrl'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const signupSchema = Yup.object({
    name : Yup.string().required("Insert Your Name"),
    email : Yup.string().email("Invalid Email Id").required("Insert Your Email"),
    password : Yup.string().required("Insert Your Password"),
    repass : Yup.string().required("Insert Your Re-Password"),
    address : Yup.string().required("Insert Your Address"),
    gender : Yup.string().required("Select Your Gender"),
    city : Yup.string().required("Select Your City"),
    contact : Yup.string().required("Insert Your Contact")
})

const Signup = () => {

    let navigate = useNavigate();

    let { handleChange, handleSubmit, errors, touched } = useFormik({
        validationSchema : signupSchema,
        initialValues : { name : "", email : "", password : "", address : "", city : "", repass : "", gender : "", contact : ""},
        onSubmit : (data)=>{
            console.log(data);
        }
    });


    // let [user, setUser] = useState({
    //     name : "",
    //     email : "",
    //     password : "",
    //     address : "",
    //     city : "",
    //     repass : "",
    //     gender : "",
    //     contact : ""
    // });
   
    // let save = ()=>{
    //    axios.post(`${API}signup`, user).then(result=>{
    //     if(result.data.success){
    //            // console.log("success -----------")

    //            navigate("/login");
    //     }
    //    })
    // }

  return (
    <>
   
    <div className='container my-4' style={{ minHeight : "700px"}}>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4>Registration</h4>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' name="name" onChange={handleChange} className={'form-control ' + (errors.name && touched.name ? 'is-invalid' : '')} />
                    <small className='text-danger'>{ errors.name && touched.name ? errors.name : ''}</small>
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='text' name="email" onChange={handleChange}  className='form-control' />
                    <small className='text-danger'>{ errors.email && touched.email ? errors.email : ''}</small>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' name="password" onChange={handleChange}  className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Re-Password</label>
                    <input type='password' name="repass" onChange={handleChange} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Address</label>
                    <textarea className='form-control' name="address" onChange={handleChange}></textarea>
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <br />
                    Male <input type='radio' name='gender'  onChange={handleChange} value="male" />
                    Female <input type='radio' name='gender' onChange={handleChange} value="female" />
                </div>
                <div className='form-group'>
                    <label>Contact</label>
                    <input type='text' name="contact" onChange={handleChange} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>City</label>
                    <select className='form-control' name="city" onChange={handleChange}>
                        <option>Select</option>
                        <option>Indore</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                    </select>
                </div>
                <br />
                <input type='submit' value="Signup" className='btn btn-primary' />
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Signup
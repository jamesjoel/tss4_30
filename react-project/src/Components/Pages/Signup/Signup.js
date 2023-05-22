import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API from '../../../Constants/ApiUrl'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const signupSchema = Yup.object({
    name : Yup.string().required("Insert Your Name"),
    email : Yup.string().email("Invalid Email Id").required("Insert Your Email"),
    password : Yup.string().required("Insert Your Password"),
    repass : Yup.string().oneOf([Yup.ref("password")], "Password and Re-Password should be same").required("Insert Your Re-Password"),
    address : Yup.string().required("Insert Your Address"),
    gender : Yup.string().required("Select Your Gender"),
    city : Yup.string().required("Select Your City"),
    contact : Yup.number().typeError("Insert Numbers Only").required("Insert Your Contact")
})

const Signup = () => {

    let [city, setCity] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}city`).then(result=>{
            setCity(result.data);
        })
    }, [])


    let { handleChange, handleSubmit, errors, touched } = useFormik({
        validationSchema : signupSchema,
        initialValues : { name : "", email : "", password : "", address : "", city : "", repass : "", gender : "", contact : ""},
        onSubmit : (data)=>{
            axios.post(`${API}signup`, data).then(result=>{
                if(result.data.success){
                    navigate("/login");
                }
            })
        }
    });


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
                    <input type='text' name="email" onChange={handleChange}  className={'form-control ' + (errors.email && touched.email ? 'is-invalid' : '')} />
                    <small className='text-danger'>{ errors.email && touched.email ? errors.email : ''}</small>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' name="password" onChange={handleChange} className={'form-control ' + (errors.password && touched.password ? 'is-invalid' : '')}  />
                    <small className='text-danger'>{ errors.password && touched.password ? errors.password : ''}</small>
                </div>
                <div className='form-group'>
                    <label>Re-Password</label>
                    <input type='password' name="repass" onChange={handleChange} className={'form-control ' + (errors.repass && touched.repass ? 'is-invalid' : '')} />
                    <small className='text-danger'>{ errors.repass && touched.repass ? errors.repass : ''}</small>
                </div>
                <div className='form-group'>
                    <label>Address</label>
                    <textarea className={'form-control ' + (errors.address && touched.address ? 'is-invalid' : '')} name="address" onChange={handleChange} ></textarea>
                    <small className='text-danger'>{ errors.address && touched.address ? errors.address : ''}</small>
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <br />
                    Male <input type='radio' name='gender'  onChange={handleChange} value="male" />
                    Female <input type='radio' name='gender' onChange={handleChange} value="female" />
                    <br />
                    <small className='text-danger'>{ errors.gender && touched.gender ? errors.gender : ''}</small>
                </div>
                <div className='form-group'>
                    <label>Contact</label>
                    <input type='text' name="contact" onChange={handleChange} className={'form-control ' + (errors.contact && touched.contact ? 'is-invalid' : '')} />
                    <small className='text-danger'>{ errors.contact && touched.contact ? errors.contact : ''}</small>
                </div>
                <div className='form-group'>
                    <label>City</label>
                    <select className={'form-control ' + (errors.city && touched.city ? 'is-invalid' : '')} name="city" onChange={handleChange}>
                        <option>Select</option>
                        {
                            city.map(c=>{
                                return(
                                    <option>{c.name}</option>
                                )
                            })
                        }
                    </select>
                    <small className='text-danger'>{ errors.city && touched.city ? errors.city : ''}</small>
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
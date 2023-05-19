import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

let formSchema = Yup.object({
   fname : Yup.string().required("Insert Your First Name"),
   lname : Yup.string().required("Insert Your Last Name"),
   age : Yup.number("Age must be a number").required("Insert Your Age")
});

const Help = () => {

    let { handleChange, handleSubmit, errors, touched } = useFormik({
        validationSchema : formSchema,
        initialValues : { fname : "", lname : "", age :"" },
        onSubmit : (formdata)=>{
            console.log("*************", formdata)

        }
    });

  return (
    <div className="container my-5">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className='form-group'>
                    <label>First Name</label>
                    <input type='text' name='fname' onChange={handleChange} className={'form-control ' + (errors.fname && touched.fname ? 'is-invalid' : '')} />
                    <small className='text-danger'>{ errors.fname && touched.fname ? errors.fname : '' }</small>
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input type='text' name='lname' onChange={handleChange} className={'form-control ' + (errors.lname && touched.lname ? 'is-invalid' : '')} />
                    <small className='text-danger'>{ errors.lname && touched.lname ? errors.lname : '' }</small>
                </div>
                <div className='form-group'>
                    <label>Age</label>
                    <input type='text' name='age' onChange={handleChange} className={'form-control ' + (errors.age && touched.age ? 'is-invalid' : '')} />
                    <small className='text-danger'>{ errors.age && touched.age ? errors.age : '' }</small>
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>
                Save <i className='fa fa-user'></i>
                </button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Help

/*
    let [a, b] = [10, 20, 50]

    let { x } = test()


export default Demo;
export { a, b, c};



import Hello from 
import {a, b}


import * as test from 



*/
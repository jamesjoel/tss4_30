import React, {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import API from '../../Constants/ApiUrl'

let productSchema = Yup.object({
  title : Yup.string().required("Insert Product Title"),
  price : Yup.number().typeError("Insert Number Only").required("Insert Product Price"),
  detail : Yup.string().required("Insert Product Detail"),
  category : Yup.string().required("Select Product Category"),
  discount : Yup.number().typeError("Insert Numbers Only").required("Insert Product Discount"),
  quantity : Yup.number().typeError("Insert Number Only").required("Insert Product Quantity")
})

const Product = () => {
  let navigate = useNavigate();
  let file = useRef();
  let [allCate, setAllCate] = useState([]);
    
  useEffect(()=>{
    if(! localStorage.getItem('nimda')){
      navigate("/");
    }

    axios.get(`${API}category`).then(result=>{
      setAllCate(result.data);
      
    })
  },[])

  let {handleSubmit, handleChange, errors, touched} = useFormik({
    validationSchema : productSchema,
    initialValues : { title : "", price : "", detail : "", category : "", discount : "", quantity : "" },
    onSubmit : (formdata)=>{

      // console.log(file.current.files[0]);
      let image = file.current.files[0];
      let fm = new FormData();

      fm.append("image", image);
      fm.append("formdata", JSON.stringify(formdata));

      // console.log(formdata)
      axios.post(`${API}product`, fm).then(result=>{
        // console.log(result.data);
        navigate("/admin/product/list")
      })
    }
  })


  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4 className='text-center'>Add New Product</h4>
          <div className="form-group">
            <label htmlFor="">Title</label>
            <input type='text' name='title' onChange={handleChange} className='form-control' />
            <small className='text-danger'>
            {
              errors.title && touched.title ? errors.title : '' 
            }
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Price</label>
            <input type='text' name='price' onChange={handleChange} className='form-control' />
            <small className='text-danger'>
            {
              errors.price && touched.price ? errors.price : '' 
            }
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Product Image</label>
            <input type='file' ref={file}  className='form-control' />
            
          </div>
          <div className="form-group">
            <label htmlFor="">Detail</label>
            <textarea className='form-control' name='detail' onChange={handleChange}></textarea>
            <small className='text-danger'>
            {
              errors.detail && touched.detail ? errors.detail : '' 
            }
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Category</label>
            <select className='form-control' name='category' onChange={handleChange}>
              <option>Select</option>
              {
                allCate.map(x=>{
                  return(<option key={x._id}>{x.name}</option>)
                })
              }
            </select>
            <small className='text-danger'>
            {
              errors.category && touched.category ? errors.category : '' 
            }
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Discount</label>
            <div className='input-group'>
                <input type='text' className='form-control' name='discount' onChange={handleChange}/>
                <div className='input-group-append'>
                  <span className='input-group-text'>%</span>
                </div>
            </div>
            <small className='text-danger'>
            {
              errors.discount && touched.discount ? errors.discount : '' 
            }
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Quantity</label>
            <input type='text' className='form-control' name='quantity' onChange={handleChange}/>
            <small className='text-danger'>
            {
              errors.quantity && touched.quantity ? errors.quantity : '' 
            }
            </small>
          </div>
          <br />
          <button type='submit' className='btn btn-primary'>Add</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Product
/*

[
  {
    "name" : "Rohit",
    "age" : 25
  }
]


*/
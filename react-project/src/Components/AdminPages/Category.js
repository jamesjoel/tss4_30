import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import API from '../../Constants/ApiUrl'
import axios from 'axios'
const Category = () => {

  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem('nimda')){
      navigate("/");
    }
  },[])

  let {handleChange, handleSubmit} = useFormik({
    initialValues : { name : ""},
    onSubmit : (formdata)=>{
      axios.post(`${API}category`, formdata).then(result=>{
        navigate("/admin/category/list")
      })
    }
  })


  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4 className='text-center'>Add New Category</h4>
          <form onSubmit={handleSubmit}>
            <label>Category Name</label>
            <input type='text' name='name' onChange={handleChange} className='form-control' />
            <br />
            <br />
            <button type='submit' className='btn btn-success'>Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Category
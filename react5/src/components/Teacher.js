import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import { AddTeacher, GetAll } from '../redux/TeacherSlice'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

const Teacher = () => {

    // let [allTeacher, setAllTeacher] = useState(useSelector(x=>x.TeacherSlice));

    let disp = useDispatch();
    let { handleSubmit, handleChange } = useFormik({
        initialValues : {name : "", salary : ""},
        onSubmit : (formdata)=>{
            // axios.post("http://localhost:3001/teacher", formdata).then(response=>{

                disp(AddTeacher(formdata));
            // })
        }
    });
    useEffect(()=>{
        disp(GetAll());
    }, [])    

    let allTeacher = useSelector(x=>x.TeacherSlice);



  return (
    <div className="container my-4">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type='text' name='name' onChange={handleChange} className='form-control'/>
                </div>
                <div className="form-group">
                    <label>Salary</label>
                    <input type='text' name='salary' onChange={handleChange}  className='form-control'/>
                </div>
                <br />
                <input type='submit' value="Add" className='btn btn-primary' />
            </div>
        </div>
        </form>

        <div className="row">
            <div className="col-md-12">
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Salary</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            allTeacher.map((t, n)=>{
                                return(
                                    <tr>
                                        <td>{n+1}</td>
                                        <td>{t.name}</td>
                                        <td>{t.salary}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Teacher
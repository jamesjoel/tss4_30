import React, {useEffect} from 'react'
import {useFormik} from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { GetAll, AddEmp } from '../redux/EmployeeSlice'

const Employee = () => {
    let disp = useDispatch();
    useEffect(()=>{
        disp(GetAll());
    }, [])

    let { handleSubmit, handleChange }= useFormik({
        initialValues : {name : ""},
        onSubmit : (formdata)=>{
            disp(AddEmp(formdata));
        }
    })


    let data = useSelector(x=>x.EmployeeSlice);
  return (
    <>
    <div className="container my-4">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type='text' name='name' onChange={handleChange} className='form-control' />
                </div>
                <br />
                <input type='submit' value="Add" className='btn btn-success' />
            </div>
        </div>
        </form>

        <div className="row">
            <div className="col-md-8 offset-md-2">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                        </tr>

                    </thead>

                    <tbody>
                        {
                            data.map((x, n)=>{
                                return(
                                    <tr>

                                        <td>{n+1}</td>
                                        <td>{x.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    </div>
    </>
  )
}

export default Employee
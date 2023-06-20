import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { useFormik } from 'formik'

const API = "http://localhost:3001/student";
const Student = () => {
    let btn = useRef();
    let [allStu, setAllStu] = useState([]);
    let [stu, setStu] = useState();
    useEffect(()=>{
        axios.get(API).then(response=>{
            setAllStu(response.data);
        })
    }, [])

    let { handleChange, handleSubmit, values } = useFormik({
        initialValues : { name : stu ? stu.name : "", age : stu ? stu.age : ""},
        enableReinitialize : true,
        onSubmit : (formdata)=>{
            if(stu){
                axios.put(`${API}/${stu.id}`, formdata).then(response=>{

                    
                    setAllStu(data=>{
                        return data.map(x=>{
                            if(x.id == response.data.id){
                                return response.data;
                            }else{
                                return x;
                            }
                        })
                    })
                    
                    btn.current.click();
                })
            }else{

                axios.post(API, formdata).then(response=>{
                    setAllStu((data)=> [...data, response.data]);
                    // console.log(response.data)
                    btn.current.click();
                })
            }
        }
    })
    
    let askDelete = (obj)=>{
        // console.log(obj);
        setStu(obj);
    }

    let confDelete = ()=>{
        axios.delete(`${API}/${stu.id}`).then(response=>{
            setAllStu((data)=>{
                return data.filter(x=>x.id != stu.id);
            })
        })
    }

    let askEdit = (obj)=>{
        setStu(obj);
    }
  return (
    <>
    <div className="container my-4">
        
        <div className="row">
            <div className='col-md-12'>
                <h2>List of All Student</h2>
                <button className='btn btn-info' data-toggle="modal" data-target="#addModal">Add New Student</button>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            allStu.map((stu, index)=>{
                                return(
                                    <tr key={stu.id}>
                                        <td>{index+1}</td>
                                        <td>{stu.name}</td>
                                        <td>{stu.age}</td>
                                        <td><button onClick={()=>askDelete(stu)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
                                        <td><button onClick={()=>askEdit(stu)} data-toggle="modal" data-target="#addModal" className='btn btn-primary btn-sm'>Edit</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>

    <div id='addModal' className='modal fade'>
        <div className="modal-dialog">
        <form onSubmit={handleSubmit}>
            <div className="modal-content">
                <div className="modal-header">
                    <h4>{stu ? 'Update' : 'Add New'} Student</h4>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input value={values.name} type='text' name='name' onChange={handleChange} className='form-control' />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input value={values.age} type='text' name='age' onChange={handleChange} className='form-control' />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type='button' className='btn btn-danger' ref={btn} data-dismiss="modal">Close</button>
                    <button type='submit' className='btn btn-success'>{stu ? 'Update' : 'Save' }</button>
                </div>
            </div>
        </form>
        </div>
    </div>                    

    <div id='delModal' className='modal fade'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4>Delete Student</h4>
                </div>
                <div className='modal-body'>
                    <p>Are You Sure want to delete <b>{stu ? stu.name : ''}</b></p>
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-danger' data-dismiss="modal">Close</button>
                    <button className='btn btn-warning' onClick={confDelete} data-dismiss="modal">Delete</button>
                </div>
            </div>
        </div>
    </div>                   
    </>
  )
}

export default Student
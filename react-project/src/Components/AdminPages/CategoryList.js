import React, {useEffect, useState, useRef} from 'react'
import axios, { all } from 'axios'
import API from '../../Constants/ApiUrl';
const CategoryList = () => {

    let closeBtn = useRef();
    let [allCate, setAllCate] = useState([]);
    let [cate, setCate] = useState();
    useEffect(()=>{
        axios.get(`${API}category`).then(result=>{
            // console.log(result);
            setAllCate(result.data);

            // console.log(allCate);
        })
    }, [])


    let askDelete = (obj)=>{
        setCate(obj);
    }

    let deleteCate = ()=>{
        
        axios.delete(`${API}category/${cate._id}`).then(result=>{
            setAllCate(()=>{
                closeBtn.current.click();
                return allCate.filter(x=> x != cate)

            });
        })
    }

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    {
                        allCate.length > 0 ? (
                            <table className="table table-dark my-5">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Category Name</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCate.map((x, n)=>{
                                    return(
                                        <tr key={n}>
                                            <td>{n+1}</td>
                                            <td>{x.name}</td>
                                            <td><button onClick={()=>askDelete(x)} data-toggle="modal" data-target="#delModal" className='btn btn-sm btn-danger'>Delete</button></td>
                                            {/* <td><button onClick={deleteCate()} className='btn btn-sm btn-danger'>Delete</button></td> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                        ) : ''
                    }
                
                    
                </div>
            </div>
        </div>


        <div className='modal fade' id='delModal'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className='modal-header'>
                        <h3>Delete Category</h3>
                    </div>
                    <div className='modal-body'>
                        <p>Are You sure want to delete this categroy ?</p>
                    </div>
                    <div className='modal-footer'>
                        <button className='btn btn-info' ref={closeBtn} data-dismiss="modal">Close</button>
                        <button className='btn btn-danger' onClick={deleteCate}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryList

/*
    let x = "black";
    let arr = ["red", "green", "blue", "yellow", "pink", "black", "white"];

    let n = arr.indexOf(x);

    arr.splice(n, 1);

    arr.push("gray"); // add at the end
    arr.unshift("gary"); // add at the beg

    arr[3] = "gray"; // 

*/


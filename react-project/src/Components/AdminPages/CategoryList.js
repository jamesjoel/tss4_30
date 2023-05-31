import React, {useEffect, useState} from 'react'
import axios, { all } from 'axios'
import API from '../../Constants/ApiUrl';
const CategoryList = () => {

    let [allCate, setAllCate] = useState([]);
    useEffect(()=>{
        axios.get(`${API}category`).then(result=>{
            // console.log(result);
            setAllCate(result.data);

            // console.log(allCate);
        })
    }, [])



    let deleteCate = (obj)=>{
        
        axios.delete(`${API}category/${obj._id}`).then(result=>{
            setAllCate(()=>{
                return allCate.filter(x=> x != obj)
                
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
                                            <td><button onClick={()=>deleteCate(x)} className='btn btn-sm btn-danger'>Delete</button></td>
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


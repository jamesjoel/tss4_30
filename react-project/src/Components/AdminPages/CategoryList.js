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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCate.map((x, n)=>{
                                    return(
                                        <tr key={n}>
                                            <td>{n+1}</td>
                                            <td>{x.name}</td>
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
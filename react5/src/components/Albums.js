import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';


const Albums = () => {
    let [allAlbum, setAllAlbum] = useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then(response=>{
            console.log(response.data);
            setAllAlbum(response.data.products);
        })
    }, [])
    
    
    let del = (obj)=>{
       
        axios.delete("https://dummyjson.com/products/"+obj.id).then(response=>{
            console.log(response.data);
        })
    }

  return (
    <>
        <div className="container my-5">
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        
                        <th>Title</th>
                        <th>Delete</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        allAlbum.map(al=>{
                            return(
                                <tr>
                                    <td>{al.id}</td>
                                    
                                    <td>{al.title}</td>
                                    <td><button onClick={()=>del(al)} className='btn btn-danger'>Del</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Albums
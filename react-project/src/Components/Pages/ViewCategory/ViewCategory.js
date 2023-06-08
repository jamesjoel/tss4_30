import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import ProductBox from '../../Shared/ProductBox'
import axios from 'axios';
import API from '../../../Constants/ApiUrl'

const ViewCategory = () => {

    let [allPro, setAllPro] = useState([]);
    let param = useParams();
    let category = param.cate;
    useEffect(()=>{
        axios.get(`${API}product/${category}`).then(result=>{
            setAllPro(result.data);
          })
    },[param])

   
    return (
        <>
        <div className="popular-items section-padding30">
                <div className="container">
                    
    
    
                    
                        <h3 className='text-center'>All <span className='badge badge-dark'>{category}</span> Product</h3>
                    <div className="row">
                        {
                            allPro.map(x=>{
                                return(
                                    
                                    <ProductBox key={x._id} product={x}/>
                                )
                            })
                        }
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="room-btn pt-70">
                            <a href="catagori.html" className="btn view-btn1">View More Products</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default ViewCategory
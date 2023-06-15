import React, { useEffect, useState } from 'react'
import ProductBox from '../../Shared/ProductBox'
import H1 from '../../Shared/H1'
import axios from 'axios'
import API from '../../../Constants/ApiUrl'
import Hello from '../../Shared/Hello'

const Home = () => {
    let [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get(`${API}product`).then(result=>{
            setProduct(result.data);
          })
    }, [])

  return (
    <>
    <div className="popular-items section-padding30">
            <div className="container">
                


                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                        <div className="section-tittle mb-70 text-center">
                            <H1 text="The Stepping Stone"/>

                            
                            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        product.map(x=>{
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

export default Home


/*

    for
    while
    do...while

    array.forEach((x, n)=>{

    })

    array.map((x, n)=>{

    })




*/
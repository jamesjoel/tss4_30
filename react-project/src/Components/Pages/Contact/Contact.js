import React, {useState} from 'react'
import axios from 'axios'


const Contact = () => {

    let [product, setProduct] = useState([]);
    let [showPreloader, setShowPreloader] = useState(false);

    let show = ()=>{
        setShowPreloader(true);
        axios.get("https://fakestoreapi.com/products").then((result)=>{
            setProduct(result.data);
            setShowPreloader(false);
        })
    }
  return (
    <>

        
        <div className="popular-items section-padding30">
            <div className="container">
                <button onClick={show} className='btn btn-sm btn-info'>Show { showPreloader ? (<img src='/assets/img/pre.gif' style={{height : "30px"}}/>) : ''}</button>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            product.map((pro, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{ index+1 }</td>
                                        <td>{pro.title}</td>
                                        <td>{pro.price}</td>
                                        <td><img src={pro.image} height="100" width="100"/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Contact
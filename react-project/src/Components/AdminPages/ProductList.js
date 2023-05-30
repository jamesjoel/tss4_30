import React, {useState, useEffect} from 'react'
import axios from 'axios'
import API from '../../Constants/ApiUrl'
import { useNavigate } from 'react-router-dom'
const ProductList = () => {

  let navigate = useNavigate();
  let [product, setProduct] = useState([]);
  useEffect(()=>{
    if(! localStorage.getItem('nimda')){
      navigate("/");
    }

    axios.get(`${API}product`).then(result=>{
      setProduct(result.data);
    })
  });
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-dark table-hover table-striped">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                product.map((pro, n)=>{
                  return(
                    <tr key={pro._id}>
                      <td>{n+1}</td>
                      <td>{pro.title}</td>
                      <td>{pro.price}</td>
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

export default ProductList
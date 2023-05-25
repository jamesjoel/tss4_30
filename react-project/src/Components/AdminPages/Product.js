import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem('nimda')){
      navigate("/");
    }
  },[])
  return (
    <div>Product</div>
  )
}

export default Product
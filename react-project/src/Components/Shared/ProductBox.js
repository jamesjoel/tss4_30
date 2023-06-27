import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/CartSlice'
import { APIPath } from '../../Constants/ApiUrl'

const ProductBox = (props) => {
    let disp = useDispatch();
    let addToCart = (a)=>{
        disp(add(a));
    }

  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="single-popular-items mb-50 text-center">
                        <div className="popular-img">
                            <img style={{height : "250px"}} src={ `${APIPath}upload-images/${props.product.image}`} alt="" />
                            <div className="img-cap">
                                <span onClick={()=>addToCart(props.product)}>Add To Cart</span>
                            </div>
                            <div className="favorit-items">
                                <span className='badge badge-danger'>{props.product.discount}%</span>
                            </div>
                        </div>
                        <div className="popular-caption">
                            <h3><a href="product_details.html">{props.product.title}</a></h3>
                            <span style={{textDecoration : "line-through"}}>$ {props.product.price}</span>
                            <span>$ {
                                    props.product.price - (props.product.price*props.product.discount/100)
                                }</span>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default ProductBox
import React from 'react'

const ProductBox = (props) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="single-popular-items mb-50 text-center">
                        <div className="popular-img">
                            <img style={{height : "250px"}} src={'http://localhost:3001/upload-images/'+props.product.image} alt="" />
                            <div className="img-cap">
                                <span>Detail</span>
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
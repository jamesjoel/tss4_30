import React from 'react'

const ProductBox = (props) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="single-popular-items mb-50 text-center">
                        <div className="popular-img">
                            <img src="assets/img/gallery/card1.png" alt="" />
                            <div className="img-cap">
                                <span>Add to cart</span>
                            </div>
                            <div className="favorit-items">
                                <span className="flaticon-heart"></span>
                            </div>
                        </div>
                        <div className="popular-caption">
                            <h3><a href="product_details.html">{props.product.title}</a></h3>
                            <span>$ {props.product.price}</span>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default ProductBox
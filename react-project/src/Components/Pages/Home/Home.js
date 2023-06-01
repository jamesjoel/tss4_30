import React from 'react'
import ProductBox from '../../Shared/ProductBox'
import H1 from '../../Shared/H1'

const Home = () => {

  let product = [
    {
        path : "assets/img/gallery/popular1.png",
        title : "Sony",
        price : 1250.00
    },
    {
        path : "assets/img/gallery/popular2.png",
        title : "I-Phone",
        price : 50000.00
    },
    {
        path : "assets/img/gallery/popular3.png",
        title : "Samsung",
        price : 47000.00
    },
    {
        path : "assets/img/gallery/popular4.png",
        title : "HTC",
        price : 30000.00
    }
  ]


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
                                
                                <ProductBox product={x}/>
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
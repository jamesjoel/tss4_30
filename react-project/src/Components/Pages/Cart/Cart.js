import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeAll, removeOne } from '../../../redux/CartSlice'

const Cart = () => {
    let disp = useDispatch();
    let cart = useSelector(x=>x.CartSlice);
    let totalPrice = 0;
    let totalDiscount = 0;

    let clearCart = ()=>{
        disp(removeAll());
    }

    let deleteOne = (obj)=>{
        disp(removeOne(obj));
    }
  return (
    <div className="container my-5">
        {
            cart.length == 0 ? <div className='alert alert-info'>Not Found</div> :
        
        <div className="row">
                
            <div className="col-md-10 offset-md-1 border border-dark">
                    {
                        cart.map(x=>{
                            let y = (x.price*x.discount/100);
                            totalDiscount += y;
                            let disPrice = x.price - y;
                            totalPrice += x.price;
                        return( 
                        <>
                            <div key={x._id} className="row border boder-bottom">
                                <div className="col-md-10">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                                <img src={'http://localhost:3001/upload-images/'+x.image} style={{width : "200px", height : "200px"}} />
                                        </div>
                                        <div className='col-md-8'>
                                            <h4>Title : {x.title}</h4>
                                            <h5>Price : {x.price}</h5>
                                            <h5>Discount : {x.discount}%</h5>
                                            
                                            <button onClick={()=>deleteOne(x)} className='btn btn-info'>X</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <h5>{disPrice}</h5>
                                </div>
                            </div>
                        </>);
                        })
                    }
                
            </div>
            <div className='col-md-10 offset-md-1'>
            <br />
            <h5 style={{textAlign : "right"}}>
                Price : {totalPrice} <br />
                Total Discount : {totalDiscount} <br />
                Final Price : {totalPrice-totalDiscount}
            </h5>
            
            <button className='btn btn-info' onClick={clearCart}>Clear Cart</button>
                <button className='btn btn-primary'>Chekout</button>
            </div>
        </div>
        }
    </div>
  )
}

export default Cart
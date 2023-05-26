import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem('nimda')){
      navigate("/");
    }
  },[])
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card m-3'>
              <div className='card-body bg-info'>
                <h4>Total Products</h4>
                <h5>540</h5>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card m-3'>
              <div className='card-body bg-info'>
                <h4>Total Category</h4>
                <h5>12</h5>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card m-3'>
              <div className='card-body bg-info'>
                <h4>Total Users</h4>
                <h5>1800</h5>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card m-3'>
              <div className='card-body bg-info'>
                <h4>Total Orderes</h4>
                <h5>Pending : 8</h5>
                <h5>Plced : 340</h5>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card m-3'>
              <div className='card-body bg-info'>
                <h4>Online Users</h4>
                <h5>23</h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
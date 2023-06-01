import React, {useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  let [data, setData] = useState([
    {
      id : 1,
      name : "Rohit"
    },
    {
      id : 2,
      name : "amar"
    },
    {
      id : 3,
      name : "vijay"
    }
  ])

  let navigate = useNavigate();
  let a = useRef();
  useEffect(()=>{
    if(! localStorage.getItem('nimda')){
      navigate("/");
    }
  },[])

  let demo1 = ()=>{
    console.log("****************");
  }
  let demo2 = ()=>{
    a.current.click();

  }

  let delStu = (obj)=>{
    setData(()=>{
      return (
        data.filter(val=>val != obj)
      )
    })
  }
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
        <div className="row">
          <div className="col-md-12">
            
            {/* <button onClick={demo1} ref={a} className='btn btn-info'>TEST</button>
            <button onClick={demo2} className='btn btn-dark'>OK</button> */}

            <table>
              <tbody>
                {
                  data.map((x, n)=>{
                    return(
                      <tr>
                        <td>{n+1}</td>
                        <td>{x.name}</td>
                        <td><button onClick={()=>delStu(x)}>delete</button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
import React, {useState} from 'react'
import Shipping from '../../Shared/Shipping'
import axios from 'axios';

const About = () => {

  let [data, setData] = useState([]);

  let getData = ()=>{
    axios.get("http://localhost:3001/api/demo").then((result)=>{
      console.log(result.data);
      setData(result.data);
    })
  }
  return (
    <>
      <div className="popular-items section-padding30">
            <div className="container">
              
              <button onClick={getData} className='btn btn-primary'>OK</button>
              {
                  data.length > 0 ?(


              <table className='table table-dark'>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
                </tr>
                </thead>
                <tbody>
              {
                data.map((x, n)=>{
                    return(
                      <tr key={n}>
                        <td>{x.name}</td>
                        <td>{x.age}</td>
                        <td>{x.city}</td>
                      </tr>
                    )
                })
              }
              </tbody>
              </table>
                  ) : (
                    <div className='alert alert-info'>No Record Found </div>
                  ) }

            </div>
      </div>

      <Shipping />
    </>
  )
}

export default About
/*

  { data.length > 0 ? (<h1>hello</h1>) : '' }


*/

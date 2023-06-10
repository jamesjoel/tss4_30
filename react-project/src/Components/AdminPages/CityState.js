import React, {useState, useEffect} from 'react'
import axios from 'axios'
const CityState = () => {
    let [state, setState] = useState([]);
    let [city, setCity] = useState([]);
    useEffect(()=>{ 
        axios.get("http://localhost:3001/api/city/statecity").then(result=>{
            setState(result.data);
        })
    }, [])

    let getCity = (x)=>{
        axios.get(`http://localhost:3001/api/city/statecity/${x}`).then(result=>{
            setCity(result.data);
        })
    }
  return (
    <>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="form-group">
                    <label htmlFor="">State</label>
                    <select className='form-control' onChange={(e)=>getCity(e.target.value)}>
                        <option>Select</option>
                        {
                            state.map(x=><option key={x}>{x}</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">City</label>
                    <select className='form-control'>
                        <option>Select State First</option>
                        {
                            city.map(x=><option key={x.id}>{x.name}</option>)
                        }
                    </select>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CityState
import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API from '../../../Constants/ApiUrl'

const Signup = () => {

    let navigate = useNavigate();
    let [user, setUser] = useState({
        name : "",
        email : "",
        password : "",
        address : "",
        city : "",
        repass : "",
        gender : "",
        contact : ""
    });
   
    let save = ()=>{
       axios.post(`${API}signup`, user).then(result=>{
        if(result.data.success){
               // console.log("success -----------")

               navigate("/login");
        }
       })
    }

  return (
    <>
   
    <div className='container my-4' style={{ minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4>Registration</h4>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' value={user.name} onChange={(e)=>setUser({...user, name : e.target.value})}  className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='text' value={user.email} onChange={(e)=>setUser({...user, email : e.target.value})} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' value={user.password} onChange={(e)=>setUser({...user, password : e.target.value})} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Re-Password</label>
                    <input type='password' value={user.repass} onChange={(e)=>setUser({...user, repass : e.target.value})} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Address</label>
                    <textarea className='form-control' value={user.address} onChange={(e)=>setUser({...user, address : e.target.value})}></textarea>
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <br />
                    Male <input type='radio' name='gender' value="male" onChange={(e)=>setUser({...user, gender : e.target.value})}/>
                    Female <input type='radio' name='gender' value="female" onChange={(e)=>setUser({...user, gender : e.target.value})}/>
                </div>
                <div className='form-group'>
                    <label>Contact</label>
                    <input type='text' value={user.contact} onChange={(e)=>setUser({...user, contact : e.target.value})} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>City</label>
                    <select className='form-control' value={user.city} onChange={(e)=>setUser({...user, city : e.target.value})}>
                        <option>Select</option>
                        <option>Indore</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                    </select>
                </div>
                <br />
                <input type='submit' onClick={save} value="Signup" className='btn btn-primary' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup
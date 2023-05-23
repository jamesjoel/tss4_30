import React, {useEffect, useState} from 'react'
import axios from 'axios'
import API from '../../../Constants/ApiUrl'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    let navigate = useNavigate();
    let [user, setUser] = useState({_id : ""});
    useEffect(()=>{
        if(! localStorage.getItem("token"))
        {
            navigate("/login");
        }
        else{

            let token = localStorage.getItem("token");
            // localhost:3001/api/profile/sdfg sdfgsergsdfgserg
            axios.get(`${API}profile/${token}`).then(result=>{
                setUser(result.data);
            })
        }


    }, [])


  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                {
                    user._id ? (
                        <table className="table table-info table-bordered">
                        <tbody>
    
                        
                        <tr>
                            <td>Full Name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{user.contact}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{user.address}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{user.gender}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{user.city}</td>
                        </tr>
                        </tbody>
                        
                    </table>
                    ) :""
                }
                
            </div>
        </div>
    </div>
  )
}

export default Profile
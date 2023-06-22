import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ReadMail = () => {
    let [mail, setMail] = useState();
    let param = useParams();
    let id = param.id;

    useEffect(()=>{
        axios.get("http://localhost:3001/inbox/"+id).then(res=>{
            let data = res.data;
            data.readStatus = 1;
            axios.put("http://localhost:3001/inbox/"+id, data);
            setMail(data);
            
        })

        
    }, [])

  return (
    <>
        <div style={{width : "90%", minHeight : "500px", backgroundColor : "#fff", marginTop : "50px"}}>
            {
                mail ? <div>

                <h4>From : {mail.sender}</h4>
                <h4>Subject : {mail.subject}</h4>
                <h4>Date : {mail.date}</h4>
                <p><b>Message : </b>{mail.body}</p>
            </div> : <p>No Data Found</p>
            }
            
        </div>
    </>
  )
}

export default ReadMail
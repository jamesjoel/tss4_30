import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMail, readMailStatus } from '../redux/InboxSlice'
import { useNavigate } from 'react-router-dom'


const Inbox = () => {
    let disp = useDispatch();
    let navi = useNavigate();

    useEffect(()=>{
        disp(GetMail());
    }, [])

    let data = useSelector(state=>state.InboxSlice);

let read = (obj)=>{
    disp(readMailStatus(obj.id));
    navi("/inbox/"+obj.id);
}
  return (
    <>
        <h3>Your Inbox</h3>
        <table className="table table-bordered table-hover table-striped">
            <tbody>
                {
                    data.map(mail=><tr key={mail.id} onClick={()=>read(mail)} className={mail.readStatus==0 ? 'font-weight-bold' : ''} style={{cursor : "pointer"}}>
                        <td>{mail.sender}</td>
                        <td>{mail.subject}</td>
                        <td>{mail.date}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
    
  )
}

export default Inbox
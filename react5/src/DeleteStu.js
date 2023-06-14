import React from 'react'
import { del, rev } from './StudentSlice'
import { useDispatch } from 'react-redux'

const DeleteStu = () => {
    let disp = useDispatch();
    let remove = ()=>{
        disp(del());
    }
    let hello = ()=>{
        disp(rev());
    }
  return (
    <>
    <div style={{width : "200px", float : "right", height : "300px", backgroundColor : "red"}}>
        <h3>Delete</h3>
        <button onClick={remove}>Delete Last Student</button>
        <br />
        <button onClick={hello}>Reverse</button>
    </div>
    </>
  )
}

export default DeleteStu
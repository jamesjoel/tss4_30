import React from 'react'
import { NavLink } from 'react-router-dom'

const LiTag = (props) => {
  return (
    <>
        <li key={props.list._id}><NavLink to=""> {props.list.name}</NavLink></li>
    </>
  )
}

export default LiTag
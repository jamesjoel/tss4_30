import React from 'react'
import { NavLink } from 'react-router-dom'

const LiTag = (props) => {
  return (
    <>
        <NavLink className="dropdown-item" key={props.list._id} to={'/category/'+props.list.name}> {props.list.name}</NavLink>
    </>
  )
}

export default LiTag
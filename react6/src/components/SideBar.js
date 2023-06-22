import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SideBar = () => {
    let data = useSelector(state=>state.InboxSlice);
	let total = 0;
	data.forEach(x=>{
		if(x.readStatus == 0){
			total++;
		}
	})

  return (
    <div className="sidebar">
			
			<ul>
				<li><NavLink href="#"><i className="fas fa-home"></i>Dashboard</NavLink></li>
				<li className="notification1"><NavLink href="#"><i className="fas fa-calendar-week"></i>Inbox</NavLink><span className="number1">({total})</span></li>
			</ul>
		
		</div>
  )
}

export default SideBar
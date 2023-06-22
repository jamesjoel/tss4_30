import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Inbox from './pages/Inbox'
import SideBar from './components/SideBar'
import ReadMail from './pages/ReadMail'
const App = () => {
  return (
    <>
    <div className="wrapper d-flex">
		<SideBar />
		<div style={{marginLeft : "300px", width : "100%"}}>
			<Routes>
				{/* <Route path='' element={<Inbox />} /> */}
				<Route path='/inbox' element={<Inbox />} />
				<Route path='/inbox/:id' element={<ReadMail />} />
			</Routes>
		</div>
	</div>
    </>
  )
}

export default App
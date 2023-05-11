import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Help from './Help';
const App = () => {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="help" element={<Help />} />
      </Routes>

     

      
    </>
  )
}

export default App
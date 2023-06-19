import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Albums from './components/Albums'
import Header from './shared/Header'
const App2 = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='albums' element={<Albums />} />
        </Routes>


    </>
  )
}

export default App2
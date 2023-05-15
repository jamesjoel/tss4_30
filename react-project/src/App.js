import React from 'react'
import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'
import MainRoutes from './Routes/MainRoutes'


const App = () => {
  return (
    <>
      <Header />
      <main>
          <MainRoutes />  
      </main>
      <Footer />
    </>
  )
}

export default App
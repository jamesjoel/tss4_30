import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import UserLayout from './components/UserLayout'

import AdminLayout from './components/AdminLayout'
import Dashboard from './components/Dashboard'
import Product from './components/Product'

let App = ()=>{
  return(
    <Routes>
      <Route path='' element={<UserLayout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
      <Route path='admin' element={<AdminLayout />}>
        <Route path='' element={<Dashboard />} />
        <Route path='product' element={<Product />} />
        {/* :3000/admin/product */}
      </Route>
    </Routes>
  )
}

export default App;
/*

  studen : .com/
            .com/result
            .com/fee
            .com/about


  teacher : .com/teacher  --- main
            .com/teacher/salary
            .com/teacher/atten


  other : .com/other
          .com/other/info
          .com/other/salary




          <Routes>
              <Route path="" ele={<StuLayout />}>
                <Route path="" ele="<Home />" />
                <Route path="result" ele="<Result />" />
                <Route path="about" ele="<About />" />
                <Route path="fee" ele="<Fee />" />
              </Route>

              <Route path="teacher" ele=<TeachLayout> />
                <Route path="" ele=<Main />
                <Route path="salary" ele=<Salary />
              </Route>
              
              <Route>
              </Route>



          </Routes>




*/
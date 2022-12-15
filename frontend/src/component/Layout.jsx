import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from '../pages/DashboardHome';



const Layout = () => {
    return (
      <React.Fragment>
        <Routes>
          <Route path='/' element={<DashboardHome />} />
         
        </Routes>
     </React.Fragment>
  )
}

export default Layout







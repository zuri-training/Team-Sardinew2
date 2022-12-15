
import React from 'react';
import './dashboard.css';
import Sidebar from '../component/Sidebar';

import Layout from '../component/Layout';



const Dashboard = () => {
  

 
  return (
    <div>
      <section id="dashboard">
        <div className="row">
          <div className="col-3 section-left">
            <Sidebar />
          </div>
          <div className="col-8 right-section">
           <Layout />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard




















// import React from 'react'

// const Dashboard = () => {
//     const navigate = useNavigate()
//     const createForm = () => {
//         const id = uuid()
//         console.log(id)
//         navigate("/form/" + id)
//     }
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard
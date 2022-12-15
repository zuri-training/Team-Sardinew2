import React from 'react'
import { NavLink } from 'react-router-dom';
import vector5 from "../assets/images/Vector5.png";
import feedbacker from "../assets/images/feedbacker.png";


import { sidebarData } from '../data/sidebarDate';

const Sidebar = () => {
  

  return (
    <React.Fragment>
      <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
              <section className="section-left fixed">
               <h1 className='mb-5'> <span><img src={feedbacker} className="img-feeder" alt='...' /></span> FEEDBACKER</h1>
          
          <div className="container left-div">
            {
              sidebarData.map((item, index) => {
                return (
                  <div key={index} >
                    <NavLink to={item.path} className='flex  mb-4 nav-link'>
                      <span>{item.icon }</span>
                      <span>{item.title }</span>
                    </NavLink>
                  </div>
                )
              })
            }
           </div>
                <div className="container left-div">
                  <button className="btn btn-white"><img src={vector5} className="img-feeder" alt='...' />Log Out</button>
                </div>


              </section>
            </div>
      </React.Fragment>
  )
}

export default Sidebar
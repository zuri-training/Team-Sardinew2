
import React from 'react';
import './dashboard.css';
import uuid from 'react-uuid';
import { Link } from "react-router-dom";
import feedbacker from "../assets/images/feedbacker.png";
import ellipse2 from "../assets/images/Ellipse2.png";
import formQuestion from "../assets/images/Form-question.png";
import vector from "../assets/images/Vector.png";
import vector1 from "../assets/images/Vector1.png";
import vector2 from "../assets/images/Vector2.png";
import vector3 from "../assets/images/Vector3.png";
import vector4 from "../assets/images/vector4.png";
import vector5 from "../assets/images/Vector5.png";


const Dashboard = () => {
  

  const id = uuid()
 
  return (
    <div>
      <section id="dashboard">
        <div className="row">
          <div className="col-4 section-left">
            <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
              <section className="section-left fixed">
                <div className="container left-div">
                  <a className="navbar-brand nav-headline" href="/#"><img src={feedbacker} className="img-feeder" alt='...' />Feedbacker</a>
                </div>
                <div className="container left-div">
                  <a className="navbar-brand" href="/#"><img src={vector3} className="img-feeder" alt='...' />Dashboard</a>
                </div>
                <div className="container left-div">
                  <Link to={`/form/${id}`} className="navbar-brand" href="/#"><img src={vector1} className=" img-feeder" alt='...' />Create Form</Link>
                </div>
                {/* <a className="navbar-brand" href="/#"><img src={vector1} className=" img-feeder" alt='...' />Create Form</a> */}
                <div className="dropdown">
                  <a className="navbar-brand" href="/#"><img src={vector4} className=" img-feeder" alt='...' /></a>

                  <select id="dropdown" name="referrer">
                    <option value="">Overview</option>
                    <option value="1">Summary</option>
                    <option value="2">Analytics</option>
                    <option value="3">Individual Response</option>
                    <option value="4">Deleted Response</option>
                  </select>

                </div>
                <div className="container left-div">
                  <a className="navbar-brand" href="/#"><img src={vector} className="img-feeder" alt='...' />Settings</a>
                </div>
                <div className="container left-div">
                  <button className="btn btn-white"><img src={vector5} className="img-feeder" alt='...' />Log Out</button>
                </div>


              </section>
            </div>
          </div>
          <div className="col-8 right-section">
            <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
              <section className="input-top">
                <div className="container">
                  <div className="row right-section">
                    <div className="col-10 right-section">
                      <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      </form>
                    </div>
                    <div className="col-1">
                      <a className="navbar-brand" href="/#"><img src={vector2} className="img-feeder" alt='...' /></a>
                    </div>
                    <div className="col-1 right-section">
                      <a className="navbar-brand" href="/#"><img src={ellipse2} className="img-feeder" alt='...' /></a>
                    </div>
                  </div>
                </div>
              </section>
              <section className="">
                <div className="container card-container right-section">
                  <label className="card-headline">Create a New Form</label>
                  <div className="row right-section">
                    <div className="col-md-4">
                      <div className="card text-card">
                        <div className="card-body">
                          <p ><Link to={`/form/${id}`}  className="plus-text"> +</Link></p>
                        </div>
                      </div>
                      <label>Blank</label>
                    </div>
                    <div className="col-md-4">
                      <div className="card text-card">
                        <div className="card-body">

                        </div>
                      </div>
                      <label>Assessment</label>
                    </div>
                    <div className="col-md-4">
                      <div className="card text-card">
                        <div className="card-body">
                          <img src={formQuestion} className="img-fluid" alt="..." />
                        </div>
                      </div>
                      <label>Customer Feedback</label>
                    </div>
                  </div>
                </div>
              </section>
              <section className="">
                <div className="container card-container right-section">
                  <label className="card-headline">Recently Created Forms</label>
                  <div className="row right-section">
                    <div className="col-md-4">
                      <div className="card text-card">
                        <div className="card-body">

                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card text-card">
                        <div className="card-body">

                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card text-card">
                        <div className="card-body">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="">
                <div className="container card-container right-section">
                  <label className="card-headline">Templates</label>
                  <div className="row right-section">
                    <div className="col-md-4">
                      <div className="card text-card">
                        <div className="card-body">

                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card text-card">
                        <div className="card-body">

                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card text-card">
                        <div className="card-body">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
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
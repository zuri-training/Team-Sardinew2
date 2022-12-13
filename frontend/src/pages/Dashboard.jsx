


import React from 'react';
import './dashboard.css';

// import { Link } from "react-router-dom";
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
  return (
    <div>
      <section id="dashboard">
        <div class="row">
          <div class="col-4 section-left">
            <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
              <section class="section-left fixed">
                <div class="container left-div">
                  <a class="navbar-brand nav-headline" href="/#"><img src={feedbacker} class="img-feeder" alt='...' />Feedbacker</a>
                </div>
                <div class="container left-div">
                  <a class="navbar-brand" href="/#"><img src={vector3} class="img-feeder" alt='...' />Dashboard</a>
                </div>
                <div class="container left-div">
                  <a class="navbar-brand" href="/#"><img src={vector1} class=" img-feeder" alt='...' />Create Form</a>
                </div>
                <a class="navbar-brand" href="/#"><img src={vector1} class=" img-feeder" alt='...' />Create Form</a>
                <div class="dropdown">
                  <a class="navbar-brand" href="/#"><img src={vector4} class=" img-feeder" alt='...' /></a>

                  <select id="dropdown" name="referrer">
                    <option value="">Overview</option>
                    <option value="1">Summary</option>
                    <option value="2">Analytics</option>
                    <option value="3">Individual Response</option>
                    <option value="4">Deleted Response</option>
                  </select>

                </div>
                <div class="container left-div">
                  <a class="navbar-brand" href="/#"><img src={vector} class="img-feeder" alt='...' />Settings</a>
                </div>
                <div class="container left-div">
                  <button class="btn btn-white"><img src={vector5} class="img-feeder" alt='...' />Log Out</button>
                </div>


              </section>
            </div>
          </div>
          <div class="col-8 right-section">
            <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
              <section class="input-top">
                <div class="container">
                  <div class="row right-section">
                    <div class="col-10 right-section">
                      <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      </form>
                    </div>
                    <div class="col-1">
                      <a class="navbar-brand" href="/#"><img src={vector2} class="img-feeder" alt='...' /></a>
                    </div>
                    <div class="col-1 right-section">
                      <a class="navbar-brand" href="/#"><img src={ellipse2} class="img-feeder" alt='...' /></a>
                    </div>
                  </div>
                </div>
              </section>
              <section class="">
                <div class="container card-container right-section">
                  <label class="card-headline">Create a New Form</label>
                  <div class="row right-section">
                    <div class="col-md-4">
                      <div class="card text-card">
                        <div class="card-body">
                          <p class="plus-text">+</p>
                        </div>
                      </div>
                      <label>Blank</label>
                    </div>
                    <div class="col-md-4">
                      <div class="card text-card">
                        <div class="card-body">

                        </div>
                      </div>
                      <label>Assessment</label>
                    </div>
                    <div class="col-md-4">
                      <div class="card text-card">
                        <div class="card-body">
                          <img src={formQuestion} class="img-fluid" alt="..." />
                        </div>
                      </div>
                      <label>Customer Feedback</label>
                    </div>
                  </div>
                </div>
              </section>
              <section class="">
                <div class="container card-container right-section">
                  <label class="card-headline">Recently Created Forms</label>
                  <div class="row right-section">
                    <div class="col-md-4">
                      <div class="card text-card">
                        <div class="card-body">

                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card text-card">
                        <div class="card-body">

                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card text-card">
                        <div class="card-body">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="">
                <div class="container card-container right-section">
                  <label class="card-headline">Templates</label>
                  <div class="row right-section">
                    <div class="col-md-4">
                      <div class="card text-card">
                        <div class="card-body">

                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card text-card">
                        <div class="card-body">

                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card text-card">
                        <div class="card-body">

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
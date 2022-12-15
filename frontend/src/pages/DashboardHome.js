import React from "react";
import { Link } from "react-router-dom";
import ellipse2 from "../assets/images/Ellipse2.png";
import formQuestion from "../assets/images/Form-question.png";
import vector2 from "../assets/images/Vector2.png";
import uuid from "react-uuid";

const DashboardHome = () => {
  const id = uuid();

  return (
    <React.Fragment>
      <div
        data-bs-spy="scroll"
        data-bs-target="#simple-list-example"
        data-bs-offset="0"
        data-bs-smooth-scroll="true"
        className="scrollspy-example"
        tabIndex="0"
      >
        <section className="input-top">
          <div className="container">
            <div className="row right-section">
              <div className="col-10 right-section">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="col-1">
                <a className="navbar-brand" href="/#">
                  <img src={vector2} className="img-feeder" alt="..." />
                </a>
              </div>
              <div className="col-1 right-section">
                <a className="navbar-brand" href="/#">
                  <img src={ellipse2} className="img-feeder" alt="..." />
                </a>
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
                    <p>
                      <Link to={`/form/${id}`} className="plus-text">
                        {" "}
                        +
                      </Link>
                    </p>
                  </div>
                </div>
                <label>Blank</label>
              </div>
              <div className="col-md-4">
                <div className="card text-card">
                  <div className="card-body"></div>
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
                  <div className="card-body"></div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-card">
                  <div className="card-body"></div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-card">
                  <div className="card-body"></div>
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
                  <div className="card-body"></div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-card">
                  <div className="card-body"></div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-card">
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default DashboardHome;

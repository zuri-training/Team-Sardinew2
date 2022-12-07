import React from 'react';
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="container signin-container reg">
      <div className="row">
        <div className="col"></div>
        <div className="col-sm-12 col-md-8">
          <div className="card signin-card register">
            <div className="card-body">
              <h2 className="headline create-acct">Create Account</h2>
              {/* form start */}
              <form className="signin-form">
                <div className="mb-3">
                  <label>Full Name</label>
                  <input type="text" className="form-control" id="firstnameInput" placeholder="First name" />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control" id="emailInput" placeholder="Email"
                    aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" id="lastnameInput" placeholder="Phone Number" />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                </div>
                <div className="form-check form-agree">
                  <label className="form-check-label agreement" htmlFor="flexCheckDefault">I agree to the <a href="/#">Terms and Conditions</a>
                    <input className="form-check-input agreement" type="checkbox" value="" id="flexCheckDefault" />
                  </label>
                </div>
                <button type="button" className="btn signin-btn btn-sm">Sign Up</button>
                <div className="form-check">
                  <label>Already have an account? <Link to="/login">Login</Link>
                  </label>
                </div>
              </form>
              {/* form end */}
            </div>
          </div>

        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Register;
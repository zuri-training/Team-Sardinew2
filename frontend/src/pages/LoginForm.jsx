import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/images/resouces.png";


const LoginForm = () => {
  return (
    <div className="container signin-container">
      <div className="row">
        <div className="col"></div>
        <div className="col-sm-12 col-md-8">
          <div class="card mb-3 signin-card" style={{ maxWidth: '540px' }}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src={logo} class="img-fluid" alt="..." style={{ height: 'auto' }} />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h2 className="headline">Welcome Back...</h2>
                  <p className="headline">Please enter your Username and Password</p>
                  <form className="signin-form">
                    <div className="mb-3">
                      <label>Email</label>
                      <input type="email" className="form-control" id="emailInput" placeholder="Email"
                        aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                      <label>Password</label>
                      <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                      <p><Link to="/#" className="pin-reset">Forgotton Password?</Link></p>
                    </div>
                    <button type="button" className="btn signin-btn btn-sm">Login</button>
                    <button type="button" className="btn btn-sm google-log">Sign in with Google</button>
                    <div className="form-check accoumt-question">
                      <label>Don't have an account? <Link to="/register">Sign Up</Link>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div >
  );
}

export default LoginForm;
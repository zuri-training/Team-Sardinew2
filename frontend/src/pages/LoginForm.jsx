import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/images/Frame.png";




const LoginForm = () => {

  // form
  const [formData, setFormDate] = useState({
    email: '',
    password: "",
  })

  const { email, password } = formData;
  // On change function
  const onChange = (e) => {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }



  const onSubmit = e => {
  e.preventDefault()
}


  return (

    <>
<section>
      <div className='  py-4'>
        <div className="container">
          <div className="row no-gutter">
            <div className="col-lg-6">
              <img src={logo} className="img-fluid my-2 img-logo" alt="..."  />
            </div>
            <div className="col-lg-6 px-5 pt-5">
              <h1 className='font-weight-bold py-3 '>Welcome Back....</h1>
              <p >Please enter your Email and Password</p>
              <form onSubmit={onSubmit} >
                  <div className="my-3">
                     <label  htmlFor='emailInput'>Email</label>
                    <input name='email' value={email}  onChange={onChange} className='form-control my-1 p-3' type="email" placeholder='Email' aria-describedby='email' id='emailInput' />
                </div>
                  <div className="my-3">
                     <label  htmlFor='passwordInput'>Password</label>
                    <input name='password' value={password}  onChange={onChange} className='form-control my-1 p-3' type="password" placeholder='Password' aria-describedby='password' id='passwordInput' />
                  </div>
                  <div className="my-3">
                    <button className='signUpBtn'  type='submit' >Login</button>
                  </div>
                <div className="my-3">
                      <label>Already have an account? <Link to={"/register"}>Sigin Up</Link>
                     </label>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
      </section>
      </>
  
  );
}

export default LoginForm;
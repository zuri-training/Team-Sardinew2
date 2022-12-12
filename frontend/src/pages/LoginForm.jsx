import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch, } from 'react-redux'
import { toast } from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import logo from "../assets/images/Frame.png";




const LoginForm = () => {

  // form
  const [formData, setFormDate] = useState({
    email: '',
    password: "",
  })

  const { email, password } = formData;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)
  // use Effect
    useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // success
    if (isSuccess || user) {
      navigate('/dashboard')
    }
    dispatch(reset())
}, [isError,isSuccess,user,navigate,message,dispatch])
  // On change function
  const onChange = (e) => {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }



  const onSubmit = e => {
    e.preventDefault()
    // console.log(formData)
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }
  
   if (isLoading) {
    return (<h1 className='text-center font-weight-bold py-3'> Loading ...</h1>)
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
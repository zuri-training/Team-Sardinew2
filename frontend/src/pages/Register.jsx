import React,{useEffect, useState} from 'react';
import { toast } from 'react-toastify'
import { useSelector, useDispatch, } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { register, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import logo from "../assets/images/Frame.png";
import "./register.css";


const Register = () => {

// form state data
  const [formData, setFormDate] = useState({
    name:"",
    email: '',
    password: "",
    cpassword: "",
  })
  
  //extract properties from form data
  const { name, email, password, cpassword } = formData;
  const dispatch = useDispatch()
  const navigate  = useNavigate()
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // success
    if (isSuccess || user) {
      navigate('/dashboard')
      toast.success("Registration Successful")

    }
    dispatch(reset())
}, [isError,isSuccess,user,navigate,message,dispatch])


  // handle onChange
  const onChange = (e) => {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  

  // prevent page reload
  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== cpassword) {
      toast.error("Password do not match")
    } else {
      const userData = {
        name,
        email,
        password
      }
      console.log(userData)
      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return (<h1 className='text-center font-weight-bold py-3'> Loading ...</h1>)
  }
  
  return (

<section>
      <div className='Form py-3'>
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <img src={logo} className="img-fluid my-2 img-logo" alt="..."  />
            </div>
            <div className="col-lg-6 px-5 pt-5">
              <h1 className='font-weight-bold py-3 '>Create Account</h1>
              <form onSubmit={onSubmit} >
                
                  <div className=" my-3">
                     <label  htmlFor='nameInput'>Name</label>
                    <input name='name' value={name} onChange={onChange} className='form-control p-3 inputStyle' type="name" placeholder='full name' aria-describedby='name' id='nameInput' />
                </div>
                <div className=" my-3">
                     <label  htmlFor='emailInput'>Email</label>
                    <input  name='email' value={email} onChange={onChange} className='form-control  p-3 inputStyle' type="email" placeholder='Email' aria-describedby='email' id='emailInput' />
                </div>
                <div className=" my-3">
                     <label   htmlFor='passwordInput'>Password</label>
                    <input name="password" value={password} onChange={onChange} className='form-control p-3 inputStyle' type="password" placeholder='Password' aria-describedby='password' id='passwordInput' />
                </div>
                <div className=" my-3">
                     <label  htmlFor='cpasswordInput'>Confirm Password</label>
                    <input name='cpassword' value={cpassword} onChange={onChange} className='form-control p-3 inputStyle' type="password" placeholder='Confirm Password' aria-describedby='cpassword' id='cpasswordInput' />
                    <div className="form-text" id="cpasswordInput" >Password must not less than 8 character</div>
                  </div>
               
                <div className="form-row">
                  <div className=" my-3">
                    <button className=' signUpBtn ' type='submit' >Sign UP</button>
                  </div>
                </div>
                </form>
                  <div className="form-row">
                      <label>Already have an account? <Link to={"/login"}>Login</Link>
                     </label>
                    </div>
            </div>
          </div>
        </div>
      </div>
      </section>











    // <div className="container signin-container reg">
    //   <div className="row">
    //     <div className="col"></div>
    //     <div className="col-sm-12 col-md-8">
    //       <div class="card mb-3 signin-card" style={{ maxWidth: '540px' }}>
    //         <div class="row g-0">
    //           <div class="col-md-6">
    //             <img src={logo} class="img-fluid" alt="..." style={{ height: 'auto' }} />
    //           </div>
    //           <div class="col-md-6">
    //             <div class="card-body">
    //               <h2 className="headline create-acct">Create Account</h2>
    //               <form className="signin-form">
    //                 <div className="mb-3">
    //                   <label>Full Name</label>
    //                   <input type="text" className="form-control" id="firstnameInput" placeholder="First name" />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label>Email</label>
    //                   <input type="email" className="form-control" id="emailInput" placeholder="Email"
    //                     aria-describedby="emailHelp" />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label>Phone Number</label>
    //                   <input type="tel" className="form-control" id="lastnameInput" placeholder="Phone Number" />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label>Password</label>
    //                   <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
    //                 </div>
    //                 <div className="form-check form-agree">
    //                   <label className="form-check-label agreement" htmlFor="flexCheckDefault">I agree to the <a href="/#">Terms and Conditions</a>
    //                     <input className="form-check-input agreement" type="checkbox" value="" id="flexCheckDefault" />
    //                   </label>
    //                 </div>
    //                 <button type="button" className="btn signin-btn btn-sm">Sign Up</button>
    //                 
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>











  );
}

export default Register;
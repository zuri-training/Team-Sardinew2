import React from 'react';
import { toast } from 'react-toastify'
import logo from "../assets/images/Frame.png";
import fbLogo from "../assets/images/feedbacker.png";
const API_URL = "https://feedback-api-rmi2.onrender.com/user/";
// const API_URL = "https://feedback-api-fi7m.onrender.com/user/";


const ForgotPassword = () => {

  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const handleForgotPwd = async () =>{
    if(!email){
      setError(true);
      return false;
    }
    setIsLoading(true);

    
      let result = await fetch(API_URL+ "password-reset", {
          method:'post',
          body:JSON.stringify({email}),
          headers:{
              'Content-Type':'application/json'
          }

      });

      result = await result.json()
      if(result.success === true){
        toast.success(result.message)
        setIsLoading(false);
      }else{
        toast.error(result.error || result.message)
        setIsLoading(false);
      }

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
            <p className='text-center'> <img src={fbLogo} className="img-fluid img-fb-logo" alt="logo"  /></p>
              <h1 className='font-weight-bold pb-4 mb-4 text-center'>FeedBack Generator</h1>
              <h3 className='font-weight-bold text-center'>Reset your password</h3>
              <h5 className='pb-2 mb-5 text-center' >Enter the email associated with your account</h5>
             
                  <div className="my-3">
                     <label  htmlFor='emailInput'>Email Address</label>
                    <input value={email}  onChange={(e)=>setEmail(e.target.value)} className='form-control my-1 p-3' type="email" placeholder='sardinew@gmail.com' aria-describedby='email' id='emailInput' />
                </div>
                { error && !email && <span className='invalid-input'>Enter Valid Email</span>}
                
                  <div className="my-3">
                    {
                      isLoading ?
                      <h1 className='text-center font-weight-bold py-3'> Loading ...</h1>
                      :
                    <button onClick={handleForgotPwd} className='signUpBtn'  type='button' >Reset my password</button>
                    }
                    </div>
                
            </div>
          </div>
        </div>
      </div>
      </section>
      </>
  
  );
}

export default ForgotPassword;
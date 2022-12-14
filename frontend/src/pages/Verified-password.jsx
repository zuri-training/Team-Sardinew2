import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/images/Frame.png";
import fbLogo from "../assets/images/feedbacker.png";

const VerifiedPassword = () => {

  return (

    <>
<section>
      <div className='  py-4'>
        <div className="container">
          <div className="row no-gutter">
            <div className="col-lg-6">
              <img src={logo} className="img-fluid my-2 img-logo" alt="..."  />
            </div>
            <div className="col-lg-6 px-4 pt-4">
            <p className='text-center'> <img src={fbLogo} className="img-fluid img-fb-logo" alt="logo"  /></p>
              <h1 className='font-weight-bold pb-4 mb-4 text-center'>FeedBack Generator</h1>
              <h3 className='font-weight-bold text-center'>Successful password reset!</h3>
              <h5 className='pb-4 mb-4 text-center' >You can now use your new password to log in to your account</h5>

                  <div >
                 <h4><Link  to={"/login"} >Login</Link></h4>
                     
                    </div>
                
            </div>
          </div>
        </div>
      </div>
      </section>
      </>
  
  );
}

export default VerifiedPassword;
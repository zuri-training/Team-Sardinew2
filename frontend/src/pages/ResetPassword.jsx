// import React, {useEffect} from 'react';
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { toast } from 'react-toastify'
// import logo from "../assets/images/Frame.png";
// import fbLogo from "../assets/images/feedbacker.png";
// const API_URL = "https://feedback-api-fi7m.onrender.com/user/";


// const ResetPassword = () => {

//   const [password, setPassword] = React.useState('');
//   const [passwordConfirm, setPasswordConfirm] = React.useState('');
//   const [error, setError] = React.useState(false);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const navigate = useNavigate();
//   const params = useParams();

//   useEffect(()=>{
//     //const auth = localStorage.getItem("user");
//   },[])
  
//   const handleChangePwd = async () =>{
//     if(!password || !passwordConfirm) {
//       setError(true);
//       return false;
//     }
//     if(password !== passwordConfirm){
//         setError(true);
//         return false;
//       }
//     setIsLoading(true);

//       let result = await fetch(API_URL+ `password-reset/${params.userId}/${params.token}`, {
//           method:'post',
//           body:JSON.stringify({password}),
//           headers:{
//               "Content-Type":"application/json"
//           }

//       });

//       result = await result.json()
//       if(result.success === true){
//         toast.success(result.message)
//         navigate("/verified-password");
//         setIsLoading(false);
        
//       }else{
//         toast.error(result.message)
//         setIsLoading(false);
//       }

//   }

//   return (

//     <>
// <section>
//       <div className='  py-4'>
//         <div className="container">
//           <div className="row no-gutter">
//             <div className="col-lg-6">
//               <img src={logo} className="img-fluid my-2 img-logo" alt="..."  />
//             </div>
//             <div className="col-lg-6 px-4 pt-4">
//             <p className='text-center'> <img src={fbLogo} className="img-fluid img-fb-logo" alt="logo"  /></p>
//               <h1 className='font-weight-bold pb-4 mb-4 text-center'>FeedBack Generator</h1>
//               <h3 className='font-weight-bold text-center'>Password</h3>
//               <h5 className='pb-2 mb-4 text-center' >Set up a Password for your account</h5>
             
//                 <div className="my-3">
//                      <label >Password</label>
//                     <input value={password}  onChange={(e)=>setPassword(e.target.value)} className='form-control my-1 p-3' type="password" placeholder='password' />
//                 </div>
//                 { error && !password && <span className='invalid-input'>Enter password</span>}
                
//                 <div className="my-3">
//                      <label>Confirm Password</label>
//                     <input value={passwordConfirm}  onChange={(e)=>setPasswordConfirm(e.target.value)} className='form-control my-1 p-3' type="password" placeholder='Confirm Password' aria-describedby='email'  />
//                 </div>
//                 { error && passwordConfirm && <span className='invalid-input'>Password Mismatch!</span>}
                
//                   <div className="my-3">
//                     {
//                       isLoading ?
//                       <h1 className='text-center font-weight-bold py-3'> Loading ...</h1>
//                       :
//                     <button onClick={handleChangePwd} className='signUpBtn'  type='button' >Change my password</button>
//                     }
//                     </div>
                
//             </div>
//           </div>
//         </div>
//       </div>
//       </section>
//       </>
  
//   );
// }

// export default ResetPassword;
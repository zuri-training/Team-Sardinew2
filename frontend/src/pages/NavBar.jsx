import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {logout,reset} from '../features/auth/authSlice'

function NavBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/login")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/#" className="nav-link">
                                    About
                                </Link>
                            </li>
                            {user ? (
                                <li>
                                    <button onClick={onLogout} className='btn btn-primary'>Logout</button>
                            </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                        Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link">
                                        Register
                                        </Link>
                                    </li>
                                 </>
                            )}
                           
                            <li className="nav-item">
                                <Link to="/#" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

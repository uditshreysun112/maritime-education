import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "./assets/logo_img_maritime.png";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

     const handleAboutMouseEnter = () => {
        setIsAboutOpen(true);
    };

    const handleAboutMouseLeave = () => {
        setIsAboutOpen(false);
    };
    const navigate = useNavigate();
    
    const handleLoginClick = () => {
        navigate('/std/std_login'); // Navigates to the "/student-login" route
    };

    return (
        <>
            <header className="header bg-dark">
                
                    <div className="row">
                        <div className="col-md-6">
                            <img className="shadow" id="logo" src={logo} alt="" style={{ width: '100px', height: '100px' }} />
                        </div>
                        <div className="col-md-6 text-end mt-4 ">
                            <button className="button" style={{marginRight:'50px'}} onClick={handleLoginClick}>STUDENT LOGIN</button>
                        </div>
                    </div>
            </header>
            
                <nav className="navbar navbar-expand-lg navbar-light bg-shadow ">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler bg-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navbar Links */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 fw-bold">
                                <li className="nav-item">
                                    <Link className="nav-link active mx-2" aria-current="page" to="/">Home</Link>
                                </li>
                                <li  className="nav-item dropdown"
                                    onMouseEnter={handleAboutMouseEnter}
                                    onMouseLeave={handleAboutMouseLeave}>
                                    <a
                                        className="nav-link mx-2"
                                        href="#"
                                        id="navbarDropdownAbout"
                                        role="button"
                                        aria-expanded={isAboutOpen}
                                    >
                                        About Us
                                    </a>
                                    <ul className={`dropdown-menu ${isAboutOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="about_amt">About MTA</Link></li>
                                        <li><Link className="dropdown-item" to="team">Meet The Team</Link></li>
                                        {/* <li><Link className="dropdown-item" to="#">MTA Authors</Link></li> */}
                                    </ul>
                                </li>
                                <li
                                    className="nav-item dropdown"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a
                                        className="nav-link mx-2"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        aria-expanded={isOpen}
                                    >
                                        Course
                                    </a>
                                    <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="all_courses">All Courses</Link></li>
                                        <li><Link className="dropdown-item" to="diplomas">Full Length Diploma</Link></li>
                                        {/* <li><a className="dropdown-item" to="#">Short Courses</a></li> */}
                                        {/* <li><a className="dropdown-item" to="#">Design Your Own Diploma</a></li> */}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to="industry">Careers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to="f&q">F&Q</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to="news">News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ,mx-2" to="contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        
        </>
    );
};

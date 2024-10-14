import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "./assets/maritime_logo1.jpeg";

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

    return (
        <>
            <header className="header">
                <div className="row my-2 mt-3">
                    <div className="col-md-9">
                        <img className="shadow" id="logo" src={logo} alt="" style={{ width: '80px', height: '60px' }} />
                    </div>
                    <div className="col-md-3 text-end ">
                        <button className="button">STUDENT LOGIN</button>
                    </div>
                </div>
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
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li  className="nav-item dropdown"
                                    onMouseEnter={handleAboutMouseEnter}
                                    onMouseLeave={handleAboutMouseLeave}>
                                    <a
                                        className="nav-link"
                                        href="#"
                                        id="navbarDropdownAbout"
                                        role="button"
                                        aria-expanded={isAboutOpen}
                                    >
                                        About Us
                                    </a>
                                    <ul className={`dropdown-menu ${isAboutOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">About MTA</a></li>
                                        <li><a className="dropdown-item" href="#">Meet The Team</a></li>
                                        <li><a className="dropdown-item" href="#">MTA Authors</a></li>
                                    </ul>
                                </li>
                                <li
                                    className="nav-item dropdown"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a
                                        className="nav-link"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        aria-expanded={isOpen}
                                    >
                                        Course
                                    </a>
                                    <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">All Courses</a></li>
                                        <li><a className="dropdown-item" href="#">Full Length Diploma</a></li>
                                        <li><a className="dropdown-item" href="#">Short Courses</a></li>
                                        <li><a className="dropdown-item" href="#">Design Your Own Diploma</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="industry">Industry Vacancies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="f&q">F&Q</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="news">News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

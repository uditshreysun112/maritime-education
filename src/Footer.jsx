import React from "react";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brt from './assets/british-marine.png';
// import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
<>
      {/* <div className="box mt-5 mb-5 text-center" style={{ color: 'white', backgroundColor: 'rgb(36, 93, 201)'  }}>
        <br />
        <h1>Thanks For Scrolling</h1>
        <br />
      </div> */}
    <hr className="mt-5 mb-5" />
<div className="box mt-5 text-center" style={{ color: 'white', backgroundColor: 'rgb(91, 94, 95)' }}>
  <br />
  <div className="container text-start pt-5 pb-5">
    <h3 id="sign-h3" className="h5">Sign-up to receive email updates</h3>
    <div className="row">
      <div className="col-12 col-md-4 mb-3">
        <form action="">
          <input
            type="text"
            placeholder="Email address"
            className="form-control"
            style={{ maxHeight: '45px' }}
          />
        </form>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <form action="">
          <input
            type="text"
            placeholder="Full name"
            className="form-control"
            style={{ maxHeight: '45px' }}
          />
        </form>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <button id="sign-btn" className="btn btn-primary w-100" style={{ maxHeight: '35px' }}>
          SIGN UP
        </button>
      </div>
    </div>
  </div>
  <br />
  <br />
</div>

        <footer className="text-white pt-5 pb-4 " style={{ backgroundColor: 'rgb(28, 30, 43)' }}>
          
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3  mt-3">
              <div className="text-start">
              <h5 id="foot-text" className=" font-weight-bold" style={{ color: 'rgb(36, 93, 201)' }}>Maritime Academy</h5>
              <p>
                <a href="#" style={{ textDecoration: 'none',color:'grey' }}>Experts in Distace Learning</a>
              </p>
             </div>
                <div className="text-start">
                    <h5 id="foot-text2">Contact Our Team</h5>
                    <h6 id="foot-text3">+44 (0) 1252 000000</h6>
                </div>
              {/* <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Download</a>
              </p> */}
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <div id="foot-col-text" className="text-start">
                <h5 id="foot-text2">Useful Links</h5>
                <p style={{color:'grey'}}>
                  Features
                </p>
                <p style={{color:'grey'}}>
                  Explore
                </p >
                <p style={{color:'grey'}}>
                  Community
                </p>
                <p style={{color:'grey'}}>
                  Download
                </p>
              </div>
            </div>
            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3"> */}
              {/* <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: 'rgb(36, 93, 201)' }}>Community</h5>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Features</a>
              </p>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Explore</a>
              </p>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Community</a>
              </p>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Download</a>
              </p> */}
            {/* </div> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <img className="bg-light" style={{width:'180px'}} src={brt} alt="" />
                  
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <a href=""><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px' }}/></a>
                    </div>
                    <div className="col-md-4">
                      <a href=""><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px' }} /></a>
                    </div>
                    <div className="col-md-4">
                      <a href=""><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px' }}/></a>
                    </div>
                  </div>
            </div>
          </div>
        </div>
        {/* <div className="bottom-bar text-center mt-5 pt-1" style={{ backgroundColor: 'rgb(36, 93, 201)' }}>
          <p>&copy; 2024 <span style={{ color: 'rgb(252, 252, 252)' }}>Shreysun Global Infotech Pvt. Ltd.</span> 2024 |
            Developed By <span style={{ color: 'rgb(243, 129, 52)', fontWeight: 'bold' }}>Tech-Leader: Ali Akbar</span>
          </p>
        </div> */}
        <div className="container">
          <hr className="mt-5 mb-3"/>
        </div>
        <div className="container">
          <p style={{color:'grey'}}>&copy; 2024  Maritime Training Academy - All rights reseved <span style={{color:'lightblue' , cursor:'pointer'}}>| Privacy Policy | Terms </span></p>
        </div>
      </footer>
</>
  );
};


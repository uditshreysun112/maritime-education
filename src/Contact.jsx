
// import img from "./assets/maritime_img.jpg"
import icon4 from "./assets/mta-call.png"
import icon5 from "./assets/mta-email.png"
import icon6 from "./assets/mta-address.png"
export const Contact = () => {
    return (
        <>
            <div id="img-boat" className="container-fluid">
                <div className="content">
                    <h1 id="heading" >Contact the Maritime Training Academy</h1>
                    <p style={{ fontSize: '25px',fontFamily:'arial', color: "rgb(224, 224, 224)" }}>We’re here to help find the right course for you.<br /></p>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-4">
                    <div className="card-stats" style={{ width: "3rem;", margin: '10px 30px' }}>
                        <div className="img-box d-block mx-auto">
                            <img src={icon4} className="card-img-top  d-block mx-auto" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h3 className="card-title text-center mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>Call Us</h3>
                            <p className="card-text text-center mt-2 text-muted">
                                To contact us via phone, please call
                            </p>
                            <a href="#" style={{ textDecoration: 'none' }}>+91-444-4543453</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-stats" style={{ width: "3rem;", margin: '10px 30px' }}>
                        {/* <div className="stats"> */}
                        <div className="img-box d-block mx-auto">
                            <img src={icon5} className="card-img-top  d-block mx-auto" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h3 className="card-title  mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>Email Us</h3>
                            <p className="card-text  mt-2 text-muted">To contact us via email, either fill out the below form, or send an email to</p>
                            <a href="#">info@maritimetrainingacademy.com</a>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-stats" style={{ width: "3rem;", margin: '10px 30px' }}>
                        <div className="img-box d-block mx-auto">
                            <img src={icon6} className="card-img-top  d-block mx-auto" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title text-center mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>Expertise</h3>
                            <p className="card-text text-center mt-2 text-muted"><span className="fw-bold">Maritime Training Academy</span>, Peel House, Upper South View, Farnham, Surrey GU9 7JN.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container m-5">
                <div>
                    <form id="form-box" style={{marginTop:'100px'}}>
                        <p  className="mt-5"><b>First Name:-</b></p>
                        <input type="text" placeholder="  First Name"style={{width:'110%', paddingBottom:'15px'}} />
                        
                        <p  className="mt-5"><b>Last Name:-</b></p>
                        <input type="text" placeholder="  Last Name" style={{width:'110%' , paddingBottom:'15px'}}/><br />
                        <p  className="mt-5"><b>Phone:-</b></p>
                        <input type="phone" placeholder="  Phone"style={{width:'110%', paddingBottom:'15px'}} /><br />
                        <p  className="mt-5"><b>Email:-</b></p>
                        <input type="text" placeholder="  Email" style={{width:'110%', paddingBottom:'15px'}}/><br />
                        <p  className="mt-5"><b>Country:-</b></p>
                        <input type="text" placeholder="  Country" style={{width:'110%', paddingBottom:'15px'}}/><br />
                        <p  className="mt-5"><b>Subject:-</b></p>
                        <input type="text" placeholder="  Subject" style={{width:'110%', paddingBottom:'15px'}}/><br />
                        <p  className="mt-5"><b>Message:-</b></p>
                        <textarea name="" id="" placeholder="  Message"style={{width:'110%' , paddingBottom:'15px'}}></textarea><br />
                        <p  className="mt-5"><b>Can we contact you about our other products, services and offers?:-</b></p>
                        <input type="text" placeholder="  yes" style={{width:'110%', marginTop:'0px', paddingBottom:'15px'}}/><br />
                        <br />
                        <br />
                        <button className="btn-contact">Submit</button>
                    </form>

                </div>
            </div>
        </>
    );
};
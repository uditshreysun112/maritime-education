import React from "react";
import img from "./assets/maritime_img.jpg"
import icon1 from "./assets/flexible-icon.png"
import icon2 from "./assets/supportive-icon.png"
import icon3 from "./assets/expertise-icon.png"



export const Home = () => {
    
    return (
        <>

            <div id="img-boat" className="container-fluid">
                <div className="content">
                    <h1 id="heading" >
                        Study Online with the <br />
                        Maritime Training Academy</h1>
                    <p style={{ fontSize: '25px', color: "rgb(224, 224, 224)" }}>Enhance your career with a globally recognised Diploma or short <br /> course. Online learning allows you to study in your own time, at your <br />own pace, from anywhere in the world.</p>
                </div>
            </div>



            <div id="heading" className="text-center" style={{ marginTop: '50px' }}>
                <h1>Our Courses</h1>
            </div>
            <div className="text-center text-muted mt-4">
                <h4>Select one of the categories below to explore our portfolio <br /> of Maritime Diplomas, Certificates and Short Courses</h4>
            </div>
            <div className="text-center text-muted mt-4" style={{ fontSize: '17px' }}>
                <p>Our portfolio of distance learning Diploma, Certificate, and Short Courses are managed and run by established professionals within the <br />marine industry, we are constantly pushing back the boundaries of knowledge. Due to our rigorous academic standards our qualifications are <br />highly respected internationally. Explore these courses here to find the one that is a perfect fit to develop your career.</p>
            </div>

            <div id="download" className="container">
                <p className="text-center">DOWNLOAD A PROSPECTUS</p>
            </div>
            {/* <div className="text-center mt-5">
                <h4 id="heading" className="fw-bold mb-5">OUR CIENTS</h4>
            </div> */}

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 1" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ padding: '60px 125px', color: 'white' }}>Text</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 2" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ padding: '60px 125px', color: 'white' }}>Text</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }} >
                        <div className="card" >
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 3" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ padding: '60px 125px', color: 'white' }}>Text</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 1" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ padding: '60px 125px', color: 'white' }}>Text</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 2" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ padding: '60px 125px', color: 'white' }}>Text</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }} >
                        <div className="card" >
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 3" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ padding: '60px 125px', color: 'white' }}>Text</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 1" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ padding: '60px 125px', color: 'white' }}>Text</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 2" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ padding: '60px 125px', color: 'white' }}>Text</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }} >
                        <div className="card" >
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 3" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ padding: '60px 125px', color: 'white' }}>Text</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box mt-5 text-center" style={{ color: 'white', backgroundColor: 'rgb(91, 94, 95)' }}>
                <br />
                <h1 id="footbar-content">FAQs</h1>
                <p id="footbar-para">How long do the courses take to complete? What's the difference between a Diploma and a <br />Certificate? Read through our Frequently Asked Questions below to find out the answer.</p>
                <button className="button-footer">VIEW FAQs</button>
                <br />
                <br />
            </div>
            <div className="containere-fluid " style={{ backgroundColor: "rgb(209, 209, 209)", height: "1000%", marginTop: '0' }}>
                <div id="heading" className="text-center" >
                    <h1 style={{ paddingTop: '60px' }}>Why Choose MTA?</h1>
                </div>
                <div className="text-center text-muted mt-4">
                    <h4>Maritime Training Academy is an international leader in supplying <br /> distance-learning marine diplomas.</h4>
                </div>
                <div className="row pt-5">
                    <div className="col-md-4">
                        <div className="card-stats" style={{ width: "3rem;", margin: '10px 30px' }}>
                            <div className="img-box d-block mx-auto">
                                <img src={icon1} className="card-img-top  d-block mx-auto" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Flexible</h5>
                                <p className="card-text text-center mt-2 text-muted">Online learning allows you to study in your own time, at your own pace from anywhere in the world. This saves on travel and classroom costs and allows you to fit your studies around your job and progress your career.
                                </p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-stats" style={{ width: "3rem;", margin: '10px 30px' }}>
                            {/* <div className="stats"> */}
                            <div className="img-box d-block mx-auto">
                                <img src={icon2} className="card-img-top  d-block mx-auto" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Supportive</h5>
                                <p className="card-text text-center mt-2 text-muted">While the nature of distance learning is independent study, we recognise the importance of support. Students can contact us at any time during their course for assistance and our team of industry experts are always on hand for advice.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-stats" style={{ width: "3rem;", margin: '10px 30px' }}>
                            <div className="img-box d-block mx-auto">
                                <img src={icon3} className="card-img-top  d-block mx-auto" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Expertise</h5>
                                <p className="card-text text-center mt-2 text-muted">We have over 50 industry experts writing, developing and advising on our course material. We truly believe that allowing students to tap into their expertise and knowledge is of the utmost importance to fulfil your dream career.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 pb-5">
                    <button className="button-about">ABOUT US</button>
                </div>

            </div>
            <div className="newsBlog-box">
                <h1 className="newsBlog">News & Blog</h1>
                <h4>Keep up to date with the latest Maritime Training Academy news</h4>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div id="foot-card" className="caontainer" style={{ width: '18rem' }}>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body mt-3">
                                <h4 className="card-title">Student Success: Barbara</h4>
                                <hr />
                                <p className="card-text text-muted">
                                    At the Maritime Training Academy (MTA), we love celebrating our students' success and sharing their stories with the world. One such story is that of Barbara, a dedicated student who recently completed her Port State Control Certificate. In this Q&A, Barbara...
                                </p>
                                <a href="#" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="foot-card" className="caontainer" style={{ width: '18rem' }}>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body mt-3">
                                <h4 className="card-title">Student Success: Barbara</h4>
                                <hr />
                                <p className="card-text text-muted">
                                We love celebrating our student's success here at the Maritime Training Academy. Bianca is a former Yacht Brokerage diploma student who is now studying the Superyacht Operations diploma - in this Q&A we find out all about her career, motivation to study,...
                                </p>
                                <a href="#" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="foot-card" className="caontainer" style={{ width: '18rem' }}>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body mt-3">
                                <h4 className="card-title">Student Success: Barbara</h4>
                                <hr />
                                <p className="card-text text-muted">
                                Global trade relies heavily on the maritime industry, with shipbuilding and repair playing crucial roles. The Maritime Training Academy (MTA) offers an online Shipbuilding and Ship Repair course designed to equip aspiring maritime professionals with essential skills,...
                                </p>
                                <a href="#" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Read more</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center mt-5 pb-5">
                    <button className="button-about">VIEW ALL NEWS</button>
            </div>
            
        </>
    );
};

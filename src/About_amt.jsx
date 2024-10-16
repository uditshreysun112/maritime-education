import icon1 from "./assets/flexible-icon.png"
import icon2 from "./assets/supportive-icon.png"
import icon3 from "./assets/expertise-icon.png"
import mta from "./assets/mta-about-1.jpg"
import mta1 from "./assets/mta-about-2.jpg"



export const About_amt = () => {
    return (
        <>
            <div id="img-boat" className="container-fluid">
            <div className="content">
                <h1 id="heading" >
                About the Maritime Training Academy</h1>
                <p style={{ fontSize: '25px',fontFamily:'arial', color: "rgb(224, 224, 224)" }}>Find out more about the Experts in Maritime Distance Learning<br /></p>
            </div>
            </div>
            <div className="container">
                    <h1 style={{fontFamily: "Playfair Display, serif" , marginTop:'80px'}}>International Leader</h1>
                <div className="text-muted">
                    <p>Maritime Training Academy is an international leader in supplying distance-learning marine diplomas. As part of the Maritime Services Group, we offer an unrivalled combination of flexibility, support, expertise and industry affiliations. Every year we help thousands of students to enhance their knowledge and further their careers. All of our maritime courses in our diverse portfolio are written and directed by experts in their field. In addition, we have over 50 authors writing, developing and advising on maritime training course material. We truly believe that allowing students to tap into a huge range of expertise and knowledge is of the utmost importance giving them the best chance to fulfil their dream career.</p>
                </div>
            </div>
            <div className="container">
                <h1 style={{fontFamily: "Playfair Display, serif" , marginTop:'80px'}}>How we Support our Students</h1>
                <div className="text-muted">
                    <p>While the nature of distance learning is independent study, we recognise there may be times when students need help and support. Firstly, students can contact us at any time during their course and we will assist with any queries. Secondly, if support is needed with a particular element of the course, we will contact one of our team of industry experts for their advice.</p>
                    <p><i>We also offer the option for students to join us on an online tutorial before their chosen exam. Date to be confirmed by the training department.</i></p>
                </div>
            </div>
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={mta} className="img-fluid rounded-start" alt="..." style={{height:'100%' , paddingTop:"100px", paddingBottom:'50px', paddingLeft:'10px'}}/>
                        </div>
                        <div className="col-md-8">
                                <h1 style={{paddingTop:'80px',fontFamily:'Playfair Display, serif'}}>Optional Classroom Based Learning</h1>                        
                                <div className="text-muted">
                                    <p>Get in touch with our partners SYR, who are global shoreside recruitment specialists. With over 20 years of experience across the team, they work with seafarers and shoreside applicants to identify and place them in exciting new positions. Their clients include some of the most prestigious brands in yachting, ranging from the ultra-boutique to the large international corporate employers, catering for the requirements of any applicant.</p>
                                    <p>Alongside their recruitment services, they offer in-depth career advice, salary benchmarking and CV/Interview coaching to help identify the perfect position for applicants. Whilst they work across shoreside as a whole, they specialise in design, engineering, brokerage and yacht management vacancies.</p>
                                </div>
                                <button className="maritime mt-5">VIEW COURSES</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid " style={{backgroundColor:'rgb(71, 71, 71)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 text-light">
                            <h1 style={{paddingTop:'80px',fontFamily:'Playfair Display, serif'}}>Distance Learning Courses</h1>                        
                                <p>Get in touch with our partners SYR, who are global shoreside recruitment specialists. With over 20 years of experience across the team, they work with seafarers and shoreside applicants to identify and place them in exciting new positions. Their clients include some of the most prestigious brands in yachting, ranging from the ultra-boutique to the large international corporate employers, catering for the requirements of any applicant.</p>
                                <p>Alongside their recruitment services, they offer in-depth career advice, salary benchmarking and CV/Interview coaching to help identify the perfect position for applicants. Whilst they work across shoreside as a whole, they specialise in design, engineering, brokerage and yacht management vacancies.</p>
                                <button className="maritime mt-5">VIEW COURSES</button>
                        </div>
                        <div className="col-md-4">
                            <img src={mta1} className="img-fluid rounded-start" alt="..." style={{height:'100%' , paddingTop:"100px", paddingBottom:'50px', paddingLeft:'10px'}}/>
                        </div>
                    </div>
                </div>
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
        </>
    );
};
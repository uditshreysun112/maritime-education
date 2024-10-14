import icon1 from "./assets/flexible-icon.png"
import icon2 from "./assets/supportive-icon.png"
import icon3 from "./assets/expertise-icon.png"


export const Fq = () => {
    return (
        <>
            <div id="img-boat" className="container-fluid">
            <div className="content">
                <h1 id="heading" >Frequently Asked Questions</h1>
                <p style={{ fontSize: '25px',fontFamily:'arial', color: "rgb(224, 224, 224)" }}>Find the answers to your questions here<br /></p>
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
import img from './assets/mta-about-2.jpg'

export const All_courses = () => {
    return (
        <>
            <div id="img-boat" className="container-fluid">
            <div className="content">
                <h1 id="heading" >Courses at Maritime Training Academy</h1>
                <p style={{ fontSize: '25px',fontFamily:'arial', color: "rgb(224, 224, 224)" }}>Enhance your career with a globally recognised Diploma or short course, view our courses below to find one that’s right for <br /> you!</p>
            </div>
            </div>
            <div className="container text-center mb-5">
                    <h1 style={{fontFamily: "Playfair Display, serif", marginTop:'80px'}}>Choose a Category</h1>
            </div>

            <div className="container mt-5" style={{fontFamily: "Playfair Display, serif",}}>
                <div className="row">
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 1" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{border:'2px solid white', borderRadius:'50px',display:'flex', marginTop:'40px' ,padding:'15px 0px', justifyContent:'center', color: 'white' }}>Boat & Yatch</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 2" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3  className="card-content" style={{border:'2px solid white', borderRadius:'50px', display:'flex', marginTop:'40px',padding:'15px 0px', justifyContent:'center', color: 'white' }}>Build & Repaire Courses</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }} >
                        <div className="card" >
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 3" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{border:'2px solid white', borderRadius:'50px', display:'flex', marginTop:'40px',padding:'15px 0px', justifyContent:'center', color: 'white' }}>Law & Ensurance Courses</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5" style={{fontFamily: "Playfair Display, serif",}}>
                <div className="row">
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 1" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{border:'2px solid white', borderRadius:'50px',display:'flex', marginTop:'40px',padding:'15px 0px', justifyContent:'center', color: 'white' }}>Management Courses</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 2" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3  className="card-content" style={{border:'2px solid white', borderRadius:'50px', display:'flex', marginTop:'40px',padding:'15px 0px', justifyContent:'center', color: 'white' }}>Offshore Courses</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }} >
                        <div className="card" >
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 3" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ border:'2px solid white', borderRadius:'50px', display:'flex', marginTop:'40px', padding:'15px 0px', justifyContent:'center', color: 'white' }}>Safty & Security Courses</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5" style={{fontFamily: "Playfair Display, serif",}}>
                <div className="row">
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 1" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{border:'2px solid white', borderRadius:'50px',display:'flex', marginTop:'40px',padding:'15px 0px', justifyContent:'center', color: 'white' }}>Shipping Courses</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 2" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3  className="card-content" style={{border:'2px solid white', borderRadius:'50px', display:'flex', marginTop:'40px',padding:'15px 0px', justifyContent:'center', color: 'white' }}>SuperYatch Courses</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }} >
                        <div className="card" >
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 3" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ border:'2px solid white', borderRadius:'50px', display:'flex', marginTop:'40px', padding:'15px 0px', justifyContent:'center', color: 'white' }}>Serveying Courses</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5" style={{fontFamily: "Playfair Display, serif",}}>
                <div className="row">
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 1" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{border:'2px solid white', borderRadius:'50px',display:'flex', marginTop:'40px',padding:'15px 0px', justifyContent:'center', color: 'white' }}src="">All Courses</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }}>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 2" className="card-img-top img-hover-zoom" />
                                <div className="card-img-overlay">
                                    <h3  className="card-content" style={{border:'2px solid white', borderRadius:'50px', display:'flex', marginTop:'40px',padding:'15px 0px', justifyContent:'center', color: 'white' }}src="">All Deplomas</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4" style={{ cursor: 'pointer' }} >
                        <div className="card" >
                            <div className="card-image-wrapper">
                                <img src={img} alt="Card 3" />
                                <div className="card-img-overlay">
                                    <h3 className="card-content" style={{ border:'2px solid white', borderRadius:'50px', display:'flex', marginTop:'40px', padding:'15px 0px', justifyContent:'center', color: 'white' }} src="">All Short Courses</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
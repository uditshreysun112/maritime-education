import industry from "./assets/wilson-halligan.png"
import SYR from "./assets/SYR-Logo.png"




export const Industry = () => {
    return (
        <>
            <div id="img-boat" className="container-fluid">
                <div className="content">
                    <h1 id="heading" >Contact the Maritime Training Academy</h1>
                    <p style={{ fontSize: '25px', fontFamily: 'arial', color: "rgb(224, 224, 224)" }}>We’re here to help find the right course for you.<br /></p>
                </div>
            </div>
            <div className="container" style={{ marginTop: '60px' }}>
                <h1 style={{ fontFamily: 'Playfair Display, serif' }}>Completed a Course?</h1>
                <p className="text-muted">We are partnered with a diverse array of maritime recruitment companies. These industry leading partners recognise the value of our courses and seek out <br /> MTA trained individuals for their recruitment needs.</p>
                <h1 style={{ fontFamily: 'Playfair Display, serif' }}>Find a role that’s right for you.</h1>
                <p className="text-muted">Discover boundless maritime career opportunities across a wide selection of sectors, effectively utilising the skills and knowledge you developed from your <br /> Maritime Training Academy diploma. Explore our partners websites with onshore and offshore roles, guiding you towards a prosperous future in this growing  <br />industry. From captaining vessels to mastering engineering, there are maritime vacancies available for you no matter what path you wish to follow. Our  <br />partnered companies Wilsonhalligan and SYR both have a wide range of maritime jobs available, spanning many different sectors and experience levels. It is <br />worth regularly checking back as new vacancies are posted regularly.</p>
            </div>
            <div className="container-fluid " style={{backgroundColor:'rgb(28, 30, 43)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 text-light">
                            <h1 style={{paddingTop:'80px',fontFamily:'Playfair Display, serif'}}>Wilsonhalligan Recruitment</h1>                        
                                <p>Our recruitment partners, Wilsonhalligan, are a team of dedicated consultants with first hand seagoing experience and understand the unique needs and challenges of the superyacht industry. Matching candidates with opportunities on some of the worlds’ most prestigious superyachts, they take the time to understand both candidates and yacht owners, ensuring a perfect fit for both parties.</p>
                                <p>Their shoreside department brings a wealth of experience in the sector, securing talent for marine businesses globally. They have a broad portfolio of clients from leading yacht management companies to small and medium enterprises, as well as working with yacht builders, brokers, refit yards and suppliers of luxury goods.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={industry} className="img-fluid rounded-start" alt="..." style={{height:'90%' , paddingTop:"100px", paddingBottom:'50px', paddingLeft:'10px'}}/>
                        </div>
                    </div>
                    <button className="maritime">VIEW MARITIME VACANCIES</button>
                </div>
            </div>
            <div className="container-fluid " style={{backgroundColor:'rgb(71, 71, 71)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={SYR} className="img-fluid rounded-start" alt="..." style={{height:'90%' , paddingTop:"100px", paddingBottom:'50px', paddingLeft:'10px'}}/>
                        </div>
                        <div className="col-md-8 text-light">
                            <h1 style={{paddingTop:'80px',fontFamily:'Playfair Display, serif'}}>Superyacht Recruiter</h1>                        
                                <p>Get in touch with our partners SYR, who are global shoreside recruitment specialists. With over 20 years of experience across the team, they work with seafarers and shoreside applicants to identify and place them in exciting new positions. Their clients include some of the most prestigious brands in yachting, ranging from the ultra-boutique to the large international corporate employers, catering for the requirements of any applicant.</p>
                                <p>Alongside their recruitment services, they offer in-depth career advice, salary benchmarking and CV/Interview coaching to help identify the perfect position for applicants. Whilst they work across shoreside as a whole, they specialise in design, engineering, brokerage and yacht management vacancies.</p>
                    <button className="maritime mt-5">VIEW MARITIME VACANCIES</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
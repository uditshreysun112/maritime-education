import tanker from "./assets/tanker.jpg"
import PBIBS from "./assets/PBIBS.jpg"
import Yacht from "./assets/Yacht.jpg"
import Biaca from "./assets/Bianca.jpg"
import boat from "./assets/boat.png"
import stock from "./assets/iStock.jpg"
// import img from "./assets/maritime_img.jpg"


export const News = () => {
    return (
        <>
            <div id="img-boat" className="container-fluid">
            <div className="content">
                <h1 id="heading" >Latest News</h1>
                <p style={{ fontSize: '25px',fontFamily:'arial', color: "rgb(224, 224, 224)" }}>Keep up to date with the latest courses, what’s happening in the industry, and more<br /></p>
            </div>
            </div>

            <div className="container" style={{marginTop:'80px'}}>
                <div className="row">
                    <div className="col-md-4">
                        <div id="foot-card" className="caontainer" style={{ width: '18rem' }}>
                            <img src={tanker} className="card-img-top" alt="..." />
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
                            <img src={Biaca} className="card-img-top" alt="..." />
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
                            <img src={boat} className="card-img-top" alt="..." />
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
            <div className="container" style={{marginTop:'80px'}}>
                <div className="row">
                    <div className="col-md-4">
                        <div id="foot-card" className="caontainer" style={{ width: '18rem' }}>
                            <img src={Yacht} className="card-img-top" alt="..." />
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
                            <img src={stock} className="card-img-top" alt="..." />
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
                            <img src={PBIBS} className="card-img-top" alt="..." />
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
        </>
    );
};
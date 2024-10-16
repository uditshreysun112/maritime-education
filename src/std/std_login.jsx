import '../std/Style.css'
import backgroundImage from '../assets/Yatch_wallpaper.jpg';
import { FaUser, FaLock } from 'react-icons/fa';


export const Std_login = () => {
    return (
        <>
            <div id='back' className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
                <div className="wrapper">
                    <form action="">
                        <h1 className=''>Login</h1>
                        <div className="input-box mt-5">
                            <input id='int' type="text" style={{ marginLeft: '10px' }} placeholder='  Username' required />
                            <FaUser id='Fauser' size={15} />
                        </div>
                        <div className="input-box mt-4">
                            <input id='pas' type="password" style={{ marginLeft: '10px' }} placeholder='  Password' required />
                            <FaLock id='Falock' size={15} />
                        </div>
                
                        <div className="container">
                            {/* <div className="card"> */}

                                <div className='row mx-3'>
                                    <div className="col-md-6">
                                        <p className='text-start text-light'><input type="checkbox" />Remember me</p>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <a href="" style={{textDecoration:'none', color:'white', fontWeight:'bold'}}>Forget Password?</a>
                                    </div>
                                </div>
                            {/* </div> */}
                            {/* <a className='text-end' href="">Forget Password?</a> */}
                        </div>
                        <div className="text-center mt-5">
                            <button type='submit' className='btn-1'>Login</button>
                        </div>
                        <div className="register-link text-center text-white mt-4">
                            <p>Don't you have an acount?  <a href="" style={{textDecoration:'none',color:'white', fontWeight:'bold'}}>Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
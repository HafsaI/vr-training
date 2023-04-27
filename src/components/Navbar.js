import React from 'react';
import { useContext} from "react";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Report from './Report';
import SignIn from './SignIn';
import WebcamVideo from './WebcamVideo';
import SignUp from './SignUp';
import { LoginContext, UserContext } from "../AppContext/Context";
import SignOut from './SignOut';
import profilePic from '../../src/images/profile_default.png';
import darrow from '../../src/images/down-arrow.png'
import arrow from '../../src/images/arrow.png';
import GetStarted from './GetStarted';
import StartSession from './StartSession';
import Upload from './Upload';
import Home from './Home';

function Navbar() {
  const { user, setUser } = useContext(LoginContext);
  const { userdoc, setUserDoc } = useContext(UserContext);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const LoginBtn = (
    <div className="linkLogin btnLogin">
      <Link to='/login' target='_self' className='white'>Login</Link>
    </div>
  );

  const toggleMenu = () => {
    let subMenu = document.getElementById('subMenu');
    subMenu.classList.toggle("open-menu");
  };

  return (
    <div className='navbar-wrapper'>
      <BrowserRouter>
        <nav className="nab">
          <div className="nab-left">
            <img src={profilePic} alt="Logo" className="imgSmall" />
            <span>  </span>
            <span className='navbar-heading'>Manifest</span>
          </div>

          <div className='nab-right'>
            <div className='nab-right-inner'  style={{ display: 'inline-flex' }}>
              <a className='nab-item'><Link to='/' target='_self'>Home</Link></a>
              {JSON.stringify(user) === '{}' || user == null || user === Object ? LoginBtn : null}
              {JSON.stringify(user) !== '{}' && user != null && <a className='nab-item'><Link to='/report' target='_self'>Report</Link></a>}
              {JSON.stringify(user) !== '{}' && user != null && <a className='nab-item'><Link to='/upload' target='_self'>Upload</Link></a>}
              {JSON.stringify(user) !== '{}' && user != null && <a className='nab-item'><Link to='/startsession' target='_self'>Start</Link></a>}
              {JSON.stringify(user) === '{}' || user == null || user === Object ? null :
                <div  classname = "profile" style={{ display: "flex", alignItems: "center" }}>
                  <img src={profilePic} alt="Profile" className='imgSmall profilePic' />
                  <img src={darrow} className='imgVSmall marginProfile darrow' onClick={toggleMenu} />

                  <div className='sub-menu-wrap' id="subMenu" style={{zIndex:4}}>
                    <div className='sub-menu'>
                      <div className='user-info'>
                        <h5>{userdoc.name}</h5>
                      </div>
                      <hr />
                      <SignOut />
                      <a><Link to='/getstarted' target='_self' className='linkLogout'>Get Started<img src={arrow} className="imgSmall"/></Link></a>
                    </div>
                  </div>
                </div>
              }
            </div>
            {/* <div className="menu-icon">
            <img src={profilePic} className='imgSmall'/>
          </div> */}
          {isMobile && (
            <div className="menu-icon">
              <img src={profilePic} className='imgSmall'/>
            </div>
          )}
          </div>
          
  
          
        </nav>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/vr-training/' element={<Home />} />
            <Route exact path='/record' element={<WebcamVideo />} />
            <Route exact path='/report' element={<Report />} />
            <Route exact path='/login' element={<SignIn />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/getstarted' element={<GetStarted/>} />
            <Route exact path='/startsession' element={<StartSession/>} />
            <Route exact path='/upload' element={<Upload/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default Navbar;
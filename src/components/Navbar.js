import React from 'react';
import { useContext } from "react";
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

  const LoginBtn = (
    <button className="btnLogin linkLogin">
      <Link to='/login' target='_self' className='white'>Login</Link>
    </button>
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
            <span className='navbar-heading'>Empowered</span>
          </div>
          <div className="nab-right">
            <a className='nab-item'><Link to='/' target='_self'>Home</Link></a>
            {JSON.stringify(user) === '{}' || user == null || user === Object ? LoginBtn : null}
            {JSON.stringify(user) !== '{}' && user != null && <a className='nab-item'><Link to='/report' target='_self'>Report</Link></a>}
            {JSON.stringify(user) !== '{}' && user != null && <a className='nab-item'><Link to='/upload' target='_self'>Upload</Link></a>}
            {JSON.stringify(user) !== '{}' && user != null && <a className='nab-item'><Link to='/startsession' target='_self'>Start</Link></a>}
            {JSON.stringify(user) === '{}' || user == null || user === Object ? null :
              <>
                <img src={profilePic} alt="Profile" className='imgSmall'/>
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
              </>
            }
          </div>
        </nav>
          <Routes>
            <Route exact path='/' element={<Home />} />
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
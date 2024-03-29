import React from 'react';
import { useContext} from "react";
import { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Report from './Report';
import SignIn from './SignIn';
import WebcamVideo from './WebcamVideo';
import SignUp from './SignUp';
import { LoginContext, UserContext } from "../AppContext/Context";
import SignOut from './SignOut';
import profilePic from '../../src/images/profile_default.png';
import menu from '../../src/images/menu.png'
import darrow from '../../src/images/down-arrow.png'
import logo from '../../src/images/logo2.png'
import rightarrows from '../../src/images/rightarrows.svg'
import arrow from '../../src/images/arrow.png';
import GetStarted from './GetStarted';
import StartSession from './StartSession';
import Upload from './Upload';
import Home from './Home';

function Navbar() {
  const { user, setUser } = useContext(LoginContext);
  const { userdoc, setUserDoc } = useContext(UserContext);
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


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

  const toggleMenuRight = () => {
    setShowMenu(!showMenu)
    // let menu = document.getElementById('menu-right');
    // menu.classList.toggle("open-menu-right");
  };

  return (
    <div className='navbar-wrapper'>
      <BrowserRouter>
        <nav className="nab">
          <div className="nab-left">
            <img src={logo} alt="Logo" className="imgLogo" />
            <span>  </span>
            <span className='navbar-heading orbitron'>Manifest</span>
          </div>

          <div className='nab-right'>
            { !isMobile &&
            <div className='nab-right-inner'  style={{ display: 'inline-flex' }}>
              <a className='nab-item' style={{paddingTop:'2px'}}><NavLink to='/' target='_self'>Home</NavLink></a>
              {JSON.stringify(user) === '{}' || user == null || user === Object ? LoginBtn : null}
              {JSON.stringify(user) !== '{}' && user != null && <a className='nab-item' style={{paddingTop:'2px'}}><NavLink to='/startsession' target='_self'>Start</NavLink></a>}
              {JSON.stringify(user) !== '{}' && user != null && <a className='nab-item' style={{paddingTop:'2px'}}><NavLink to='/report' target='_self'>Report</NavLink></a>}
              {JSON.stringify(user) !== '{}' && user != null && <a className='nab-item' style={{paddingTop:'2px'}}><NavLink to='/upload' target='_self'>Upload</NavLink></a>}
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
                      <a><NavLink to='/getstarted' target='_self' className='linkLogout' style={{  display:'flex' , justifyContent: 'space-between', alignItems:'center'}}> Get Started<img src={rightarrows} className="menuarrows"/></NavLink></a>
                      <a  style={{  display:'flex' , justifyContent: 'space-between', alignItems:'center'}}><SignOut /><img src={rightarrows} className="menuarrows"/></a>
                    </div>
                  </div>
                </div>
              }
            </div>
            }
            {/* <div className="menu-icon">
            <img src={profilePic} className='imgSmall'/>
          </div> */}
          {isMobile && (
            <>
              {/* <div className='menu-right-wrap'> */}
                { showMenu && <div className='menu-right menu-right-wrap'id="menu-right">
                  {/* {console.log('in menu-right')} */}
                  <a className='menu-item'><NavLink to='/' target='_self'>Home</NavLink></a>
                  <hr/>
                  {JSON.stringify(user) === '{}' || user == null || user === Object ? <a className='menu-item'><NavLink to='/login' target='_self'>Login</NavLink></a> : null}
                  {JSON.stringify(user) !== '{}' && user != null && <><a className='menu-item'><NavLink to='/report' target='_self'>Report</NavLink></a><hr/></>}
                  {JSON.stringify(user) !== '{}' && user != null && <><a className='menu-item'><NavLink to='/upload' target='_self'>Upload</NavLink></a><hr/></>}
                  {JSON.stringify(user) !== '{}' && user != null && <><a className='menu-item'><NavLink to='/startsession' target='_self'>Start</NavLink></a><hr/></>}              
                  {JSON.stringify(user) !== '{}' && user != null && <><a><NavLink to='/getstarted' target='_self' className='linkLogout'>Get Started</NavLink></a><hr/></>}
                  { JSON.stringify(user) !== '{}' && user != null && <><SignOut/></>}
                  <hr/>
                </div>}
              {/* </div> */}
              <div className="menu-icon">
                <img src={menu} className='imgSmall menu-right-img' onClick={toggleMenuRight} />
              </div>
            </>
            
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
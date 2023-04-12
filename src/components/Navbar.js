import React from 'react'
import {useContext} from "react";
import {BrowserRouter, Routes, Route, Redirect, Link } from "react-router-dom";
import Report from './Report'
import Home from './Home'
import SignIn from './SignIn'
import WebcamVideo from './WebcamVideo';
import SignUp from './SignUp';
import { LoginContext,  UserContext} from "../AppContext/Context";
import SignOut from './SignOut'

import profilePic from '../../src/images/profile_default.png'


function Navbar(){
  const {user,setUser} = useContext(LoginContext); 
  const {userdoc,setUserDoc} = useContext(UserContext);
  const LoginBtn = (
    <button className="btnLogin linkLogin"><Link to='/login' target='_self' className='white'>Login</Link></button>
  )

  const toggleMenu = () => {
    let subMenu = document.getElementById('subMenu');
    subMenu.classList.toggle("open-menu")
  }

  // TODO: [Batool] add Empowered on left hand side of navbar 
  // Problem coming on the above todo
  return (
    <div className='navbar-wrapper'>
      {/* <span className='navbar-heading'>Empowered</span> */}
      <BrowserRouter>
          <nav className="nab">
              <a className='nab-item'><Link to='/' target='_self'>Home</Link></a>
              { JSON.stringify(user) !== '{}' && user != null && <a className='nab-item'><Link to='/record' target='_self'>Record</Link></a>}
              { JSON.stringify(user) !== '{}' && user != null && <a className='nab-item'><Link to='/report' target='_self'>Report</Link></a>}
              {/* { console.log("[Navbar] user: ", user)} */}
              {/* { console.log(" JSON.stringify(user) === '{}",  JSON.stringify(user) === '{}')} */}
              { JSON.stringify(user) === '{}' || user == null || user === Object? LoginBtn:null }
              
              {JSON.stringify(user) === '{}' || user == null || user === Object? null :
              <>
              <img src={profilePic} className='imgSmall marginProfile' onClick={toggleMenu}/>
              
              <div className='sub-menu-wrap' id="subMenu">
                <div className='sub-menu'>
                  <div className='user-info'>
                    {/* <img src={profilePic} className='profilePic'/> */}
                    <h5>{userdoc.name}</h5>
                  </div>
                  <hr/>
                  <SignOut/>
                </div>
              </div>
              </>
}             
              {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <img src={profilePic} className='imgSmall'/>
              </a> */}
          </nav>
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/record' element={<WebcamVideo/>}></Route>
              {/* <Route exact path='/record' element={<Webcam2/>}></Route> */}
              <Route exact path='/report' element={<Report/>}></Route>
              <Route exact path='/login' element={<SignIn/>}></Route>
              <Route exact path='/signup' element={<SignUp/>}></Route>
          </Routes>
      </BrowserRouter>
      {console.log('[navbar] name of user: ', userdoc.name)}
    </div>
  )
}

export default Navbar
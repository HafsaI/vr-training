import React from 'react'
import {BrowserRouter, Routes, Route, Redirect, Link } from "react-router-dom";
import History from './History'
import Home from './Home'
import SignIn from './SignIn'
import WebcamVideo from './WebcamVideo';
import SignUp from './SignUp';

function Navbar(props){    
  return (
    <div>
      <BrowserRouter>
          <nav className="nab">
              <a><Link to='/' target='_self'>Home</Link></a>
              { props.user && <a><Link to='/record' target='_self'>Record</Link></a>}
              { props.user && <a><Link to='/history' target='_self'>History</Link></a>}
              { !props.user ?
                <button className="btnLogin linkLogin"><Link to='/login' target='_self' className='white'>Login</Link></button> :
                < >
                  <button className="btnLogin linkLogout"><Link to='/login' target='_self' className='white'>Logout</Link></button> 
                  <p className='usernameDisplay'>Hi, props.user.username</p>
                </> 
              }
          </nav>
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/record' element={<WebcamVideo/>}></Route>
              <Route exact path='/history' element={<History/>}></Route>
              <Route exact path='/login' element={<SignIn/>}></Route>
              <Route exact path='/signup' element={<SignUp/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
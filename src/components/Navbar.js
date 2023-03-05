import React from 'react'
import {BrowserRouter, Routes, Route, Redirect, Link } from "react-router-dom";
import History from './History'
import Home from './Home'
import SignIn from './SignIn'
import WebcamVideo from './WebcamVideo';

function Navbar(props){    
  return (
    <div>
      <BrowserRouter>
          <nav className="nab">
              <a><Link to='/' target='_self'>Home</Link></a>
              { props.user && <a><Link to='/record' target='_self'>Record Video</Link></a>}
              { props.user && <a className ="linkHistory"><Link to='/history' target='_self'>History</Link></a>}
              { !props.user ?
                <button className="btnLogin linkLogin"><Link to='/login' target='_self'>Login</Link></button> :
                < >
                <p className='usernameDisplay'>Hi, props.user.username</p>
                <button className="btnLogin linkLogin"><Link to='/login' target='_self'>Logout</Link></button>
                </> 
              }
          </nav>
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/record' element={<WebcamVideo/>}></Route>
              <Route exact path='/history' element={<History/>}></Route>
              <Route exact path='/login' element={<SignIn/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
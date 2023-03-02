import React from 'react'
import {BrowserRouter, Routes, Route, Redirect, Link } from "react-router-dom";
import History from './History'
import Home from './Home'
import SignIn from './SignIn'
import WebcamVideo from './WebcamVideo';

function Navbar(){    
  return (
    <div>
      <BrowserRouter>
          <nav className="nab">
              <a><Link to='/' target='_self'>Home</Link></a>
              <a><Link to='/record' target='_self'>Record Video</Link></a>
              <a className ="linkHistory"><Link to='/history' target='_self'>History</Link></a>
              <a className="linkLogin"><Link to='/login' target='_self'>Login</Link></a>
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
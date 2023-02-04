import React from 'react'
import {BrowserRouter, Routes, Route, Redirect, Link } from "react-router-dom";
import History from './History'
import Home from './Home'
import Signin from './Signin'

function Navbar(){    
  return (
    <div>
      <BrowserRouter>
          <nav className="navbar">
              <a><Link to='/' target='_self'>Home</Link></a>
              <a><Link to='/history' target='_self'>History</Link></a>
              <a><Link to='/login' target='_self'>Login</Link></a>
          </nav>
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/history' element={<History/>}></Route>
              <Route exact path='/login' element={<Signin/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
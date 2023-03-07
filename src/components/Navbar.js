import React from 'react'
import {useContext} from "react";
import {BrowserRouter, Routes, Route, Redirect, Link } from "react-router-dom";
import History from './History'
import Home from './Home'
import SignIn from './SignIn'
import WebcamVideo from './WebcamVideo';
import SignUp from './SignUp';
import { LoginContext} from "../AppContext/Context";
import SignOut from './SignOut'

function Navbar(){
  const {user,setUser} = useContext(LoginContext); 


  const LoginBtn = (
    <button className="btnLogin linkLogin"><Link to='/login' target='_self' className='white'>Login</Link></button>
  )
  
  // TODO: add profile icon if user is logged in
  // TODO: add VocalizeX on left hand side of navbar
  return (
    <div>
      <BrowserRouter>
          <nav className="nab">
              <a><Link to='/' target='_self'>Home</Link></a>
              { JSON.stringify(user) !== '{}' && user != null && <a><Link to='/record' target='_self'>Record</Link></a>}
              { JSON.stringify(user) !== '{}' && user != null && <a><Link to='/history' target='_self'>History</Link></a>}
              {console.log("navbaruser", user)}
              {console.log(" JSON.stringify(user) === '{}",  JSON.stringify(user) === '{}')}
              { JSON.stringify(user) === '{}' || user == null || user === Object? LoginBtn:<SignOut/> }
              
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
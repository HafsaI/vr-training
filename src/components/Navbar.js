import React from 'react'
import {useContext} from "react";
import {BrowserRouter, Routes, Route, Redirect, Link } from "react-router-dom";
import History from './History'
import Home from './Home'
import SignIn from './SignIn'
import WebcamVideo from './WebcamVideo';
import SignUp from './SignUp';
import { LoginContext,  UserContext} from "../AppContext/Context";
import SignOut from './SignOut'
import Webcam2 from './Webcam2'

function Navbar(){
  const {user,setUser} = useContext(LoginContext); 
  const {userdoc,setUserDoc} = useContext(UserContext);
  const LoginBtn = (
    <button className="btnLogin linkLogin"><Link to='/login' target='_self' className='white'>Login</Link></button>
  )

  // TODO: [Batool] add profile icon if user is logged in
  // TODO: [Batool] add Empowered on left hand side of navbar and change VocalizeX to Empowered everywhere else
  return (
    <div>
      <BrowserRouter>
          <nav className="nab">
              <a><Link to='/' target='_self'>Home</Link></a>
              { JSON.stringify(user) !== '{}' && user != null && <a><Link to='/record' target='_self'>Record</Link></a>}
              { JSON.stringify(user) !== '{}' && user != null && <a><Link to='/history' target='_self'>History</Link></a>}
              {/* { console.log("[Navbar] user: ", user)} */}
              {/* { console.log(" JSON.stringify(user) === '{}",  JSON.stringify(user) === '{}')} */}
              { JSON.stringify(user) === '{}' || user == null || user === Object? LoginBtn:<SignOut/> }
              
          </nav>
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/record' element={<WebcamVideo/>}></Route>
              {/* <Route exact path='/record' element={<Webcam2/>}></Route> */}
              <Route exact path='/history' element={<History/>}></Route>
              <Route exact path='/login' element={<SignIn/>}></Route>
              <Route exact path='/signup' element={<SignUp/>}></Route>
          </Routes>
      </BrowserRouter>
      {/* // TODO: [Batool] you can access name this way, you can show logged in user's name */}
      {console.log('[navbar] name of user: ', userdoc.name)}
    </div>
  )
}

export default Navbar
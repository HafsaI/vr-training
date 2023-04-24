import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import { LoginContext } from './AppContext/Context';
import { UserContext } from './AppContext/Context';

import { useState } from 'react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Report from './components/Report';
import SignIn from './components/SignIn';
import WebcamVideo from './components/WebcamVideo';
import SignUp from './components/SignUp';
import GetStarted from './components/GetStarted';
import StartSession from './components/StartSession';
import Upload from './components/Upload';
import Home from './components/Home';


function App() {
  const [user, setUser] = useState({})
  const [userdoc,setUserDoc] = useState({})
  return (
    <UserContext.Provider value={{userdoc,setUserDoc}}  >
      <LoginContext.Provider value={{user, setUser}}  className="App">
        <Navbar />
        <Footer/>
      </LoginContext.Provider>
    </UserContext.Provider>

  );
}

export default App;

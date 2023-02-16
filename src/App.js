import './App.css';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginContext } from './AppContext/Context';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({})
  return (
    // <div className="App">
    <LoginContext.Provider value={{user, setUser}} className="App" >
      <Navbar/>
    </LoginContext.Provider>
    // </div>

  );
}

export default App;

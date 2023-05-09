import React from 'react'
import { useState, useContext} from "react";
import { Link } from 'react-router-dom'
import { LoginContext} from "../AppContext/Context";
import app from "../firebaseconfig";
import { getFirestore } from "@firebase/firestore";
import {  updateDoc, doc} from "firebase/firestore";

function StartSession() {
  const {user} = useContext(LoginContext);
  const [arduino_id_input, setCurrentArduino] = useState([]);
  // const [showNervousDiv, setShowNervousDiv] = useContext(NervousContext); // Add state variable
  const db = getFirestore(app);
  // const { showNervousDiv } = useContext(NervousContext);
  const [showMessage, setShowMessage] = useState(false)
  const [showSave, setShowSave] = useState(false)

  const setUserArduino = () => {
    updateDoc(doc(db, "users", user.uid), {
      arduinoId: arduino_id_input,
    });
    // setShowSave(''?false:true)
  }

  // const handleToggle = (e) => {
  //   setShowNervousDiv(!(e.target.value === "yes")); // Set state based on selected value
  // }

  return (
    <div className='center centerText'>

      {/* <div>
        <label htmlFor="nervous">Do you want to see your nervousness score?</label> <br/>
        <select name="nervous" id="nervous" style={{backgroundColor:'#8C8FFC',color:'white', border:'none', padding:'2% 20% 2% 20%'}} onChange={handleToggle}>
          <option value="yes">No</option>
          <option value="no">Yes</option>
        </select>
      </div>
      <br/><br/> */}

      {/* Conditionally render nervous-div */}
      {(
        <div className='nervous-div'>
          <label htmlFor="heart-rate">Enter Glove ID:</label> 
          <input name="heart-rate" onChange={(e) => {
              setCurrentArduino(e.target.value);
              if (e.target.value === '1') {
                setShowMessage(true);
              } else if(e.target.value != '') {
                setShowMessage(false);
              }
            }}/>          
            <button className='heartrateBtn' onClick={setUserArduino} >Save ID</button>
            {!showMessage && <p style={{color:'red'}}>Glove ID Unavailable. Please give correct ID.</p>}
            {/* {showSave && <p style={{color:'#8C8FFC'}}>Glove ID Saved</p>} */}
        </div>
      )}

      <br/><br/>

      <div>
        <p>Start Recording:</p>
        <button className='heartrateBtn noLine'><Link to='/record' target='_self' className=' heartrateBtn noLine'>Open Webcam</Link></button>
      </div>

    </div>
  )
}

export default StartSession

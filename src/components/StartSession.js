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
  const db = getFirestore(app);

  const setUserArduino = () => {
    updateDoc(doc(db, "users", user.uid), {
      arduinoId: arduino_id_input,
    });
  }

  return (
    <div className='center centerText'>
      <div>
        {/* 1-  Get input & save ard_id into users collection */}
        <label forHtml="heart-rate">Enter Arduino ID:</label> 
        <input name="heart-rate" onChange={(e) => {setCurrentArduino(e.target.value)}}/>
        <button className='heartrateBtn' onClick={setUserArduino} >Save Arduino ID</button>
        
        
      </div>
      <br/>
      <br/>
      {/* <div>
        <h6>Get your equipment ready</h6>
      </div>
      <br/>
      <div>
        <h6>&</h6>
      </div>
      <br/> */}
      <div >
        <p>Start Recording:</p>
        <button className='heartrateBtn noLine'><Link to='/record' target='_self' className=' heartrateBtn noLine'>Open Webcam</Link></button>
      </div>
      {/* <br/>
      <br/> */}
      {/* <div>
        <p>Upload Slides:</p>
        <input type="file"/>
      </div> */}
    </div>
  )
}

export default StartSession
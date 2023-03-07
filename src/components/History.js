import React from 'react'
import { useState, useEffect , useContext} from "react";
import app from "../firebaseconfig";
import { getFirestore } from "@firebase/firestore";
import {
  collection, getDocs,} from "firebase/firestore";
import { LoginContext} from "../AppContext/Context";
import LineChart from './LineChart';

// TODO: rename everything of 'history' to report

function History(){
  const {user} = useContext(LoginContext);
  const [userSession, setUserSessionScores] = useState([]);

  useEffect(() => {
    const db = getFirestore(app);
    const scoresCollectionRef = collection(db, "training_sessions");
    const getUserSessionScores = async () => {
    const data = await getDocs(scoresCollectionRef);
    setUserSessionScores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
    };
    
    getUserSessionScores();

  }, []);


  
  return (
    <div class="wrapper">
      <div class="tabs">
        <div class="tab" id='divTab1'>
          <input type="radio" name="css-tabs" id="tab-1" class="tab-switch"/>
          <label for="tab-1" class="tab-label">Overall Progress Report</label>
          <div class="tab-content">
            <LineChart/>
          </div>
        </div>
        <div class="tab">
          <input type="radio" name="css-tabs" id="tab-2" checked class="tab-switch"/>
          <label for="tab-2" class="tab-label">Last Session Report</label>
          <div class="tab-content">
            {userSession.map((session) => {
              return ( 

              session.user_id === user?.uid?

              // batool put all scores in a component and call a component here that does all this and give key to component to solve the warning error 
              <div> 
              <h5>Speech Analysis</h5>
              <hr/>
              <p> Clarity <span className='rightAlign'>{session.clarity_score}/10</span></p>
              <hr/>
              <p> Pauses <span className='rightAlign'>{session.pauses_score}/10</span></p>
              <hr/>
              <p> Pronunciation <span className='rightAlign'>{session.pronunciation_score}/10</span></p>
              <hr/>
              <p> SpeakingRate <span className='rightAlign'>{session.speakingrate_score}/10</span></p>
              <hr/>
              <p> Listenability <span className='rightAlign'>{session.listenability_score}/10</span></p>
              <hr/>
              <h5 className='analysisType'>Body Language Analysis</h5>
              <hr/>
              <p> Posture <span className='rightAlign'>{session.posture_score}/10</span></p>
              <hr/>
              <p> Gesture <span className='rightAlign'>{session.gesture_score}/10</span></p>
              <hr/>
              <p> Movement <span className='rightAlign'>{session.movement_score}/10</span></p>
              <h5 className='analysisType'>Nervousness Analysis</h5>
              <hr/>
              <p> Nervousness <span className='rightAlign'>{session.nervousness_score}/10</span></p>
             
             </div>
              : null
              )

            })}
          </div>
        </div>
      </div>
    </div>
    )
}


export default History







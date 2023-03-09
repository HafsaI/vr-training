import React from 'react'
import { useState, useEffect , useContext} from "react";
import app from "../firebaseconfig";
import { getFirestore } from "@firebase/firestore";
import {
  collection, getDocs,} from "firebase/firestore";
import { LoginContext} from "../AppContext/Context";
import LineChart from './LineChart';
import Scores from './Scores';

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
              <Scores session = {session}/>
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





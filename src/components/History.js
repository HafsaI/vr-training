import React from 'react'
import { useState, useEffect , useContext} from "react";
import app from "../firebaseconfig";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs, doc, onSnapshot} from "firebase/firestore";
import { LoginContext} from "../AppContext/Context";
import LineChart from './LineChart';
import Scores from './Scores';
// import { toDimension } from 'chart.js/dist/helpers/helpers.core';

// TODO: [Batool] rename everything of 'history' to report

function History(){
  const {user} = useContext(LoginContext);
  const [userSession, setUserSessionScores] = useState([]);
  const [liveSession, setliveSession] = useState([])
  useEffect(() => {
    const db = getFirestore(app);
    const scoresCollectionRef = collection(db, "training_sessions");
    const getUserSessionScores = async () => {
    const data = await getDocs(scoresCollectionRef);
    setUserSessionScores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
    };
    
    getUserSessionScores();

    // TODO: [Hafsa] Change id6 to the current/latest training session id of user
    const unsub = onSnapshot(doc(db, "training_sessions", "id6"), (doc) => {
      console.log("Current data History: ", doc.data().session);
      setliveSession(doc.data().session);
  });

  }, []);

  /* TODO: [Batool] Write the clear format of data you want here for a particular graph
            for example what format do you want of all pauses score of that user */
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
             {/* TODO: [Hafsa]  Display directly latest session scores*/}
            {userSession.map((session) => {
              return ( 
              session.user_id === user?.uid?
              liveSession === false?
              <Scores session = {session}/>
              : null : null

              )

            })}
          </div>
        </div>
      </div>
    </div>
    )
}


export default History
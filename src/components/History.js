import React from 'react'
import { useState, useEffect , useContext} from "react";
import app from "../firebaseconfig";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs, getDoc, doc, onSnapshot} from "firebase/firestore";
import { LoginContext} from "../AppContext/Context";
import LineChart from './LineChart';
import Scores from './Scores';
// import { toDimension } from 'chart.js/dist/helpers/helpers.core';

// TODO: [Batool] rename everything of 'history' to report

function History(){
  const {user} = useContext(LoginContext);
  const [userSession, setUserSessionScores] = useState([]);
  const [liveSession, setliveSession] = useState([])
  const [currSessId, setcurrSessId] = useState([])
  const [lastSession, setlastSession] = useState([])
  const db = getFirestore(app);

  useEffect(() => {
    const db = getFirestore(app);
    const scoresCollectionRef = collection(db, "training_sessions");
    const getUserSessionScores = async () => {
      const data = await getDocs(scoresCollectionRef);
      setUserSessionScores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
    };
    getUserSessionScores();
    console.log("[History] userid", user?.uid);  

    }, []);

    // TODO: [Hafsa] see if any loopholes in here when you check with pc proj

    useEffect(() => {
    //gets data of user that is logged in and latest training session id
    const docRef = doc(db, "users", user?.uid)
    getDoc(docRef)
    .then((doc) => {
      setcurrSessId(doc.data().currSessionId)
    })
    
    // console.log("currSessId", currSessId);
    // console.log("json", JSON.stringify(currSessId) !== '[]')
    // console.log("currSessId != false: ",  currSessId != false)

    if (JSON.stringify(currSessId) !== '[]' && currSessId != false ){

      const unsub = onSnapshot(doc(db, "training_sessions", currSessId), (doc) => {
        console.log("[History] Session Value: ", doc.data().session)
        setliveSession(doc.data().session)
        setlastSession(doc.data())
      })
    }

    }, [currSessId, liveSession]);

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
            
            {/* // Displaying directly latest session scores  */}
            {(JSON.stringify(currSessId) !== '[]' && currSessId != false)?
            lastSession?
              liveSession === false?
              <Scores session = {lastSession}/> : null : null 
            : null
            }
          </div>
        </div>
      </div>
    </div>
    )
}


export default History


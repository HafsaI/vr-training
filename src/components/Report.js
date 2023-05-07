import React from 'react'
import { useState, useEffect , useContext} from "react";
import app from "../firebaseconfig";
import { getFirestore } from "@firebase/firestore";
import { updateDoc, collection, getDocs, getDoc, doc, onSnapshot} from "firebase/firestore";
import { LoginContext} from "../AppContext/Context";
import Scores from './Scores';
import Graphs from './Graphs'
// import { toDimension } from 'chart.js/dist/helpers/helpers.core';

function Report(){
  const {user} = useContext(LoginContext);
  const [allSession, setAllSessionScores] = useState([]);
  const [liveSession, setliveSession] = useState([])
  const [currSessId, setcurrSessId] = useState([])
  const [lastSession, setlastSession] = useState([])
  const [currArduinoId, setcurrArduinoId] = useState([])
  const checkHeart = true
  

  const db = getFirestore(app);
  const userSessions = []

  const [detailed, setDetailed] = useState(false);
  const [short, setShort] = useState(false)

  const showDetailed = () => {
    setDetailed(true)
  }

  const showShort = () => {
    setShort(true)
  }

  // inserts nervousness score from curr ardid to curr session
  async function insertNScore() {
    const docRef = doc(db, "arduino_ids", currArduinoId)
    try {
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      updateDoc(doc(db, "training_sessions", currSessId), {
        nervousness_score: docSnap.data().n_score
      });
      
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const db = getFirestore(app);
    const scoresCollectionRef = collection(db, "training_sessions");
    const getAllSessionScores = async () => {
      const data = await getDocs(scoresCollectionRef);
      setAllSessionScores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
    };
    getAllSessionScores();
    console.log("[History] userid", user?.uid);  

    const docRef = doc(db, "users", user?.uid)
    getDoc(docRef)
    .then((doc) => {
      setcurrArduinoId(doc.data().arduinoId)
    })

    }, []);

    useEffect(() => {
    //gets data of user that is logged in and latest training session id
    // const docRef = doc(db, "users", user?.uid)
    // getDoc(docRef)
    // .then((doc) => {
    //   setcurrSessId(doc.data().currSessionId)
    // })

    // if curr session id changed is users
    if (user?.uid){
      console.log("users", user.uid)
      const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
        console.log("[Report] Current Session ID Value: ", doc.data().currSessionId)
        setcurrSessId(doc.data().currSessionId)
        setliveSession(doc.data().session)
      }) 
      }
    
    // if session value changed 
    if (JSON.stringify(currSessId) !== '[]' && currSessId != false ){

      const unsub = onSnapshot(doc(db, "training_sessions", currSessId), (doc) => {
        console.log("[Report] Session Value: ", doc.data().session)
        setliveSession(doc.data().session)
        setlastSession(doc.data())

        // 2 - if session == false: retrieve nervousness from ardid collection and put in inside curr training sess id  collec
        console.log('currarduinoid', currArduinoId)
        if (liveSession == false && checkHeart ){
          insertNScore()
        }
      })
    }

    }, [currSessId, liveSession]);

  return (
    <div class="wrapper">
      <div class="tabs">
        <div class="tab" id='divTab1'>
          <input type="radio" name="css-tabs" id="tab-1" class="tab-switch"/>
          <label for="tab-1" class="tab-label">Analytics</label>
          <div class="tab-content">
            {allSession.map((session) => {
              if (session.user_id === user?.uid && session.session !== true) {
                userSessions.push(session);
              }
              return null;
            })}
            <Graphs history={userSessions} />
          </div>
        </div>
        <div class="tab">
          <input type="radio" name="css-tabs" id="tab-2" checked class="tab-switch"/>
          <label for="tab-2" class="tab-label">Last Session</label>
          <div class="tab-content">
            <div>
              <p className='centerText'>For a quick but short analysis with just your speech scores, please click this:</p>
              <div  className='centerText'>
                <button className='btnScores' style={{marginBottom:'5%'}} onClick={showShort} >Short and quick analysis</button>
              </div>
              {/* // Displaying directly latest session scores  */}
              {(JSON.stringify(currSessId) !== '[]' && currSessId != false && short)?
              lastSession?
                liveSession === false?
                <Scores session = {lastSession}/> : null : null 
              : null
              }
              <p  className='centerText'  style={{marginTop:'5%'}} >For a detailed analysis with body language and nervousness scores, please click this: </p>
              <div  className='centerText'>
                <button className='btnScores' style={{marginBottom:'5%'}}  onClick={showDetailed}>Detailed analysis</button>
              </div>
            </div>
            {/* // Displaying directly latest session scores  */}
            {(JSON.stringify(currSessId) !== '[]' && currSessId != false && detailed)?
            lastSession?
              liveSession === false?
              <Scores session = {lastSession} quick={false}/> : null : null 
            : null
            }
            
          </div>
        </div>
      </div>
    </div>
    )
}


export default Report


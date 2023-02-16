import React from 'react'
import { useState, useEffect , useContext} from "react";
import app from "../firebaseconfig";
import { getFirestore } from "@firebase/firestore";
import {
  collection, getDocs,} from "firebase/firestore";
import { LoginContext} from "../AppContext/Context";



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
          <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch"/>
          <label for="tab-1" class="tab-label">Overall Progress Report</label>
          <div class="tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci sed dui placerat efficitur a at lorem. Suspendisse feugiat, massa in placerat tincidunt, augue urna tempor urna, vitae congue sapien massa in leo. Nunc id molestie tellus, ac volutpat enim. Nam at pulvinar purus. Vestibulum cursus tempus turpis sit amet porta. Aenean mattis felis eget dui porttitor placerat. Sed facilisis feugiat nunc ut aliquam. Nunc cursus mattis rutrum. Etiam condimentum a ex vel cursus.
          </div>
        </div>
        <div class="tab">
          <input type="radio" name="css-tabs" id="tab-2" class="tab-switch"/>
          <label for="tab-2" class="tab-label">Last Session Report</label>
          <div class="tab-content">
            <h4>Listenability</h4>
            {userSession.map((session) => {
              return ( 

              session.user_id === user?.uid?

              // batool put all scores in a component and call a component here that does all this and give key to component to solve the warning error 
              <div> 
              <p> Clarity: {session.clarity_score}</p>
              <p> Pauses: {session.pauses_score}</p>
              <p> Pronunciation: {session.pronunciation_score}</p>
              <p> SpeakingRate: {session.speakingrate_score}</p>
              <p> Listenability: {session.listenability_score}</p>
              <p> Posture: {session.posture_score}</p>
              <p> Gesture: {session.gesture_score}</p>
              <p> Movement: {session.movement_score}</p>
              <p> Nervousness: {session.nervousness_score}</p>
             
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







import React from 'react'
import { useState, useEffect } from "react";
import app from "../firebaseconfig";
import { getFirestore } from "@firebase/firestore";

import {
  collection, getDocs,
} from "firebase/firestore";


function History(){
  const db = getFirestore(app);


  const [users, setUsers] = useState([]);
  const [userSession, setUserSessionScores] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const scoresCollectionRef = collection(db, "training_sessions");


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getUserSessionScores = async () => {
      const data = await getDocs(scoresCollectionRef);
      setUserSessionScores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
    getUserSessionScores();
  }, []);

  return (
    <div class="wrapper">
      <div class="tabs">
        <div class="tab" id='divTab1'>
          <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch"/>
          <label for="tab-1" class="tab-label">Last Session Report</label>
          <div class="tab-content">

          </div>
        </div>
        <div class="tab">
          <input type="radio" name="css-tabs" id="tab-2" class="tab-switch"/>
          <label for="tab-2" class="tab-label">Overall Progress Report</label>
          <div class="tab-content">
            <h4>Listenability</h4>
            {users.map((user) => {
              return (
              
              <div> 
               <p> Name: {user.username}</p>
               <p> User ID: {user.id}</p>
              
              </div>
              )
            })}
             {userSession.map((session) => {
              return (
              
              <div> 
               <p> Clarity: {session.clarity_score}</p>
               <p>Speaking rate: {session.speaking_rate_score}</p>
              
              </div>
              )
            })}





          </div>
        </div>
      </div>
    </div>
    )
}


export default History
// import React from 'react'
// import { useState, useEffect , useContext} from "react";
// import app from "../firebaseconfig";
// import { getFirestore } from "@firebase/firestore";
// import { collection, getDocs, getDoc, doc, onSnapshot} from "firebase/firestore";
// import { LoginContext} from "../AppContext/Context";
// import Scores from './Scores';
// import readTextFile  from "./Read";

// function showSpeechScores(){

import React, { useState, useEffect } from 'react';
import Scores from './Scores';
// import axios from 'axios';

export default function ShowSpeechScores(){
    
//   const [scores, setScores] = useState(null);

//   const fetchScores = async () => {
//     try {
//       const response = await axios.post('http://localhost:5001/scores/');
//       setScores(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchScores().then(() => {
//       callback(); // Call the callback function once scores have been fetched
//     });
//   }, [callback]);
  console.log("inside show scores")
  const scores={"clarity_score": 10,
            "speakingrate_score": 6,
            "pauses_score": 7,
            "pronunciation_score": 7.0,
            "listenability_score": 6}
  return (
    <div className="wrapper">
      <div className="tabs">
        <div className="tab">
          <input type="radio" name="css-tabs" id="tab-2" checked className="tab-switch"/>
          <label htmlFor="tab-2" className="tab-label">Last Session Report</label>
          <div className="tab-content">
            {scores && <Scores session={scores} />}
          </div>
        </div>
      </div>
    </div>
  );
}





//     // Use the scores data as needed
//     // console.log(scores.Clarity);
//         // const {user} = useContext(LoginContext);
//         // const [lastSession, setlastSession] = useState([]);
//         // const db = getFirestore(app);
    
//         // useEffect(() => {
//         //   //gets data of user that is logged in and latest training session id
//         //   const docRef = doc(db, "users", user?.uid)
//         //   getDoc(docRef)
//         //   .then((doc) => {
//         //     setcurrSessId(doc.data().currSessionId)
//         //   })
    
//         //   if (JSON.stringify(currSessId) !== '[]' && currSessId != false ){
//         //     const unsub = onSnapshot(doc(db, "training_sessions", currSessId), (doc) => {
//         //       console.log("[History] Session Value: ", doc.data().session)
//         //       setlastSession(doc.data())
//         //     })
//         //   }
    
//         // }, [currSessId, liveSession]);
    
//         return (
//           <div class="wrapper">
//             <div class="tabs">
//               <div class="tab">
//                 <input type="radio" name="css-tabs" id="tab-2" checked class="tab-switch"/>
//                 <label for="tab-2" class="tab-label">Last Session Report</label>
//                 <div class="tab-content">
                
//                   {/* // Displaying directly latest session scores  */
                  
//                     <Scores session= {scores}/> 
                  
//                   }
                
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
// }
// export default showSpeechScores;

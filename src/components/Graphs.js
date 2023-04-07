import React from "react";
import LineChart from "./LineChart";

function Graphs({ history }) {
  // Saving scores in their respective arrays
  var sessionNos = [];

  for (var i = 1; i <= history.length; i++) {
    sessionNos.push(i);
  }

  var clarityScores = []

  for (var i = 0; i < history.length; i++){
    clarityScores.push(history[i].clarity_score)
  }

  var pausesScores = []

  for (var i = 0; i < history.length; i++){
    pausesScores.push(history[i].pauses_score)
  }

  var speakingRateScores = []

  for (var i = 0; i < history.length; i++){
    speakingRateScores.push(history[i].speakingrate_score)
  }
  
  var postureScores = []

  for (var i = 0; i < history.length; i++){
    postureScores.push(history[i].posture_score)
  }

  return (
    <div>
        <h4>Speech Analysis Scores</h4>
        <hr/>
        <h5>Clarity</h5>
        <LineChart className='lineChart' x={sessionNos} y={clarityScores} label='Clarity Scores'/>
        <h5>Pauses</h5>
        <LineChart x={sessionNos} y={pausesScores} label='Pauses Scores'/>
        <h5>Speaking Rate</h5>
        <LineChart x={sessionNos} y={speakingRateScores} label='Speaking Rate Scores'/>
        <h4 className='analysisType'>Body Language Analysis Scores</h4>
        <hr/>
        <h5>Posture</h5>
        <LineChart x={sessionNos} y={postureScores} label='Posture Scores'/>
    </div>
  );    
}
export default Graphs;
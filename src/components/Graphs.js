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
    if (history[i].clarity_comment == 'Average!'){
      clarityScores.push(0)
    }
    else if (history[i].clarity_comment == 'Below Average!'){
      clarityScores.push(-1)
    }
    else {
      clarityScores.push(1)
    }
  }

  // var pausesScores = []

  // for (var i = 0; i < history.length; i++){
  //   pausesScores.push(history[i].pauses_score)
  // }

  var speakingRateScores = []

  for (var i = 0; i < history.length; i++){
    if (history[i].speakingrate_comment == 'Average!'){
      speakingRateScores.push(0)
    }
    else if (history[i].speakingrate_comment == 'Below Average!'){
      speakingRateScores.push(-1)
    }
    else {
      speakingRateScores.push(1)
    }
  }

  var pronunciationScores = []

  for (var i = 0; i < history.length; i++){
    pronunciationScores.push(history[i].pronunciation_score)
  }
  
  var listenabilityScores = []

  for (var i = 0; i < history.length; i++){
    listenabilityScores.push(history[i].listenability_score)
  }
  
  // var postureScores = []

  // for (var i = 0; i < history.length; i++){
  //   postureScores.push(history[i].posture_score)
  // }

  return (
    <div style={{marginBottom:'20%'}}>
        
        <h4>Speech Analysis Scores</h4>
        <hr/>
        
        <h5>Clarity</h5>
        <p className="centerText">-1 = Below Average, 0 = Average, 1 = Above Average</p>
        <LineChart className='lineChart' x={sessionNos} y={clarityScores} label='Clarity Score'/>
        {/* <h5>Pauses</h5>
        <LineChart x={sessionNos} y={pausesScores} label='Pauses Scores'/> */}
        
        <h5>Speaking Rate</h5>
        <p className="centerText">-1 = Below Average, 0 = Average, 1 = Above Average</p>
        <LineChart x={sessionNos} y={speakingRateScores} label='Speaking Rate Score'/>
        
        <h5>Pronunciation</h5>
        <LineChart x={sessionNos} y={pronunciationScores} label='Pronunciation Percentage'/>

        <h5>Listenability</h5>
        <LineChart x={sessionNos} y={listenabilityScores} label='Listenability Percentage'/>
        
        <h4 className='analysisType'>Body Language Analysis Scores</h4>
        <hr/>
        
        <h5>Posture</h5>
        {/* <LineChart x={sessionNos} y={postureScores} label='Posture Scores'/> */}
    </div>
  );    
}
export default Graphs;
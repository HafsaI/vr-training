import React from "react";
import LineChart from "./LineChart";

function Graphs({ history }) {
  // Saving scores in their respective arrays
  var sessionNos = [];

  for (var i = 1; i <= history.length; i++) {
    sessionNos.push(i);
  }

  console.log('h', history.length)

  var clarityScores = []

  for (var i = 0; i < history.length; i++){
    // console.log(i, history[i].clarity_comment)
    if (history[i].clarity_comment == undefined){
      clarityScores.push(-2)
    }
    else if (history[i].clarity_comment === 'Average!'|| history[i].clarity_comment === "Average"){
      clarityScores.push(0)
    }
    else if (history[i].clarity_comment === "Below Average"|| history[i].clarity_comment === "Below Average!" ){
      clarityScores.push(-1)
    }
    else if (history[i].clarity_comment === 'Speak Clearly!' || history[i].clarity_comment === "Speak Clearly"){
      clarityScores.push(-2)
    }
    else if (history[i].clarity_comment === "Above Average!" || history[i].clarity_comment === "Above Average"){
      clarityScores.push(1)
    }
  }

  // var pausesScores = []

  // for (var i = 0; i < history.length; i++){
  //   pausesScores.push(history[i].pauses_score)
  // }

  var speakingRateScores = []

  for (var i = 0; i < history.length; i++){
    console.log(i, history[i].speakingrate_comment)
    if (history[i].speakingrate_comment===undefined ||history[ i].speakingrate_comment==='Speak Clearly!'){
      speakingRateScores.push(-2)
    }
    else if (history[i].speakingrate_comment == 'Average!' || history[i].speakingrate_comment == 'Average'){
      speakingRateScores.push(0)
    }
    else if (history[i].speakingrate_comment == 'Below Average!' || history[i].speakingrate_comment == 'Below Average'){
      speakingRateScores.push(-1)
    }
    else if (history[i].speakingrate_comment == 'Above Average!' || history[i].speakingrate_comment == 'Above Average') {
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

  var facingAudScores = []

  for (var i = 0; i < history.length; i++){
    facingAudScores.push(history[i].facingaud_score)
  }

  var feetDistScores = []

  for (var i = 0; i < history.length; i++){
    feetDistScores.push(history[i].feetdist_score)
  }

  var swayScores = []

  for (var i = 0; i < history.length; i++){
    swayScores.push(history[i].sway_score)
  }

  var nervousScores = []

  for (var i = 0; i < history.length; i++){
    nervousScores.push(history[i].nervousness_score)
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
        <p className="centerText">-2 = Unclear Voice, -1 = Below Average, 0 = Average, 1 = Above Average</p>
        <LineChart className='lineChart' x={sessionNos} y={clarityScores} label='Clarity Score'/>
        {/* <h5>Pauses</h5>
        <LineChart x={sessionNos} y={pausesScores} label='Pauses Scores'/> */}
        
        <h5>Speaking Rate</h5>
        <p className="centerText">-2 = Unclear Voice, -1 = Below Average, 0 = Average, 1 = Above Average</p>
        <LineChart x={sessionNos} y={speakingRateScores} label='Speaking Rate Score'/>
        
        <h5>Pronunciation</h5>
        <LineChart x={sessionNos} y={pronunciationScores} label='Percentage Score'/>

        <h5>Listenability</h5>
        <LineChart x={sessionNos} y={listenabilityScores} label='Listenability Percentage'/>
        
        <h4 className='analysisType'>Body Language Analysis Scores</h4>
        <hr/>
        
        <h5>Facing Audience</h5>
        <LineChart x={sessionNos} y={facingAudScores} label='Percentage of time you were facing audience'/>
        
        <h5>Feet Distance</h5>
        <LineChart x={sessionNos} y={feetDistScores} label='Percentage of time your feet were shoulder-width apart'/>
     
        <h5>Swaying</h5>
        <LineChart x={sessionNos} y={swayScores} label='Percentage of time you were swaying'/>
     
        <h4 className='analysisType'>Nervousness Score</h4>
        <hr/>
        
        <h5>Nervousness Analysis</h5>
        <LineChart x={sessionNos} y={nervousScores} label='Nervousness Score'/>
        
    </div>
  );    
}
export default Graphs;
import React from 'react'
import Score from './Score'

function Scores({session}) {
  return (
    <div> 
        <h5>Speech Analysis</h5>
        <hr/>
        <Score score={session.clarity_score} title='Clarity'/>
        <hr/>
        <Score score={session.pauses_score} title='Pauses'/>
        <hr/>
        <Score score={session.pronunciation_score} title='Pronunciation'/>
        <hr/>
        <Score score={session.speakingrate_score} title='Speaking Rate'/>
        <hr/>
        <Score score={session.listenability_score} title='Listenability'/>
        <h5 className='analysisType'>Body Language Analysis</h5>
        <hr/>
        <Score score={session.posture_score} title='Posture'/>
        <hr/>
        <Score score={session.gesture_score} title='Gesture'/>
        <hr/>
        <Score score={session.movement_score} title='Movement'/>
        <h5 className='analysisType'>Nervousness Analysis</h5>
        <hr/>
        <Score score={session.nervousness_score} title='Nervousness'/>             
    </div>
  )
}

export default Scores
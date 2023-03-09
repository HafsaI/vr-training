import React from 'react'

function Scores({session}) {
  return (
    <div> 
        <h5>Speech Analysis</h5>
        <hr/>
        <p> Clarity <span className='rightAlign'>{session.clarity_score}/10</span></p>
        <hr/>
        <p> Pauses <span className='rightAlign'>{session.pauses_score}/10</span></p>
        <hr/>
        <p> Pronunciation <span className='rightAlign'>{session.pronunciation_score}/10</span></p>
        <hr/>
        <p> Speaking Rate <span className='rightAlign'>{session.speakingrate_score}/10</span></p>
        <hr/>
        <p> Listenability <span className='rightAlign'>{session.listenability_score}/10</span></p>
        <hr/>
        <h5 className='analysisType'>Body Language Analysis</h5>
        <hr/>
        <p> Posture <span className='rightAlign'>{session.posture_score}/10</span></p>
        <hr/>
        <p> Gesture <span className='rightAlign'>{session.gesture_score}/10</span></p>
        <hr/>
        <p> Movement <span className='rightAlign'>{session.movement_score}/10</span></p>
        <h5 className='analysisType'>Nervousness Analysis</h5>
        <hr/>
        <p> Nervousness <span className='rightAlign'>{session.nervousness_score}/10</span></p>
             
    </div>
  )
}

export default Scores
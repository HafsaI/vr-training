import React from 'react'
import Score from './Score'

function Scores({session, quick = true}) {
  return (
    <div> 
      {quick && 
        <>
            <h5>Speech Analysis</h5>
            <hr/>
            <Score score={session.clarity_comment} title='Clarity'/>
            <hr/>
            <Score score={session.pauses_score} title='No. of Pauses taken'/>
            <hr/>
            <Score score={session.pronunciation_score+'%'} title='Pronunciation'/>
            <hr/>
            <Score score={session.speakingrate_comment} title='Speaking Rate'/>
            <hr/>
            <Score score={session.listenability_score+'%'} title='Listenability'/>
        </>
      }
        { (!quick && session.posture_score) && 
          <>
            <h5>Speech Analysis</h5>
            <hr/>
            <Score score={session.clarity_comment} title='Clarity'/>
            <hr/>
            <Score score={session.pauses_score} title='No. of Pauses taken'/>
            <hr/>
            <Score score={session.pronunciation_score+'%'} title='Pronunciation'/>
            <hr/>
            <Score score={session.speakingrate_comment} title='Speaking Rate'/>
            <hr/>
            <Score score={session.listenability_score+'%'} title='Listenability'/>
            <h5 className='analysisType'>Body Language Analysis</h5>
            <hr/>
            <Score score={session.posture_score+'/10'} title='Posture'/>
            <hr/>
            <Score score={session.gesture_score+'/10'} title='Gesture'/>
            <hr/>
            <Score score={session.movement_score+'/10'} title='Movement'/>
            <h5 className='analysisType'>Nervousness Analysis</h5>
            <hr/>
            <Score score={session.nervousness_score+'/10'} title='Nervousness'/> 
          </> 
        }   

        { (!quick && !session.posture_score) &&
          <>
            <p className='purple bold centerText'>This may take a few minutes! Please wait.</p>
          </> 
        }              
    </div>
  )
}

export default Scores
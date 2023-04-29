import React, { useState } from 'react'
import darrow from '../images/down-arrow.png'
import plus from '../images/plus.png'
import minus from '../images/minus.png'

function Score({ title, score, showArrow = false}) {
    const [showDescription, setShowDescription] = useState(false)
    const [showMinus, setShowMinus] = useState(false)
    const [description, setDescription] = useState('')

    const setDescriptionText = () => {
      if (title === 'Clarity'){
        if (score === 'Average!') {
          setDescription('Your speech may contain a lot of slurring or mumbling, making it challenging for your listeners to follow along.')
        }
        else if (score === 'Below Average!') {
          setDescription('Your speech is generally clear and understandable, although there may be some areas where you could improve your enunciation.')
        }
        else {
          setDescription('Your pronunciation and enunciation are excellent, making it easy for your listeners to follow along.')
        }
      }
      else if (title === 'Speaking Rate'){
        if (score === 'Average!') {
          setDescription('Your pace is generally adequate, but there is room for improvement if you want to communicate your message more effectively.')
        }
        else if (score === 'Below Average!') {
          setDescription('Adjust your speaking rate to suit the situation and audience. Speak faster if you are too slow, or slower if you are too fast. This will enhance your communication effectiveness.')
        }
        else if (score === 'Above Average!') {
          setDescription('Your speaking rate is very effective, allowing you to convey your message clearly and engagingly.')
        }
      }
    }

    const toggleDescription = () => {
      setShowDescription(!showDescription);
      setDescriptionText()
      setShowMinus(!showMinus);
    }

  return (
    <div>
        <p>
          {(showArrow && !showMinus) && <img src={plus} className='imgVvSmall marginProfile marginPlus darrow' onClick={toggleDescription}/>} 
          {(showArrow && showMinus) && <img src={minus} className='imgVvSmall marginProfile marginPlus darrow' onClick={toggleDescription}/>}
          {title} 
          <span className='rightAlign'>{score}</span></p>
        {showDescription && <p>{description}</p>}
    </div>
  )
}

export default Score
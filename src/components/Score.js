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
        if (score === 'Below Average!') {
          setDescription('Your speech may contain a lot of slurring or mumbling, making it challenging for your listeners to follow along.')
        }
        else if (score === 'Average!') {
          setDescription('Your speech is generally clear and understandable, although there may be some areas where you could improve your enunciation.')
        }
        else if (score === 'Above Average!') {
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

      else if (title === 'No. of Pauses taken'){
        setDescription('You took '+score+ ' pauses during the entire session.' )
      }

      else {
        setDescription(<table style={{ margin: '0 auto' }} cellPadding='10'>
        <thead>
          <tr>
            <th>Score</th>
            <th>Description</th>
            <th>Grade level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>90.0-100.0</td>
            <td>Very easy</td>
            <td>5th grade</td>
          </tr>
          <tr>
            <td>80.0-89.9</td>
            <td>Easy</td>
            <td>6th grade</td>
          </tr>
          <tr>
            <td>70.0-79.9</td>
            <td>Fairly easy</td>
            <td>7th grade</td>
          </tr>
          <tr>
            <td>60.0-69.9</td>
            <td>Standard/Plain English</td>
            <td>8th &amp; 9th grade</td>
          </tr>
          <tr>
            <td>50.0-59.9</td>
            <td>Fairly difficult</td>
            <td>10th to 12th grade</td>
          </tr>
          <tr>
            <td>30.0-49.9</td>
            <td>Difficult</td>
            <td>College</td>
          </tr>
          <tr>
            <td>0.0-29.9</td>
            <td>Very difficult</td>
            <td>College graduate</td>
          </tr>
        </tbody>
      </table>)
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
import React from 'react'
import { Link } from 'react-router-dom'

function StartSession() {
  return (
    <div className='center centerText'>
      <div>
        <label forHtml="heart-rate">Current Heartrate:</label> 
        <input name="heart-rate" readOnly/>
        <button className='heartrateBtn'>Get Heartrate</button>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <p>Start Recording:</p>
        <button className='heartrateBtn noLine'><Link to='/record' target='_self' className=' heartrateBtn noLine'>Open Webcam</Link></button>
      </div>
    </div>
  )
}

export default StartSession
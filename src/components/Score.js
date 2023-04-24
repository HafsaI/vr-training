import React, { useState } from 'react'
import darrow from '../images/down-arrow.png'

function Score({ title, description, score}) {
    const [showDescription, setShowDescription] = useState(false)

    const toggleDescription = () => {
        if (!showDescription) {setShowDescription(true)}
        else {setShowDescription(false)}
    }

  return (
    <div>
        <p> {title} <span className='rightAlign'>{score}/10</span><img src={darrow} className='imgVvSmall marginProfile darrow' onClick={toggleDescription}/></p>
        {showDescription && <p>{description}</p>}
    </div>
  )
}

export default Score
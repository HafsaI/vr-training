import React from 'react'

function Feature({ img, title, description }) {
  return (
    <div>
      <img src={img} className='feature-img' width="40%"/>
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  )
}

export default Feature
import React from 'react';

function Feature({ img, title, description }) {
  return (
    <div className='feature'>
      <img src={img} className='feature-img' width="400px"/>
      <div className='feature-overlay'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Feature;

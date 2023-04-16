import React, { useRef } from 'react';

function Feature({ img, title, description }) {
  const overlayRef = useRef(null);

  function handleMouseEnter() {
    overlayRef.current.style.opacity = '1';
  }

  function handleMouseLeave() {
    overlayRef.current.style.opacity = '0';
  }

  return (
    <div className='feature'>
      <img
        src={img}
        className='feature-img'
        width='400px'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className='feature-overlay' ref={overlayRef}>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Feature;

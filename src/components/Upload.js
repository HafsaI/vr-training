import React, { useState } from 'react';

function Upload() {
  const [showScores, setShowScores] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    setShowScores(true);
  }

  return (
    <div className='padding-horizontal'>
      <h2 className='padding-getstarted centerText'><span className='purple'>Analyze</span> your audio and/or video</h2>
      <form className='centerText' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit}>
        <div className='paddingFile' style={{ marginRight: '1rem' }}>
          <label>Upload <span className='purple bold'>Audio</span>:</label><span> </span> 
          <input type="file" id="audio" name="audio"/>
        </div>
        <div className='paddingFile'>
          <label>Upload <span className='purple bold'>Video</span>:</label><span> </span> 
          <input type="file" id="video" name="video"/>
        </div>
        <div className='paddingFile' style={{paddingRight : '13%'}}>
          <button className='centerText heartrateBtn analyzeBtn'>Analyze</button>
        </div>
      </form>

      {showScores && <div className="wrapper padding-scores">
        <div className="tabs">
          <div className="tab-content">
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Upload;

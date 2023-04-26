import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [showScores, setShowScores] = useState(false)
  const [selectedAudio, setSelectedAudio] = useState(null);

  const showSpeechScores = (scores) => {
    console.log("Individual Speech Scores", scores.data)
    // console.log("clarity comment", scores.data.clarity_comments)
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior

    if (!selectedAudio) {
      return;
    }
    const formData = new FormData();
    formData.append('audFile', selectedAudio);
   

    /* sending audio to backend */
    // axios.post('http://127.0.0.1:5000/sendaudio', formData)
    // .then(function(response) {
    //   console.log('Reponse',response);
    // })
    // .catch(function(error) {
    //   console.log('Uploading error',error);
    // });
    // console.log('Speech Audio File Sent To Backend')

    // /* getting speech scores from backend */
    // axios.get('http://127.0.0.1:5000/getscores')
    // .then(function (response) {
    //   console.log("Speech scores response", response);
    //   setShowScores(true);
    //   showSpeechScores(response)

    // })  
       
  }

  return (
    <div className='padding-horizontal'>
      <h2 className='padding-getstarted centerText'><span className='purple'>Analyze</span> your audio and/or video</h2>
      <form className='centerText' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit}>
        <div className='paddingFile' style={{ marginRight: '1rem' }}>
          <label>Upload <span className='purple bold'>Audio</span>:</label><span> </span> 
          <input type="file" id="audio" name="audio" onChange={(e) => setSelectedAudio(e.target.files[0])}/>
          
        </div>
        <div className='paddingFile'>
          <label>Upload <span className='purple bold'>Video</span>:</label><span> </span> 
          <input type="file" id="video" name="video"/>
        </div>
        <div className='paddingFile' style={{paddingRight : '13%'}}>
          <button className='centerText heartrateBtn analyzeBtn'>Analyze Audio</button>
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


 // fetch("http://127.0.0.1:5000/indi", {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => {
    //   console.error(error);
    // });
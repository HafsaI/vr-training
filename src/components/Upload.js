import React, { useState } from 'react';
import axios from 'axios';
import Score from './Score'

function Upload() {
  const [showScores, setShowScores] = useState(false)
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [scores, setScores] = useState({})

  const showSpeechScores = (scores) => {
    console.log("Individual Speech Scores", scores.data);
    console.log("clarity comment", scores.data.clarity_comments)
    setScores(scores.data);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!selectedAudio) {
      return;
    }
    const formData = new FormData();
    formData.append('audFile', selectedAudio);
   

    
    /* sending audio to backend */
    axios.post('/sendaudio', formData)
    .then(function(response) {
      console.log('Reponse',response);
    })
    .catch(function(error) {
      console.log('Uploading error',error);
    });
    console.log('Speech Audio File Sent To Backend')

    /* getting speech scores from backend */
    axios.get('/getscores')
    .then(function (response) {
      console.log("Speech scores response", response);
      setShowScores(true);
      showSpeechScores(response)

    })  
       
  }

  return (
    <div className='padding-horizontal'>
      <h2 className='padding-analyze centerText' style={{marginTop : '5%'}}><span className='purple'>Analyze</span> your audio</h2>
      <form className='centerText' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit}>
        <div className='paddingFile' style={{ marginRight: '1rem' }}>
          <label>Upload <span className='purple bold'>Audio</span>:</label><span> </span> 
          <input type="file" id="audio" name="audio" onChange={(e) => setSelectedAudio(e.target.files[0])}/>
          
        </div>
        {/* <div className='paddingFile'>
          <label>Upload <span className='purple bold'>Video</span>:</label><span> </span> 
          <input type="file" id="video" name="video"/>
        </div> */}
        <div className='paddingFile' style={{paddingRight : '13%'}}>
          <button className='centerText heartrateBtn analyzeBtn'>Analyze</button>
        </div>
      </form>

      {/* {showScores && <div className="wrapper padding-scores">
        <div className="tabs">
          <div className="tab-content">
            {console.log('hello ', scores.clarity_comments)}
            <Score title ='Clarity' score={scores.clarity_comments}/>
          </div>
        </div>
      </div>} */}
      {(showScores && scores.clarity_comments) && 
      <div style={{padding : '5% 15% 20% 15%'}}>
        <h3 className='centerText'>Scores</h3>
        <Score title ='Clarity' score={scores.clarity_comments} showArrow={true}/>
        <hr/>
        <Score title ='Speaking Rate' score={scores.speechrate_comments} showArrow={true}/>
        <hr/>
        <Score title ='No. of Pauses taken' score={scores.pauses_score} showArrow={false}/>
        <hr/>
        <Score title ='Pronunciation' score={scores.pronunciation_score+'%'} showArrow={false}/>
        <hr/>
      </div>
      }
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
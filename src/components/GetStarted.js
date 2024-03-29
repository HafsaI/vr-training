import React, { useState } from 'react'

function GetStarted() {
  const [showTwoSteps, setShowTwoSteps] = useState(false);
  const [showOneSteps, setShowOneSteps] = useState(false);


  const handleRadioTwoChange = (event) => {
    if (event.target.value === "yes-two") {
      setShowTwoSteps(true);
      setShowOneSteps(false);
    } else {
      setShowTwoSteps(false);
    }
  }

  const handleRadioOneChange = (event) => {
    if (event.target.value === "yes-one") {
      setShowOneSteps(true);
      setShowTwoSteps(false);
    } else {
      setShowOneSteps(false);
    }
  }

  return (
    <div className="margin-bottom padding-horizontal centerText">
      <h2 className='padding-getstarted'><span className='purple'>Get started</span> on your experience of a lifetime!</h2>
      <form>
        <h4>Do you just want to <span className='purple'>upload audio</span> and get feedback?</h4>
          <input type="radio" id="yes-one" name="one" value="yes-one" onChange={handleRadioOneChange}/>
          <label htmlFor="yes-one" style={{paddingRight:'10%'}}>Yes</label>
          <input type="radio" id="no-one" name="one" value="no-one" onChange={handleRadioOneChange}/>
          <label htmlFor="no-one">No</label><br></br>
        <hr/>

        {showOneSteps && (
          <div className='one-steps'>
            <ol className='steps'>
                <li>Record audio</li>
                <li>Open website on any device</li>
                <li>Sign up using username, name and password if you don't have an account already</li>
                <li>Login using username and password</li>
                <li>Open 'Upload' tab</li>
                <li>Upload audio using the the upload button</li>
                <li>Press 'Analyze' button</li>
                <li>View the scores displayed below</li>
            </ol>
          </div>
        )}

        <h4>Do you want to get the complete experience with <span className='purple'>vr headset</span>?</h4>
        <input type="radio" id="yes-two" name="two" value="yes-two" onChange={handleRadioTwoChange}/>
        <label htmlFor="yes-two" style={{paddingRight:'10%'}}>Yes</label> <span> </span>
        <input type="radio" id="no-two" name="two" value="no-two" onChange={handleRadioTwoChange}/>
        <label  htmlFor="no-two">No</label>
        <hr />

        {showTwoSteps && (
          <div className='two-steps'>
            <ol className='steps'>
              <li>Open website on any device</li>
              <li>Sign up with username, name and password if you don't have an id already</li>
              <li>Login using username and password</li>
              <li>Click on 'Start' tab</li>
              <li>Enter your glove's id</li>
              <li>Click on 'Save ID' button</li>
              <li>Place your device at a distance where your whole body is visible</li>
              <li>Open Headset App and open our app</li>
              <li>Type in Username and Password</li>
              <li>Wear Glove and press button on glove</li>
              <li>Wear headset and pick up the controller</li>
              <li>Turn to your left and press 'Start Session' on the menu</li>
              <li>Congratulations! Your session has begun! Start speaking</li>
              <li>After you are done with your session, press 'Stop session' and remove your headset</li>
              <li>Open the reports tab on your pc or phone and view your session analysis</li>
              <li  style={{marginBottom:'50%'}}>You can also view all of your session's combined analytics graphs in the 'Analytics' tab</li>
            </ol>
          </div>
        )}
      </form>
    </div>
  )
}

export default GetStarted

import React from 'react'

function GetStarted() {
  return (
    <div>
    <form>
        <h1>Do you just want to upload audio and/or video and get feedback?</h1>
        <input type="radio" id="yes-one" name="one" value="yes-one"/>
        <label for="yes-one">Yes</label><br/>
        <input type="radio" id="no-one" name="one" value="no-one"/>
        <label for="no-one">No</label><br></br>
        
        <h1>Do you want to get the complete experience with vr headset?</h1>
        <input type="radio" id="yes-two" name="two" value="yes-two"/>
        <label for="yes-two">Yes</label><br/>
        <input type="radio" id="no-two" name="two" value="no-two"/>
        <label for="no-two">No</label><br></br>

        <div>
            <ol>
                <li>Open website on pc</li>
                <li>Sign up with username, name and password if you don't have an id already</li>
                <li>Login using username and password</li>
                <li>Click on 'Start Session' tab</li>
                <li>Press 'Get Heart rate'</li>
                <li>Open website on mobile phone</li>
                <li>Click on 'Open Video Recoder'</li>
                <li>Place your phone such that your whole body is visible</li>
                <li>Open Headset App and open our app</li>
                <li>Type in Username and Password</li>
                <li>Wear headset</li>
                <li>Turn to your left and press 'Start Session' on the menu</li>
                <li>Congratulations! Your session has begun! Start speaking</li>
                <li>After you are done with your session, press 'Stop session' and remove your headset</li>
                <li>Open the reports tab on your pc or phone and view your session analysis</li>
                <li>You can also view all of your session's combined analytics in the 'Analytics tab'</li>

            </ol>
        </div>
    </form>
</div>
  )
}

export default GetStarted
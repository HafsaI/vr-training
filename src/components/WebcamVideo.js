import React, { useCallback, useEffect, useRef, useState, useContext } from "react";
import Webcam from "react-webcam";
import {ref as storageRef,uploadBytes,getDownloadURL,} from "firebase/storage";
import { getStorage } from "firebase/storage";
import app from "../firebaseconfig";
import { v4 } from "uuid";
import { LoginContext} from "../AppContext/Context";
import { getFirestore } from "@firebase/firestore";
import {  collection, getDocs, getDoc, updateDoc,doc, onSnapshot} from "firebase/firestore";
import axios from 'axios';

export default function WebcamVideo() {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const storage = getStorage(app);
  const db = getFirestore(app);

  const [sessionEnded, setSessionEnded] = useState(0);

  const videoConstraints = {
    width: 600,
    height: 300,
    facingMode: "user",
  };

  // [user (id + email), liveSession, current training sess id ] 
  const {user} = useContext(LoginContext);
  const [liveSession, setliveSession] = useState([])
  const currSessidRef = useRef({currSessId: ''});

  const handleDataAvailable = useCallback(
    ({ data}) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  /* function to start capturing video */
  const handleStartCaptureClick = useCallback(() => {
    setSessionEnded(0)
    if(webcamRef.current.stream){
    setCapturing(true);
    console.log('Recording Started');
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();}
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);


  /* function to stop capturing video*/
  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false); 
    console.log('Recording Stopped');
    setSessionEnded(1);
    console.log('recordedChunks:', recordedChunks);

  }, [mediaRecorderRef, setCapturing, recordedChunks]);


  /*  Creates blob and saves to DB when recorded chunks */
  useEffect(()=>{
    if (recordedChunks.length > 0){
    const blob = new Blob(recordedChunks, {
      type: "video/mp4",
    });

    // -----   saving video in DB   ----- //
    
    console.log("[Video] user", user);
    // generating filename ie user + random
    const videoRef = storageRef(storage, `videos/${user?.uid + v4()}`);
    // uploads to fb storage
    uploadBytes(videoRef, blob).then((snapshot) => {
      // uploads to specific user session into fb collection
      getDownloadURL(snapshot.ref).then((url) => {        
          console.log("video saved = url",url)
          return ( 
            updateDoc(doc(db, "training_sessions", currSessidRef.current.currSessId),{
              video_recording: url.toString()
            }).then(response => {
              console.log("video saved to db")
            }).catch(error =>{
              console.log(error.message)
            })  
          )
          
      });
      // alert("[Video] Video saved to DB")
      
    })

    // ------ xx ------ //

    // downloads video 
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "react-webcam-stream-capture.mp4";
    a.click();
    window.URL.revokeObjectURL(url);
    setRecordedChunks([]);}
  }, [recordedChunks]);



  /* sends user and sess id to backend */
  // useEffect(()=>{
  //   console.log("ls", liveSession)
  //   if(liveSession==false){
  //     axios.post('http://127.0.0.1:5000/data', {
  //       sessID: currSessidRef.current.currSessId,
  //       // userID: user?.uid
  //     })
  //     .then(function(response) {
  //       console.log('resp',response);
  //     })
  //     .catch(function(error) {
  //       console.log('error',error);
  //     });
  //   }
  //  }, [liveSession]);

  /*  Gets current user's doc - gets latest training sess id from it - 
  constantly listens for session value in that sess doc  */
  useEffect(() => {
    // if sess id changes
    if (user?.uid){
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("[Video ] Current Session ID Value: ", doc.data().currSessionId)
      currSessidRef.current.currSessId = doc.data().currSessionId
      setliveSession(doc.data().session)
    }) 
    }

    // if session value changes
    if (JSON.stringify(currSessidRef.current.currSessId) !== '[]' && currSessidRef.current.currSessId!= false ){
      const unsub = onSnapshot(doc(db, "training_sessions", currSessidRef.current.currSessId), (doc) => {
        console.log("[Video ] Current Session Value: ", doc.data().session)
        setliveSession(doc.data().session)
      }) 
    }
    }, [currSessidRef.current.currSessId, liveSession]);

  /* automatically starts and stops video */
  useEffect(() => {
    console.log("[Video] LiveSession", liveSession)
    if (liveSession && !capturing && webcamRef.current.stream) {
      handleStartCaptureClick();
    } else if (!liveSession && capturing) {
      // console.log("Calling Stop Func")
      handleStopCaptureClick();
    }
  }, [webcamRef, liveSession]);


  return (
    <div className="Container centerText">
      {(capturing && !sessionEnded) ? (<><p className="bold purple">Recording has started</p></>) : null}
      {/* {true ? (<><p className="bold purple">Recording is going on</p></>) : null} */}
      {(!capturing && sessionEnded) ? (<><p className="bold purple">Recording has stopped</p></>) : null}
      <Webcam
        audio={false}
        mirrored={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />
      {/* liveSession variable stores session value for the current training Sess that is going on */}
      {/* {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )} */}
      
    </div>
  );
}
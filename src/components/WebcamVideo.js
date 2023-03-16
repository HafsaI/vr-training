import React, { useCallback, useEffect, useRef, useState, useContext } from "react";
import Webcam from "react-webcam";
import {ref,uploadBytes,getDownloadURL,} from "firebase/storage";
import { getStorage } from "firebase/storage";
import app from "../firebaseconfig";
import { v4 } from "uuid";
import { LoginContext} from "../AppContext/Context";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs, updateDoc,doc, onSnapshot} from "firebase/firestore";


export default function WebcamVideo() {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const storage = getStorage(app);
  const {user,setUser} = useContext(LoginContext);
  const [userSession, setUserSessionScores] = useState([]);
  const db = getFirestore(app);
  const [liveSession, setliveSession] = useState([])


  useEffect(() => {
    const db = getFirestore(app);
    const scoresCollectionRef = collection(db, "training_sessions");
    const getUserSessionScores = async () => {
      const data = await getDocs(scoresCollectionRef);
      setUserSessionScores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
    };
    
    getUserSessionScores();

    const unsub = onSnapshot(doc(db, "training_sessions", "id6"), (doc) => {
      console.log("Current data: ", doc.data().session);
      setliveSession(doc.data().session);
  });

  }, []);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    console.log('start');
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);


  // func to generate video and save to fb storage and main db
  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false); 
    /* Downloading */
    const blob = new Blob(recordedChunks, {
      type: "video/mp4",
    });

    ////////////////    saving video in DB    /////////////////////////////////
    
    // TODO: [Hafsa] Solve the issue of saving incorrect video in DB

    console.log('stop');
    console.log("videouser", user);
    // generating filename ie user + random
    const videoRef = ref(storage, `videos/${user?.uid + v4()}`);
    // uploads to fb storage
    uploadBytes(videoRef, blob).then((snapshot) => {
      // uploads to specific user session into fb collection
      getDownloadURL(snapshot.ref).then((url) => {
        {userSession.map((session) => {
        
          console.log("video saved = url",url)
          return ( 
          session.user_id === user?.uid?
            updateDoc(doc(db, "training_sessions", session.id),{
              video_recording: url.toString()
            }).then(response => {
              console.log("video added")
            }).catch(error =>{
              console.log(error.message)
            })
            
          : null)
          
    
        })}
      });
      alert("video saved")
      
    })

    ////////////////////////////////////////////////////////////////////
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "react-webcam-stream-capture.mp4";
    a.click();
    window.URL.revokeObjectURL(url);
    setRecordedChunks([]);
  }, [mediaRecorderRef, setCapturing, recordedChunks]);

  const videoConstraints = {
    width: 600,
    height: 300,
    facingMode: "user",
  };

  return (
    <div className="Container centerText">
      <Webcam
        audio={false}
        mirrored={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />
      {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      
    </div>
  );
}


// console.log("gd", getDownloadURL(snapshot.ref))
// console.log("vri", "gs://" + videoRef._location.bucket + "/" + videoRef._location._path )
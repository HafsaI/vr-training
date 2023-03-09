import React, { useState, useEffect , useContext, useCallback, useRef} from "react";
import app from "../firebaseconfig";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs} from "firebase/firestore";
import { LoginContext} from "../AppContext/Context";
import Webcam from "react-webcam";

export default function WebcamVideo() {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const {user} = useContext(LoginContext);
  const [userSession, setUserSessionScores] = useState([]);

  useEffect(() => {
    const db = getFirestore(app);
    const scoresCollectionRef = collection(db, "training_sessions");
    const getUserSessionScores = async () => {
    const data = await getDocs(scoresCollectionRef);
    setUserSessionScores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
    };
    
    getUserSessionScores();

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
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false); 
    /* Downloading */
    const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
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
                  {userSession.map((session) => {
              if (session.user_id === user?.uid && session.session == true) {
                console.log(session.session)
              }
          })}
    </div>
  );
}
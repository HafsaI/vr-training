// import React, { useState } from 'react';

// const Webcam2 = () => {
//   const [videoSrc, setVideoSrc] = useState(null);
//   const [recorder, setRecorder] = useState(null);

//   const startRecording = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//     const mediaRecorder = new MediaRecorder(stream);

//     mediaRecorder.ondataavailable = (e) => {
//       const url = URL.createObjectURL(e.data);
//       setVideoSrc(url);
//     };

//     mediaRecorder.start();

//     setRecorder(mediaRecorder);
//   };

//   const stopRecording = () => {
//     recorder.stop();
//     setRecorder(null);
//   };

//   const downloadVideo = () => {
//     const a = document.createElement('a');
//     document.body.appendChild(a);
//     a.style = 'display: none';

//     const blob = new Blob([recorder], { type: 'video/webm' });
//     const url = window.URL.createObjectURL(blob);
//     a.href = url;
//     a.download = 'recorded-video.webm';
//     a.click();
//     window.URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <video src={videoSrc} controls />
//       {recorder ? (
//         <div>
//           <button onClick={stopRecording}>Stop Recording</button>
//           <button onClick={downloadVideo}>Download Video</button>
//         </div>
//       ) : (
//         <button onClick={startRecording}>Start Recording</button>
//       )}
//     </div>
//   );
// };

// export default Webcam2;


import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const VideoRecorder = () => {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const startRecording = () => {
    setRecording(true);
    console.log(' start recording\'s recording:',recording)
    setRecordedChunks([]);
  };

//   const stopRecording = () => {
//     console.log('recordedChunks:', recordedChunks);
//     console.log(' stop recording\'s recording:',recording)
//     setRecording(false);
//   };

    const stopRecording = () => {
        setTimeout(() => {
        console.log('recordedChunks:', recordedChunks);
        setRecording(false);
        }, 1000);
    };
    
  const downloadVideo = () => {
    console.log('recordedChunks:', recordedChunks);
    const blob = new Blob(recordedChunks, {
      type: 'video/webm',
    });
    console.log('blob:', blob);
    const url = URL.createObjectURL(blob);
    console.log('url:', url);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = 'video.webm';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const onDataAvailable = (event) => {
    console.log('onDataAvailable:', event);
    if (event.data.size > 0) {
      setRecordedChunks((prev) => prev.concat(event.data));
    }
  };

  console.log('recordedChunks:', recordedChunks);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        onChunkAvailable={recording ? onDataAvailable : null}
      />
      <button onClick={startRecording} disabled={recording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!recording}>
        Stop Recording
      </button>
      <button onClick={downloadVideo} disabled={recordedChunks.length === 0}>
        Download Video
      </button>
    </div>
  );
};

export default VideoRecorder;

import React from 'react'
import { useContext} from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
import { getStorage } from "firebase/storage";
import app from "../firebaseconfig";
import { v4 } from "uuid";
import { LoginContext} from "../AppContext/Context";


const SaveVideoToDB = ({videoFile}) => {
  const storage = getStorage(app);
  const {user,setUser} = useContext(LoginContext);


  // const videoListRef = ref(storage, "videos/");
  const uploadFile = () => {
    if (videoFile == null) return;
    const videoRef = ref(storage, `videos/${user?.uid + v4()}`);
    uploadBytes(videoRef, videoFile).then((snapshot) => {
      // videoFile?uploadFile(): null}
      // console.log("gd", getDownloadURL(snapshot.ref))
      alert("video saved")
    });
    
    // return;
  };


  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div>
        <h1>Hello</h1>
        {console.log("insideupload", videoFile? true: false)}
        {/* {console.log("vf", videoFile)} */}
        {/* {videoFile?uploadFile(): null} */}
        {uploadFile()}
        
        </div>
  )
}

export default SaveVideoToDB

// creates connection
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATDPjeT62cy7tYvqyGJ1vBUqExOAbvCJA",
  authDomain: "vr-trainingdb.firebaseapp.com",
  projectId: "vr-trainingdb",
  storageBucket: "vr-trainingdb.appspot.com",
  messagingSenderId: "405902376041",
  appId: "1:405902376041:web:88a88b00fb16e81ac9b6f8"
};



const app = initializeApp(firebaseConfig);
export default app;


// export const db = getFirestore(app);
// export default db
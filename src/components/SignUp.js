import React from 'react'
import { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,  signOut} from "firebase/auth";
import app from "../firebaseconfig";
import { LoginContext} from "../AppContext/Context";
import { getFirestore,doc, updateDoc, setDoc} from "@firebase/firestore";

function SignUp() {
    const auth = getAuth(app);
    const {user,setUser} = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const db = getFirestore(app);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log('currentuser', currentUser);
        
    });

    // const isLoggedIn = auth.currentUser ? true:false

    const signup = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Successful signup")
            setDoc(doc(db, "users", auth.currentUser.uid), {
                isWebsiteLogin: false,
                isVRLogin: false
              });

        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
        });
    }

    return (
        <div className = "bg">
            <div className="center signinBox">
            {/* <form id="signin"> */}
                <h1 className="centerText">VocalizeX</h1>
                {/*<input id ="signinField" type = "text" placeholder='Username' name="username" onChange={(e) => {setUsername(e.target.value)}}/> */}
                <input id ="signinField" type = "email" placeholder='Email' name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                <input id="password signinField" placeholder='Password' type = "password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                <button className="loginBtn" onClick={signup}> Create Account</button>
            {/* </form> */}
            </div>
      </div>
    )
}

export default SignUp
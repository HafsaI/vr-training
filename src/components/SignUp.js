import React from 'react'
import { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from "../firebaseconfig";
import { LoginContext} from "../AppContext/Context";
import { getFirestore,doc, setDoc} from "@firebase/firestore";

// signup page that allows you to create new account and creates a new collection in users document in db
// and adds default false values for isLogin fields

function SignUp() {
    const auth = getAuth(app);
    const {user,setUser} = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const db = getFirestore(app);

    const signup = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // setUser(auth.currentUser);
            alert("Successful signup")
            setDoc(doc(db, "users", auth.currentUser.uid), {
                currSessionId: ""
              });   
            
            // TODO: [Batool] navigate to login page on signup so that user logs in and then abto to view

        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
        });
    }

    return (
        <div className = "bg">
            <div className="center signinBox">
                <h1 className="centerText">VocalizeX</h1>
                {/*<input id ="signinField" type = "text" placeholder='Username' name="username" onChange={(e) => {setUsername(e.target.value)}}/> */}
                <input id ="signinField" type = "email" placeholder='Email' name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                <input id="password signinField" placeholder='Password' type = "password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                <button className="loginBtn" onClick={signup}> Create Account</button>
                {console.log('singupuser', user)}
            </div>
      </div>
    )
}

export default SignUp
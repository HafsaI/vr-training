import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import db from '../firebaseconfig'
import app from "../firebaseconfig";

function SignIn(){

    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("Successful signup")
        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            alert(errorCode)
        });
    }

    const signin = () => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Sucessfully signed in")
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
                <input type = "email" placeholder='Email' name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                <input id="password" placeholder='Password' type = "password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                {/* <input type="submit"/> */}
                <button className="loginBtn" onClick={signup}> Create Account</button>
                <button className="loginBtn" onClick={signin} > Login</button>
            {/* </form> */}
            </div>
      </div>
    )
}

export default SignIn


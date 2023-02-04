import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseconfig'

function Signin(){

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
        <div>
        {/* <form id="signin"> */}
            <label for="email">Email: </label>
            <input type = "email" name="email" onChange={(e) => {setEmail(e.target.value)}}/>
            <label for="password">Password: </label>
            <input type = "password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
            {/* <input type="submit"/> */}
            <button onClick={signup}> Create Account</button>
            <button onClick={signin} > Signin</button>
        {/* </form> */}
      </div>
    )
}

export default Signin


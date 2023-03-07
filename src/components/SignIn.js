import { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import app from "../firebaseconfig";
import { LoginContext} from "../AppContext/Context";
import { getFirestore,doc, updateDoc} from "@firebase/firestore";
import { Link } from "react-router-dom";



function SignIn(){
    const auth = getAuth(app);
    const {user,setUser} = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const db = getFirestore(app);

    const signin = () => {

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user);
            let docRef = doc(db, "users", user?.uid);
            updateDoc(docRef,{
                isWebsiteLogin:true
            } ).then(response => {
                console.log("signinupdated")
            }).catch(error =>{
                console.log(error.message)
            })
            setUser(auth.currentUser);
            alert("Sucessfully signed in")
            // TODO:navigate to home page on login so that login page is no longer visible now
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
                <input id ="signinField" type = "email" placeholder='Email' name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                <input id="password signinField" placeholder='Password' type = "password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                {/*<button className="loginBtn" onClick={signup}> Create Account</button>*/}
                <button className="loginBtn" onClick={signin} > Login</button>
                {/* <button className="loginBtn" onClick={signout} > SignOut</button> */}
                <p className="centerText">Don't have an account? <Link to='/signup' target='_self' className="purple"><strong>Sign up</strong></Link></p>
                {console.log("signinuser", user)}
            </div>
      </div>
    )
}

export default SignIn


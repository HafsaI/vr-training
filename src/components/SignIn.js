import { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import app from "../firebaseconfig";
import { LoginContext} from "../AppContext/Context";
import { getFirestore,doc, getDoc} from "@firebase/firestore";
import { Link } from "react-router-dom";
import { UserContext} from "../AppContext/Context";
import { useNavigate } from "react-router-dom";

function SignIn(){
    const auth = getAuth(app);
    const {user,setUser} = useContext(LoginContext);
    const {userdoc,setUserDoc} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const db = getFirestore(app);
    const home = useNavigate();

    const signin = () => {

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(auth.currentUser);
            // alert("Sucessfully signed in")
            const docRef = doc(db, "users", user?.uid)
            getDoc(docRef)
            .then((doc) => {
                setUserDoc(doc.data())
                // console.log("[Signin] userdoc", userdoc)
            })
            home("/"); // Navigate to the Home component            
            })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === "auth/wrong-password") {
                setError("Invalid password. Please try again!"); // Set custom error message
            } else if (errorCode == "auth/user-not-found") {
                setError("Invalid email"); // Set default error message
            }
           

        });
    }


    return (
        <div className = "bg">
            <div className="center signinBox">
                <h1 className="centerText">Manifest</h1>
                <input id ="signinField" type = "email" placeholder='Email' name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                <input id="password signinField" placeholder='Password' type = "password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                {error && <p className="errorText">{error}</p>} {/* render error message if error state is not null */}
                <button className="loginBtn" onClick={signin} > Login</button>
                <p className="centerText">Don't have an account? <Link to='/signup' target='_self' className="purple"><strong>Sign up</strong></Link></p>
                {console.log("[SignIn] user: ", user)}
            </div>
      </div>
    )
}

export default SignIn


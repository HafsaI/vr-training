import { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,  signOut} from "firebase/auth";
import app from "../firebaseconfig";
import { LoginContext
 } from "../AppContext/Context";
function SignIn(){
    const auth = getAuth(app);
    const {user,setUser} = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    // const isLoggedIn = auth.currentUser ? true:false

    const signup = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Successful signup")
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
        });
    }

    const signin = () => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user);
            alert("Sucessfully signed in")
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)

        });
    }

    const signout = async () => {
        await signOut(auth);
        alert("Successful signout")
    };

    return (
        <div className = "bg">
            <div className="center signinBox">
            {/* <form id="signin"> */}
                <input type = "email" placeholder='Email' name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                <input id="password" placeholder='Password' type = "password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                {/* <input type="submit"/> */}
                <button className="loginBtn" onClick={signup}> Create Account</button>
                <button className="loginBtn" onClick={signin} > Login</button>
                <button className="loginBtn" onClick={signout} > SignOut</button>
            {/* </form> */}
            </div>
         {console.log('a',user?.uid)}

      </div>
    )
}

export default SignIn


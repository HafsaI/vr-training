import { useContext } from "react";
import { getAuth, signOut} from "firebase/auth";
import app from "../firebaseconfig";
import { LoginContext} from "../AppContext/Context";
// import { getFirestore,doc, updateDoc} from "@firebase/firestore";
import { Link } from "react-router-dom";
import arrow from '../../src/images/arrow.png'
import { useNavigate } from "react-router-dom";



function SignOut(){
    const auth = getAuth(app);
    const {user,setUser} = useContext(LoginContext);
    const signin = useNavigate();

    const signout = async () => {
        await signOut(auth);
        setUser(auth.currentUser)
        console.log("signoutuser", user);
        alert("Successful signout")
        signin("/login"); // Navigate to the Home component            
    };

    return (
        <>
            <a onClick={signout} ><Link to='/login' target='_self' className="linkLogout">Logout<img src={arrow} className="imgSmall"/></Link></a> 
        </>
    )
}

export default SignOut


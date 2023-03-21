import { useContext } from "react";
import { getAuth, signOut} from "firebase/auth";
import app from "../firebaseconfig";
import { LoginContext} from "../AppContext/Context";
// import { getFirestore,doc, updateDoc} from "@firebase/firestore";
import { Link } from "react-router-dom";

function SignOut(){
    const auth = getAuth(app);
    const {user,setUser} = useContext(LoginContext);

    const signout = async () => {
        await signOut(auth);
        setUser(auth.currentUser)
        console.log("signoutuser", user);
        alert("Successful signout")
        // TODO: [Batool] navigate to login page on signout
    };

    return (
        <>
            {/* <p className='usernameDisplay'>Hi, props.user.username</p>  */}
            <button className="btnLogin linkLogout" onClick={signout}><Link to='/login' target='_self' className='white'>Logout</Link></button> 
            {console.log("[SignedOutUser] user: ", user)}
        </>
    )
}

export default SignOut


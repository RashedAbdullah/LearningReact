import { useState } from 'react';
import { googleFirebase } from './../config/firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


const provider = new GoogleAuthProvider();
const auth = getAuth(googleFirebase);

const WithGoogle = () => {
  const [userData, setUserData] = useState({});

  const handleGoogleAuth = ()=>{

    signInWithPopup(auth, provider)
      .then((result) => {
    
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
        setUserData({
          ...userData,
          user
        });
        
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  const handleSignOut = ()=>{
    signOut(auth).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div>
      
        <div>
            <h2>Welcome {userData?.user?.displayName}</h2>
            <img src={userData?.user?.photoURL} alt="" /><br />
            <button onClick={handleGoogleAuth}>Sign in with google</button>
        </div>
        <div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
    </div>
  )
}

export default WithGoogle;
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { githubAuth } from "../config/firebase/firebase";
import { useState } from "react";

const auth = getAuth(githubAuth);
const githubProvider = new GithubAuthProvider();

const WithGithub = () => {

    const [userData, setUserData] = useState({});
    const handleGithub = ()=>{
      signInWithPopup(auth, githubProvider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      setUserData({
        ...userData,
        user
      })
  
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);
    });
  }

  return (
    <div>
        <h2> Welcome: {userData?.user?.displayName}</h2>
        <img src={userData?.user?.photoURL} alt="" />
        <button onClick={handleGithub}>Log in with github</button>
    </div>
  )
}

export default WithGithub;
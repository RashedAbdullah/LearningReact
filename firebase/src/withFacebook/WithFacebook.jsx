import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { facebookAuth } from "../config/firebase/firebase";


const fbAuthProvider = new FacebookAuthProvider();
const auth = getAuth(facebookAuth);


const WithFacebook = () => {

    const handleFacebooklogin = ()=>{
        signInWithPopup(auth, fbAuthProvider)
        .then((result) => {
            const user = result.user;
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            console.log(user)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);

        });
    }
  return (
    <div>
        <div>
            <button onClick={handleFacebooklogin}>Log in with facebook</button>
        </div>
    </div>
  )
}

export default WithFacebook;
import { getAuth, linkWithPopup, OAuthProvider } from "firebase/auth";
import { microsoftAuth } from "../config/firebase/firebase";

const provider = new OAuthProvider('microsoft.com');
const auth = getAuth(microsoftAuth);

const WithMicrosoft = () => {

    const handleMicrosoftlogin = ()=>{
        linkWithPopup(auth.currentUser, provider)
            .then((result) => {
              const credential = OAuthProvider.credentialFromResult(result);
              const accessToken = credential.accessToken;
              const idToken = credential.idToken;
              console.log(idToken)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    
  return (

    <div>
        <div>
            <button onClick={handleMicrosoftlogin}>Sign in with microsoft</button>
        </div>
    </div>
  )
}

export default WithMicrosoft;
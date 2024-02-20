import React, { useState } from 'react'
import FbSignUp from '../fbSignUp/FbSignUp'

const Signin = () => {

    const [isSignUp, setIsSignUp] = useState(false);

    const openSignUpBox = ()=>{
        setIsSignUp(true)
    }

  return (
    <div className='fbLoginPage'>
       <div className={isSignUp? "signUpDisplayBlock" : "signUpDisplayNone"}><FbSignUp setIsSignUp={setIsSignUp}/></div>
        <div className='fbLoginTitles'>
            <h1>Facebook</h1>
            <h3>Facebook helps you connect and share with the people in your life.</h3>
        </div>
        <div className='fbLogInForm'>
            <div className='mainForm'>
                <form action="">
                    <div><input type="text" placeholder='Email address or phone number' /></div>
                    <div><input type="password" placeholder='Password'/></div>
                    <button>Log in</button>
                </form>
                <div><p><a href="">Forgotten password?</a></p></div>
                <hr />
                <div><button onClick={openSignUpBox}>Create new account</button></div>
            </div>
            <div className='underForm'><p><span>Create a Page</span> for a celebrity, brand or business.</p></div>
        </div>
    </div>
  )
}

export default Signin
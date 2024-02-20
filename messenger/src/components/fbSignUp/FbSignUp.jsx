import React from 'react'
import { HiMiniXMark } from "react-icons/hi2";

const FbSignUp = ({setIsSignUp}) => {
  return (
    <div className='fbSignup'>
        <div className='signUpBox'>
            <div className='titleAndCrose'>
                <h2>Sign Up</h2>
                <span onClick={()=>setIsSignUp(false)} className='removeSignUpBox'><HiMiniXMark /></span>
            </div>
            <p>It's quick and easy.</p>
            <hr />
            <form action="">
                <div className='nameAndSurname'>
                    <input type="text" placeholder='First name'/>
                    <input type="text" placeholder='Surname' />
                </div>
                <div className='mainOrNumberInput'><input type="text" placeholder='Mobile number or email address'/></div>
                <div className='mainOrNumberInput'><input type="password" placeholder='New password'/></div>
                <div>
                    <div className='birthBox'>
                        <p>Date or birth</p>
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        <select name="" id="">
                            <option value="">Jan</option>
                            <option value="">Feb</option>
                            <option value="">Mar</option>
                        </select>
                        <select name="" id="">
                            <option value="">2023</option>
                            <option value="">2022</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                        </select>
                    </div>
                        <div className='gendertext'><p>Gender</p></div>
                    <div className='genderBox'>
                        <div><label htmlFor='female'>Female</label><input id='female' name='gender' type="radio" /></div>
                        <div><label htmlFor='male'>Male</label><input id='male' name='gender' type="radio" /></div>
                        <div><label htmlFor='custom'>Custom</label><input id='custom' name='gender' type="radio" /></div>
                    </div>
                    <div className='signupTexts'>People who use our service may have uploaded your contact information to Facebook. <a href="">Learn more.</a></div>
                    <div className='signupTexts'>By clicking Sign Up, you agree to our Terms, <a href="">Privacy Policy</a> and <a href="">Cookies Policy.</a> You may receive SMS notifications from us and can opt out at any time.</div>
                </div>
                <div className='signUpButton'><button>Sign Up</button></div>
            </form>
        </div>
    </div>
  )
}

export default FbSignUp;
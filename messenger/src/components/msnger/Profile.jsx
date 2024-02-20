import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";


const Profile = () => {
  return (
    <div>
        <div>
            <div><img src="" alt="" /></div>
            <div className="proName"></div>
        </div>
        <ul>
            <li><FaFacebook /></li>
            <li><IoMdNotifications /></li>
            <li><IoSearchSharp /></li>
        </ul>

        <ul>
            <li><span>Chat info</span> <span><IoIosArrowForward /></span></li>
            <li><span>Customise chat</span> <span><IoIosArrowForward /></span></li>
            <li><span>Media, files and links</span> <span><IoIosArrowForward /></span></li>
            <li><span>Privacy and support</span> <span><IoIosArrowForward /></span></li>
        </ul>
    </div>
  )
}

export default Profile;
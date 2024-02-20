import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa6";
import { BiSolidInfoCircle } from "react-icons/bi";
import { PiStickerFill } from "react-icons/pi";
import { PiGifFill } from "react-icons/pi";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";


const SingleChat = () => {
  return (
    <div className='chatProfile'>
        <div className="profileTitle">
            <div>
                <img src="https://images.pexels.com/photos/15693412/pexels-photo-15693412/free-photo-of-al-jamia-al-islamia-patiya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="userName">Rashed Abdullah</div>
            </div>
            <ul className='userIcons'>
                <li><IoCall /></li>
                <li><FaVideo /></li>
                <li><BiSolidInfoCircle /></li>

            </ul>
        </div>
        <div className='allChats'>
            <div className='allChatImgAndText'>
                <div className='chatProfileAndText'>
                    <img src="https://images.pexels.com/photos/15693412/pexels-photo-15693412/free-photo-of-al-jamia-al-islamia-patiya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div><p>Okay, okay i'm happy</p></div>
                </div>
                <div className='dateBox'><p>29 Nov 2023, 11:35</p></div>
                <div className='chatmySelf'><p>You're so good</p></div>
                <div className='dateBox'><p>29 Nov 2023, 11:35</p></div>    
                <div className='chatProfileAndText'>
                    <img src="https://images.pexels.com/photos/15693412/pexels-photo-15693412/free-photo-of-al-jamia-al-islamia-patiya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div><p>Okay, okay i'm happy</p></div>
                </div>
                <div className='chatmySelf'><p>You're so good</p></div>
                <div className='dateBox'><p>29 Nov 2023, 11:35</p></div>    
                <div className='chatProfileAndText'>
                    <img src="https://images.pexels.com/photos/15693412/pexels-photo-15693412/free-photo-of-al-jamia-al-islamia-patiya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div><p>Okay, okay i'm happy</p></div>
                </div>
            </div>
        </div>
        <div className="cahtFooter">
            <ul>
                <li><BsFillPlusCircleFill /></li>
                <li><FaRegImage /></li>
                <li><PiGifFill /></li>
                <li><PiStickerFill /></li>
                <li><input type="text" placeholder='Aa'/> <BsEmojiSmileFill /></li>
                <li><BiSolidLike /></li>
            </ul>
        </div>
    </div>
  )
}

export default SingleChat;
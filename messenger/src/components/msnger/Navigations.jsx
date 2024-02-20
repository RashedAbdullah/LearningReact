import React from 'react'
import { IoChatbubbleSharp } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { FaArchive } from "react-icons/fa";


const Navigations = () => {
  return (
    <div className='navigations'>
        <ul>
            <li><IoChatbubbleSharp /></li>
            <li><IoPeople /></li>
            <li><FaBoxArchive /></li>
            <li><AiFillMessage /></li>
            <li><FaArchive /></li>
        </ul>
    </div>
  )
}

export default Navigations;
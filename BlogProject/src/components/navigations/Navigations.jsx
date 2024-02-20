import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Navigations = () => {
  const [isTrue, setIsTrue] = useState(false);
  console.log(isTrue);

  return (
    <div className=' flex justify-between p-5 bg-green-600 text-white font-black text-2xl'>
      <ul><li>Logo</li></ul>
      <ul className='font-mono flex gap-10 justify-center '>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
      <ul onClick={()=>setIsTrue(!isTrue)}><li className=' sm:hidden'>{isTrue? <IoCloseSharp /> : <TiThMenu/>}</li></ul>
    </div>
  )
}

export default Navigations;
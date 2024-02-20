import React from 'react'
import { NavLink } from 'react-router-dom';

const MenuPage = () => {
  return (
    <div>
        <ul>
            <li><NavLink className={({isActive})=>isActive? "active":"pending"} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active":"pending"} to="/project">Projects</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active":"pending"} to="/blog">Blogs</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active":"pending"} to="/Info">info</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active":"pending"}  to="/about">About</NavLink></li>
        </ul>
    </div>
  )
}

export default MenuPage;
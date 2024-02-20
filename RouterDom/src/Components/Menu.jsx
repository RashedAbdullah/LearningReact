import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
        <ul>
            <li><NavLink className={({isActive})=>isActive? "active":"pending"} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active":"pending"} to="/about">About</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active":"pending"} to="/blog">Blogs</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active":"pending"} to="/project">Project</NavLink></li>
        </ul>
    </div>
  )
}

export default Menu;
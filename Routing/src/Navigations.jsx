import React from 'react'
import { NavLink } from 'react-router-dom';
import "../src/App.css";

const Navigations = () => {
  return (
    <div className='navlinks' style={{display: "flex", gap: "10px"}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/project">Projcet</NavLink>
        <NavLink to="/contact">Concat</NavLink>
        <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default Navigations;
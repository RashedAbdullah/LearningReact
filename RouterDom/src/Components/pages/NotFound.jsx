import React from 'react'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
        <h2>404</h2>
        <p>Oppse! Page not found!</p>
        <NavLink className={(isActive)=>isActive? "active": "pending"} to="/">Go home page</NavLink>
    </div>
  )
}

export default NotFound;
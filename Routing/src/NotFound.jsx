import React from 'react'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
        <h1>404 NotFound</h1>
        <NavLink to="/">Go to home</NavLink>
    </div>
  )
}

export default NotFound;
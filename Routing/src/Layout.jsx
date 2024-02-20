import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigations from './Navigations';

const Layout = () => {
  return (
    <div>
        <Navigations />
        <Outlet />
        <Navigations />
    </div>
  )
}

export default Layout;
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigations from './../components/navigations/Navigations';

const Layout = () => {
  return (
    <div className=' text-balance'>
        <Navigations/>

        <Outlet/>
    </div>
  )
}

export default Layout;
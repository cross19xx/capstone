import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import './SharedLayout.css'

const SharedLayout = () => {
  return (
    <div className='layout'>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default SharedLayout
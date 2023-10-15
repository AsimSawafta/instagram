import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <Sidebar/>
        <Outlet></Outlet>
        
    </>
  )
}

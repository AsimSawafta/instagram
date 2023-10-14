import React from 'react'
import Icons from '../IconsPage/Icons'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <Icons/>
        <Outlet></Outlet>
        
    </>
  )
}

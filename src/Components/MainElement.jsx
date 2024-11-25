import React from 'react'
import { Outlet } from 'react-router-dom'

function MainElement() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default MainElement

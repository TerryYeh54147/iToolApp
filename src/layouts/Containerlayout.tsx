import React from 'react'
import { Outlet } from 'react-router-dom'
const Containerlayout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Outlet />
      </div>
    </>
  )
}

export default Containerlayout

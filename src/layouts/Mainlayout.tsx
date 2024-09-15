import React from 'react'
import { Outlet } from 'react-router-dom'
// TODO: add more layout setup
const Mainlayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default Mainlayout

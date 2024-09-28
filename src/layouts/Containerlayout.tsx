import { ParentProps } from '@/types/component'
import React from 'react'
import AppBar from '@/layouts/AppBar'

const Containerlayout: React.FC<ParentProps> = ({ children }) => {
  return (
    <>
      <div className={`flex flex-col h-screen `}>
        {/* AppBar */}
        <AppBar className="p-4"/>

        <div className="flex flex-col items-center justify-center h-screen">
          {children}
        </div>
      </div>
    </>
  )
}
export default Containerlayout

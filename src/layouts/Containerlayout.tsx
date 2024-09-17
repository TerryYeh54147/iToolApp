import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from './AppBar'
import Sidebar from './Sidebar'

const ContainerLayout: React.FC = () => {
  const [collage, setCollage] = useState(false)
  function onToggle() {
    setCollage(!collage)
  }
  return (
    <div className="flex flex-col h-screen">
      {/* AppBar */}
      <AppBar
        className="text-bule dark:text-white p-4"
        collage={collage}
        setCollage={onToggle}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* 左側導覽欄 */}
        <Sidebar className="w-64 bg-gray-100 p-4 overflow-y-auto" />

        {/* 主要內容區域 */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default ContainerLayout

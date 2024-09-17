import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

const Sidebar: React.FC<{ className?: string }> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${className}`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">侧边栏</h2>
          {/* 在这里添加侧边栏内容 */}
          <ul>
            <li className="mb-2">菜单项 1</li>
            <li className="mb-2">菜单项 2</li>
            <li className="mb-2">菜单项 3</li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

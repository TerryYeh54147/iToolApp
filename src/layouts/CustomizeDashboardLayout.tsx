import { ParentProps } from '@/types/component'
import React, { useState } from 'react'
import AppBar from '@/layouts/AppBar'
import NavBar from '@/layouts/NavBar'

export type customizeDashboardSettingProp = {}

export type CustomizeDashboardLayoutProp = ParentProps &
  customizeDashboardSettingProp

const CustomizeDashboardLayout: React.FC<CustomizeDashboardLayoutProp> = ({
  children,
}) => {
  const [collage, setCollage] = useState(false)

  const onToggle = () => {
    setCollage(!collage)
  }
  return (
    <>
      <div className={`flex flex-col h-screen `}>
        {/* AppBar */}
        <AppBar className="p-4" collage={collage} setCollage={onToggle} />

        <div className="flex flex-1 overflow-hidden">
          {/* 左側導覽欄 */}
          <NavBar collage={collage} />

          {/* 主要內容區域 */}
          <main className="flex-1 p-4 overflow-y-auto">{children}</main>
        </div>
      </div>
    </>
  )
}

export default CustomizeDashboardLayout

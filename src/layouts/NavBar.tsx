import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import navItems from '@/components/NavItems'
import type { NavigationItem } from '@toolpad/core'

export type CollageType = {
  collage?: boolean
  setCollage?: () => void
}
export type NavBarItem = {
  label: string
  icon?: React.ReactNode
}
export type NavBarProp = CollageType & {
  className?: string
}
const Sidebar: React.FC<NavBarProp> = ({ className, collage }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const getSelectedCls = (path: string | undefined) => {
    console.log(currentPath)
    return currentPath === `/${path}` ? 'text-primary' : ''
  }
  return (
    <>
      {collage && (
        <aside
          className={`min-w-32 w-48 border-r dark:border-neutral-600 overflow-y-auto shadow-xl top-0 left-0 h-full transition-transform duration-300 ease-in-out transform ${
            collage ? 'translate-x-0' : '-translate-x-full'
          } ${className}`}
        >
          <div className="p-4">
            {navItems.map((e: NavigationItem, i) => {
              return (
                <>
                  {e.kind === 'divider' && (
                    <div className="pb-4 border-t dark:border-neutral-700" />
                  )}
                  {e.kind === 'header' && (
                    <div
                      key={i}
                      className="w-full text-bold text-start text-gray-500 dark:text-gray-300"
                    >
                      {e.title}
                    </div>
                  )}
                  {e.kind == null && (
                    <div
                      key={i}
                      className="flex-auto hover:backdrop-brightness-90 hover:cursor-pointer "
                      onClick={() => navigate(`/${e.segment}`)}
                    >
                      <div
                        className={`grid grid-flow-col gap-1 place-items-start p-4 ${getSelectedCls(e.segment)}`}
                      >
                        <div className="col-span-1">{e.icon}</div>
                        <div className="text-wrap text-bold text-xl">
                          {e.title}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )
            })}
          </div>
        </aside>
      )}
    </>
  )
}

export default Sidebar

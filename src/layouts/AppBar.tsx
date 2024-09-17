import React, { useEffect, useState } from 'react'
import LogoSvg from '@/assets/logo.svg'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

type CollageType = {
  collage: boolean | undefined
  setCollage: () => void
}

export interface AppBarProp extends CollageType {
  className?: string
}
const AppBar: React.FC<AppBarProp> = ({
  className,
  collage = undefined,
  setCollage,
}) => {
  const [dark, setDark] = useState(false)
  function toggleTheme() {
    setDark(!dark)
    document.documentElement.classList.toggle('dark', dark)
  }
  useEffect(() => {
    // default by system
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])
  useEffect(() => {
    // default by system
    setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])
  return (
    <>
      <div
        className={`flex items-center justify-between px-4 py-2 shadow-md ${className}`}
      >
        <div className="flex items-center space-x-1 hover:cursor-pointer ">
          {collage != undefined && (
            <IconButton
              aria-label="toggle"
              onClick={() => {
                setCollage()
              }}
            >
              {collage ? <MenuIcon /> : <MenuOpenIcon />}
            </IconButton>
          )}
          <a
            href="/"
            className="flex items-center space-x-1 hover:cursor-pointer"
          >
            <img src={LogoSvg} alt="logo" className="h-8 w-auto" />
            <div className="text-xl font-bold">
              {process.env.REACT_APP_TITLE}
            </div>
          </a>
        </div>
        <div className="flex items-center px-4">
          <IconButton onClick={toggleTheme} color='primary'>
            {dark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </div>
      </div>
    </>
  )
}
export default AppBar

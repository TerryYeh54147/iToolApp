import * as React from 'react'
import { createTheme } from '@mui/material/styles'
import {
  Dashboard,
  Info,
  Analytics,
  QueryStats,
  Schema,
} from '@mui/icons-material'
import { AppProvider } from '@toolpad/core/AppProvider'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import type { Router, Navigation } from '@toolpad/core'
import { Outlet, Path, useLocation, useNavigate } from 'react-router-dom'
import logoImage from '@/assets/logo.svg'
import { ParentProps } from '@/types/component'
import navItems from '@/components/NavItems'

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
})

const DashboardLayoutBasic: React.FC<ParentProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const router = React.useMemo<Router>(
    () => ({
      pathname: location.pathname,
      searchParams: new URLSearchParams(location.search),
      navigate: (to: string | Partial<Path>) => navigate(to),
    }),
    [location, navigate],
  )

  return (
    <AppProvider
      branding={{
        logo: <img src={logoImage} alt="logo" />,
        title: process.env.REACT_APP_TITLE,
      }}
      navigation={navItems}
      router={router}
      theme={theme}
    >
      <DashboardLayout>
        <div className="p-6">{children}</div>
      </DashboardLayout>
    </AppProvider>
  )
}
export default DashboardLayoutBasic
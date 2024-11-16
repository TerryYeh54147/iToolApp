import { lazy, Suspense } from 'react'
import { useRoutes, Outlet, Navigate } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import Containerlayout from '@/layouts/Containerlayout'
import CustomizeDashboardLayout from '@/layouts/CustomizeDashboardLayout'
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const PaintPage = lazy(() => import('@/pages/PaintPage'))
const FlowPage = lazy(() => import('@/pages/FlowPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export default function Route() {
  const routes = useRoutes([
    {
      element: (
        <CustomizeDashboardLayout>
          <Suspense fallback={<Skeleton animation="wave" />}>
            <Outlet />
          </Suspense>
        </CustomizeDashboardLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: 'about', element: <AboutPage /> },
        { path: 'paint', element: <PaintPage /> },
        { path: 'flow', element: <FlowPage /> },
      ],
    },
    {
      element: (
        <Containerlayout>
          <Suspense fallback={<Skeleton animation="wave" />}>
            <Outlet />
          </Suspense>
        </Containerlayout>
      ),
      children: [
        {
          path: '/404',
          element: <NotFoundPage />,
        },
      ],
    },

    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ])
  return routes
}

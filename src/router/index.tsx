import { lazy, Suspense } from 'react'
import { useRoutes, Outlet, Navigate } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import DashboardLayout from '@/layouts/DashboardLayout'
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const FlowPage = lazy(() => import('@/pages/FlowPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
// const Containerlayout = lazy(() => import('@/layouts/Containerlayout'))

export default function Route() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<Skeleton animation="wave" />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: 'about', element: <AboutPage /> },
        { path: 'flow', element: <FlowPage /> },
      ],
    },
    {
      path: '/404',
      element: <NotFoundPage />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ])
  return routes
}

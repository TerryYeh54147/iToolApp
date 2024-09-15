import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/pages/HomePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const DashboardLayout = lazy(() => import('@/layouts/DashboardLayout'))
// const MainLayout = lazy(() => import('@/layouts/Mainlayout'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export default routes

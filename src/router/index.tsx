import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/pages/HomePage'))
const About = lazy(() => import('@/pages/AboutPage'))
const Flow = lazy(() => import('@/pages/FlowPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const DashboardLayout = lazy(() => import('@/layouts/DashboardLayout'))
// const Containerlayout = lazy(() => import('@/layouts/Containerlayout'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'flow', element: <Flow /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export default routes

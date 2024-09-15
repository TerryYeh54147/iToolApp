import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import routes from '@/router/index'

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {route.element}
            </Suspense>
          }
        >
          {route.children?.map((childRoute) => (
            <Route
              key={childRoute.path || 'index'}
              index={childRoute.index}
              path={childRoute.path}
              element={childRoute.element}
            />
          ))}
        </Route>
      ))}
    </Routes>
  )
}

export default App

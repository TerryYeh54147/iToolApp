import { Suspense } from 'react'
import Routes from '@/router/index'

function App() {
  return (
    <Suspense>
      <Routes />
    </Suspense>
  )
}

export default App

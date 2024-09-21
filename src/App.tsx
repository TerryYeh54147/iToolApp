import { Suspense } from 'react'
import Routes from '@/router'

function App() {
  return (
    <Suspense>
      <Routes />
    </Suspense>
  )
}

export default App

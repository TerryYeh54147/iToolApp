import { Button } from '@mui/material'
import React from 'react'

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <div className="text-center font-bold text-2xl">
          Oops! Page not found.
        </div>
        <Button variant="contained" color="primary" href="/">
          Go to Home
        </Button>
      </div>
    </>
  )
}

export default NotFoundPage

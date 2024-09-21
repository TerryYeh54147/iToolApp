import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <div className="text-center font-bold text-2xl">
          Oops! Page not found.
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
        >
          Go to Home
        </Button>
      </div>
    </>
  )
}

export default NotFoundPage

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/hooks/useAuth'
const DashBoardPage = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    auth.signout(() => {
      navigate('/login')
    })
  }

  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={handleSignOut}>
        Sign out
      </button>  
    </>
  )
}

export default DashBoardPage
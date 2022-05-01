import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../api/auth'
import { useAuth } from '../utils/hooks/useAuth'

const DashBoardPage = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const  handleSignOut = async() => {
    try {
      const result = await signOut()
      if(result.success) {
        auth.signout(() => {
          navigate('/login')
        })
      }
      else {
        //Server couldn't sign out
        alert('Couldnt sign out')
      }

    } catch(err) {
      alert('Something wrong')
    }
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
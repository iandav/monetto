import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../api/auth'
import { useAuth } from '../utils/hooks/useAuth'
import { Link } from 'react-router-dom'

// Styles
import "../styles/page-styles/DashBoardPage.css"
// Components
import DashboardNavbar from '../components/DashboardNavbar'
import Button from '../components/Button'

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
        <DashboardNavbar />
        <Button onClick={handleSignOut} text="Sign out" color="primary" />
    </>
  );
}

export default DashBoardPage
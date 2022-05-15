import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../api/auth'
import { useAuth } from '../utils/hooks/useAuth'
import { Link } from 'react-router-dom'
// Styles
import "../styles/page-styles/DashboardPage.css"
// Components
import DashboardNavbar from '../components/DashboardNavbar'
import Button from '../components/Button'
import DashboardHeader from '../components/DashboardHeader'
import DashboardCard from '../components/DashboardCard'

function DashboardPage() {
  const auth = useAuth()
  const navigate = useNavigate()
  
  const handleSignOut = async() => {
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

  // <Button onClick={handleSignOut} text="Sign out" color="primary" />

  return (
    <div className="dashboardContainer">

      <DashboardNavbar />

      <div className='dashboardContent'>

        <DashboardHeader title="Dashboard" />

      <div className='dashboardContentCards'>
        <DashboardCard title="Balance" value="0.00" style="dashboardPageCard" />
        <DashboardCard title="Income" value="0.00" style="dashboardPageCard" />
        <DashboardCard title="Expenses" value="0.00" style="dashboardPageCard" />
      </div>

      </div>

    </div>
  );
}

export default DashboardPage;
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../api/auth'
import { useAuth } from '../utils/hooks/useAuth'

// Styles
import "../styles/DashboardPage.css"

// Components
import MonettoLogo from "../components/MonettoLogo.js"
import UserFinancialInformation from "../components/UserFinancialInformation.js"

// Icons
import { AiFillAppstore } from "react-icons/ai"



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
    <div className='dashboard-container'>

      <nav className='dashboard-navbar'>
      <MonettoLogo className="logo"/>
        <ul>
          <li><a href="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Dashboard</a></li>
          <li><a href="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Accounts</a></li>
          <li><a href="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Earnings</a></li>
          <li><a href="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Expenses</a></li>
          <li><a href="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Investments</a></li>
          <li><a href="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Other</a></li>
          <li><a href="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Settings</a></li>
          <li><a href="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Sign out</a></li>
        </ul>
        <button onClick={handleSignOut}>
          Sign out
        </button>  
      </nav>

      <div className='dashboard-information'>
        <UserFinancialInformation />
      </div>

    </div>
  )
}

export default DashBoardPage
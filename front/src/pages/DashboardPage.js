import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../api/auth'
import { useAuth } from '../utils/hooks/useAuth'
import { Link } from 'react-router-dom'

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
          <li>
            <Link to="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Dashboard</Link>
          </li>
          <li>
            <Link to="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Accounts</Link>
          </li>
          <li>
            <Link to="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Earnings</Link>
          </li>
          <li>
            <Link to="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Expenses</Link>
          </li>
          <li>
            <Link to="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Investments</Link>
          </li>
          <li>
            <Link to="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Other</Link>
          </li>
          <li>
            <Link to="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Settings</Link>
          </li>
          <li>
            <Link to="#" className='navbar-element'><AiFillAppstore className='navbar-icon' />Sign out</Link>
          </li>
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
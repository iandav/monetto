import React, { useState } from 'react'
import Navbar  from '../components/Navbar'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../utils/hooks/useAuth'
import { signIn } from '../api/auth'
import '../styles/page-styles/RegisterPage.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Something went wrong')
  const [nick, setNick] = useState('')
  const [password, setPassword] = useState('')
  
  const navigateTo = location.state?.from?.pathname || '/dashboard'
  
  const handleLogin = async (e) => {
    e.preventDefault()
  
    const data = {
      nick,
      password
    }

    try {
      const result = await signIn(data)
      if(result.success){
        auth.signin(data.nick, () => {
          navigate(navigateTo, { replace: true })
        })
      }
      else {
        setErrorMessage(result.message)
        setError(true)
      }
    } catch(err) {
      setError(true)
    }
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    if(id === 'nick') {
      setNick(value)
    }
    else {
      setPassword(value)
    }
  }

  const handleSignUpClick = (e) => {
    navigate('/register')
  }

  return (
    <>
      <Navbar />
      <div className="register-box">
        <h1>Log in</h1>
        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input type="text" required placeholder='Username' id="nick" onChange={handleInputChange}></input>
          </div>
          <div className="user-box">
            <input type="password" required placeholder='Password' id="password" onChange={handleInputChange}></input>
          </div>
          <button>
              Log in
          </button>
        </form>
        <button className="signup-btn" onClick={handleSignUpClick}>
          Sign up
        </button>
        {error ? errorMessage : null}
      </div>
    </>
  )
}

export default LoginPage
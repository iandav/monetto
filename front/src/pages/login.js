import React, { useState } from 'react'
import { Navbar } from '../components'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../utils/hooks/useAuth'
import '../styles/register.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const [nick, setNick] = useState('')
  const [password, setPassword] = useState('')

  const navigateTo = location.state?.from?.pathname || '/dashboard'

  function handleSubmit (e) {
    e.preventDefault()

    let data = {
      nick,
      password
    }

    auth.signin(data.nick, () => {
      navigate(navigateTo, { replace: true })
    })
  }

  function handleInputChange(e) {
    const { id, value } = e.target

    if(id === 'nick') {
      setNick(value)
    }
    else {
      setPassword(value)
    }
  }

  function handleSignUpClick(e) {
    navigate('/register')
  }

  return (
    <>
      <Navbar />
      <div className="register-box">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" required placeholder='Username' id="nick" onChange={handleInputChange}></input>
          </div>
          <div className="user-box">
            <input type="password"  required placeholder='Password' id="password" onChange={handleInputChange}></input>
          </div>
          <button>
              Log in
          </button>
        </form>
        <button className="signup-btn" onClick={handleSignUpClick}>
          Sign up
        </button>
      </div>
    </>
  )
}

export default LoginPage
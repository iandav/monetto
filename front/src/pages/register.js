import React, { useState } from 'react'
import { Navbar } from '../components'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../utils/hooks/useAuth'
import '../styles/register.css'

const RegisterPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const [email, setEmail] = useState('')
  const [nick, setNick] = useState('')
  const [password, setPassword] = useState('')

  const navigateTo = location.state?.from?.pathname || '/dashboard'

  function handleSubmit (e) {
    e.preventDefault()

    let data = {
      email,
      nick,
      password
    }

    auth.signin(data.nick, () => {
      navigate(navigateTo, { replace: true })
    })
  }

  function handleInputChange(e) {
    const { id, value } = e.target

    if(id === 'email') {
      setEmail(value)
    }
    else if(id === 'nick') {
      setNick(value)
    }
    else {
      setPassword(value)
    }
  }

  return (
    <>
      <Navbar />
      <div className="register-box">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="email" required placeholder='Email' id="email" onChange={handleInputChange}></input>
          </div>
          <div className="user-box">
            <input type="text" required placeholder='Username' id="nick" onChange={handleInputChange}></input>
          </div>
          <div className="user-box">
            <input type="password"  required placeholder='Password' id="password" onChange={handleInputChange}></input>
          </div>
          <button>
              Sign up
          </button>
        </form>
      </div>
    </>
  )
}

export default RegisterPage
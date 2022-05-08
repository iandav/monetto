import React, { useState } from 'react'
import { Navbar } from '../components'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../utils/hooks/useAuth'
import { signUp } from '../api/auth'
import '../styles/register.css'

const RegisterPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const [email, setEmail] = useState('')
  const [nick, setNick] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Something went wrong')


  const navigateTo = location.state?.from?.pathname || '/dashboard'

  async function handleSubmit (e) {
    e.preventDefault()

    let data = {
      nick,
      email,
      password
    }

    try {
      const result = await signUp(data)
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

  const handleLoginClick = (e) => {
    navigate('/login')
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
        <button className='signup-btn' onClick={handleLoginClick}>
          Log in
        </button>
        {error ? errorMessage : null }
      </div>
    </>
  )
}

export default RegisterPage
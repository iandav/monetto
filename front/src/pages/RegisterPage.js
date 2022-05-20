import { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { signup } from '../api/auth'
import { AuthContext } from '../lib/auth'
import '../styles/page-styles/RegisterPage.css'

const RegisterPage = () => {
  const auth = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [nick, setNick] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const navigateTo = location.state?.from?.pathname || '/dashboard'

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = {
      nick,
      email,
      password
    }
    
    const result = await signup(data)
    if(result.success){
      auth.signin(data.nick, () => {
        navigate(navigateTo, { replace: true })
      })
    }
    else {
      setErrorMessage(result.message)
    }
  }
  

  const onInputChange = (e) => {
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

  const onLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <Navbar />
      <div className="register-box">
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div className="user-box">
            <input type="email" required placeholder='Email' id="email" onChange={onInputChange}></input>
          </div>
          <div className="user-box">
            <input type="text" required placeholder='Username' id="nick" onChange={onInputChange}></input>
          </div>
          <div className="user-box">
            <input type="password" required placeholder='Password' id="password" onChange={onInputChange}></input>
          </div>
          <button>
              Sign up
          </button>
        </form>
        <button className='signup-btn' onClick={onLogin}>
          Log in
        </button>
        {errorMessage.length > 0 ? errorMessage : null}
      </div>
    </>
  )
}

export default RegisterPage
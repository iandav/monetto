import { useContext, useState } from 'react'
import Navbar  from '../components/Navbar'
import { useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../lib/auth'
import { signin } from '../api/auth'
import '../styles/page-styles/RegisterPage.css'

const LoginPage = () => {
  const auth = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  
  const [nick, setNick] = useState('')
  const [password, setPassword] = useState('')
  
  const [errorMessage, setErrorMessage] = useState('')

  const navigateTo = location.state?.from?.pathname || '/dashboard'
  
  const onLogin = async (e) => {
    e.preventDefault()
  
    const data = {
      nick,
      password
    }

    const result = await signin(data)
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
    if(id === 'nick') {
      setNick(value)
    }
    else {
      setPassword(value)
    }
  }

  const onSignupClick = (e) => {
    navigate('/register')
  }

  return (
    <>
      <Navbar />
      <div className="register-box">
        <h1>Log in</h1>
        <form onSubmit={onLogin}>
          <div className="user-box">
            <input type="text" required placeholder='Username' id="nick" onChange={onInputChange}></input>
          </div>
          <div className="user-box">
            <input type="password" required placeholder='Password' id="password" onChange={onInputChange}></input>
          </div>
          <button>
              Log in
          </button>
        </form>
        <button className="signup-btn" onClick={onSignupClick}>
          Sign up
        </button>
        {errorMessage.length > 0 ? errorMessage : null}
      </div>
    </>
  )
}

export default LoginPage
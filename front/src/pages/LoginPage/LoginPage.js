import { useContext, useState } from 'react'
import { Navbar }  from '../../components'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { AuthContext } from '../../lib/auth'
import { signin } from '../../api/auth'
import './LoginPage.css'

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

  return (
    <>
      <Navbar />

      <div className='register-box-container'>

      <div className="register-box">

        <h1>Log in</h1>

        <form onSubmit={onLogin}>

          <div className="user-box">
            <input type="text" required placeholder='Username' id="nick" onChange={onInputChange}></input>
          </div>

          <div className="user-box">
            <input type="password" required placeholder='Password' id="password" onChange={onInputChange}></input>
          </div>

          <button className="login-btn">
            Log in
          </button>

        </form>
        <p>Don't have an account? 
          <Link to="/register"> Sign up </Link>
        </p>
        
        {errorMessage.length > 0 ? errorMessage : null}

      </div>

      </div>
    </>
  )
}

export default LoginPage
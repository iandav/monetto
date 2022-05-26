import { useContext, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
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
    console.log("BEFORE")
    const data = {
      nick,
      email,
      password
    }
    console.log(data)
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

  return (
    <>
      <Navbar />

      <div className='register-box-container'>

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

          <button className='signup-btn'>
            Sign up
          </button>
        </form>

        <p>Already have an account? 
          <Link to="/login"> Login </Link>
        </p>

        {errorMessage.length > 0 ? errorMessage : null}

      </div>
      
      </div>
    </>
  )
}

export default RegisterPage
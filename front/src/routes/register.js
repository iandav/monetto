import React from 'react'
import '../styles/register.css'

const RegisterPage = () => {
  return (
    <div className="login-box">
      <h1>Register</h1>
      <form>
        <div className="user-box">
          <input type="email" name="" required="" placeholder='Email'></input>
        </div>
        <div className="user-box">
          <input type="text" name="" required="" placeholder='Username'></input>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" placeholder='Password'></input>
        </div>
        <button>
            Sign up
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
import React, { useContext, useState } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { Navbar } from "../../components"
import { AuthContext } from "../../lib/auth"
import { signin } from "../../api/auth"
import "./LoginPage.css"

function LoginPage() {
  const auth = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()

  const [nick, setNick] = useState("")
  const [password, setPassword] = useState("")

  const [errorMessage, setErrorMessage] = useState("")

  const navigateTo = location.state?.from?.pathname || "/dashboard"

  const onLogin = async (e) => {
    e.preventDefault()

    const data = {
      nick,
      password,
    }

    const result = await signin(data)
    if (result.success) {
      auth.signin(data.nick, () => {
        navigate(navigateTo, { replace: true })
      })
    } else {
      setErrorMessage(result.message)
    }
  }

  const onInputChange = (e) => {
    const { id, value } = e.target
    if (id === "nick") {
      setNick(value)
    } else {
      setPassword(value)
    }
  }

  return (
    <div className="login-page-container">

      <Navbar />

      <div className="login-container">
        <div className="login-box">
          <h1 className="login-box-title">Log in</h1>
          <form onSubmit={onLogin} className="login-form">
            <input
              className="login-input"
              type="text"
              required
              placeholder="Username"
              id="nick"
              onChange={onInputChange}
            />
            <input
              className="login-input"
              type="password"
              required
              placeholder="Password"
              id="password"
              onChange={onInputChange}
            />
            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>
          <div className="login-box-alert">
            {errorMessage.length > 0 ? errorMessage : null}
          </div>
          <div className="login-box-footer">
            <p>Don&apos;t have an account? </p>
            <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginPage

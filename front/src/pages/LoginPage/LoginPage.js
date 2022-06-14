import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "../../components"
import useAuth from "../../lib/hooks/useAuth"
import useForm from "../../lib/hooks/useForm"
import { signin } from "../../api/auth"

import "./LoginPage.css"

function LoginPage() {
  const [user, login] = useAuth()
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, onInputChange] = useForm({
    nick: "",
    password: "",
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    const result = await signin(formData)
    if (result.success) {
      login(formData.nick)
    } else {
      setErrorMessage(result.message)
    }
  }

  return (
    <div className="login-page-container">
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-box-title">Log in</h1>
          <form onSubmit={onSubmit} className="login-form">
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

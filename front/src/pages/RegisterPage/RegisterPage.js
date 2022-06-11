import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "../../components"
import useAuth from "../../lib/hooks/useAuth"
import useForm from "../../lib/hooks/useForm"
import { signup } from "../../api/auth"

import "./RegisterPage.css"

function RegisterPage() {
  const [user, login] = useAuth()
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, onInputChange] = useForm({
    email: "",
    nick: "",
    password: "",
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    const result = await signup(formData)
    if (result.success) {
      login(formData.nick)
    } else {
      setErrorMessage(result.message)
    }
  }

  return (
    <div className="register-page-container">
      <Navbar />
      <div className="register-container">
        <div className="register-box">
          <h1 className="register-box-title">Register</h1>
          <form onSubmit={onSubmit} className="register-form">
            <input
              className="register-input"
              type="email"
              required
              placeholder="Email"
              id="email"
              onChange={onInputChange}
            />
            <input
              className="register-input"
              type="text"
              required
              placeholder="Username"
              id="nick"
              onChange={onInputChange}
            />
            <input
              className="register-input"
              type="password"
              required
              placeholder="Password"
              id="password"
              onChange={onInputChange}
            />
            <button type="submit" className="signup-btn">
              Sign up
            </button>
          </form>
          <div className="register-box-alert">
            {errorMessage.length > 0 ? errorMessage : null}
          </div>
          <div className="register-box-footer">
            <p>Already have an account? </p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

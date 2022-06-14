import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import HomepageLogo from "../HomepageLogo/HomepageLogo"
import Button from "../Button/Button"

function Navbar() {
  return (
    <nav className="home-navbar">

      <HomepageLogo />

      <div className="home-navbar-buttons-container">
        <Link to="/register" className="home-navbar-signup-btn">
          Sign up
        </Link>
        <Button
          target="/login"
          text="Login"
          styles="home-navbar-login-btn"
        />
      </div>

    </nav>
  )
}

export default Navbar

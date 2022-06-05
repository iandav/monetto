import React from "react"
import "./Navbar.css"
import MonettoLogo from "../MonettoLogo/MonettoLogo"
import Button from "../Button/Button"

function Navbar() {
  return (
    <nav className="navbar">
      <MonettoLogo />

      <div>
        <Button
          target="/register"
          text="Sign Up"
          color=""
          name="signupButton"
        />
        <Button
          target="/login"
          text="Log in"
          color="secondary"
          name="loginButton"
        />
      </div>
    </nav>
  )
}

export default Navbar

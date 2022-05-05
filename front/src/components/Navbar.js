import React from 'react'
// Styles
import "../styles/component-styles/Navbar.css"
// Components
import MonettoLogo from './MonettoLogo.js'
import Button from "./Button.js"
import LoginButton from './LoginButton.js'
import SignupButton from './SignupButton.js'

const Navbar = () => {
  return (
    <nav>
      <MonettoLogo />

      <Button text="Log in" color="primary" />
      <Button text="Sign Up" color="secondary"/>

    </nav>
  )
}

export default Navbar;
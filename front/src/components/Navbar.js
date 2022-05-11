import React from 'react'
// Styles
import "../styles/component-styles/Navbar.css"
// Components
import MonettoLogo from './MonettoLogo.js'
import Button from "./Button.js"

const Navbar = () => {
  return (
    <nav className='navbar'>

      <MonettoLogo/>

      <div>
        <Button target="/register" text="Sign Up" color="" name="signupButton" />
        <Button target="/login" text="Log in" color="secondary" name="loginButton" />
      </div>

    </nav>
  )
}

export default Navbar;


import React from 'react'
// Styles
import "./Navbar.css"
// Components
import MonettoLogo from '../MonettoLogo/MonettoLogo.js'
import Button from "../Button/Button.js"

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


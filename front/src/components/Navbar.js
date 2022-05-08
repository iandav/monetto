import React from 'react'
// Styles
import styles from "../styles/component-styles/Navbar.module.css"
// Components
import MonettoLogo from './MonettoLogo.js'
import Button from "./Button.js"

const Navbar = () => {
  return (
    <nav className={styles.nav}>

      <MonettoLogo/>

      <div>
        <Button target="/register" text="Sign Up" type="navbarSignupButton" />
        <Button target="/login" text="Log in" color="primary" type="navbarLoginButton" />
      </div>

    </nav>
  )
}

export default Navbar;


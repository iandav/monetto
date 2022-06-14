import React from "react"
import { Link } from "react-router-dom"
// Styles
import "./HomepageLogo.css"
// Images
import logo from "../../images/monetto-logo.png"

function HomepageLogo({ styles }) {
  return (
    <Link to="/" className={`home-logo-container ${styles}`}>
      <img src={logo} alt="Monetto Logo" className="home-logo-image" />
      Monetto
    </Link>
  )
}

export default HomepageLogo

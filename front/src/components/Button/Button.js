import React from "react"
import { Link } from "react-router-dom"
import "./Button.css"

function Button({ target, text, styles }) {
  return (
    <Link to={target} className={`button ${styles}`}>
      {text}
    </Link>
  )
}

export default Button

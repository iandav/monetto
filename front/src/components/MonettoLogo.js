import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import "../styles/component-styles/MonettoLogo.css"

const MonettoLogo = ({style}) => {
  return (
    <Link to="/" className={`monettoLogo ${style}`}>Monetto</Link>
  );
}

export default MonettoLogo;
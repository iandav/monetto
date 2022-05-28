import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import "./MonettoLogo.css"

const MonettoLogo = ({styles}) => {
  return (
    <Link to="/" className={`monettoLogo ${styles}`}>Monetto</Link>
  );
}

export default MonettoLogo;
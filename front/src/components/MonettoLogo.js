import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import "../styles/component-styles/MonettoLogo.css"

const MonettoLogo = () => {
  return (
      <Link to="/" className='monettoLogo'>Monetto</Link>
  );
}

export default MonettoLogo;
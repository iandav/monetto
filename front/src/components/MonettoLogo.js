import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import "../styles/component-styles/MonettoLogo.css"

const MonettoLogo = () => {
  return (
      <>
      <Link to="/" className='monetto-logo'>Monetto</Link>
      </>
  );
}

export default MonettoLogo;
import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import styles from "../styles/component-styles/MonettoLogo.module.css"

const MonettoLogo = () => {
  return (
      <Link to="/" className={styles.monettoLogo}>Monetto</Link>
  );
}

export default MonettoLogo;
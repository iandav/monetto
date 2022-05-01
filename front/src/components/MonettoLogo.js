import React from 'react'
import { Link } from 'react-router-dom'

const MonettoLogo = () => {
  return (
      <>
      <Link to="/" style={styles.monettoLogo}>Monetto</Link>
      </>
  )
}

const styles = {
    monettoLogo: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '24px',
        marginLeft: '55px'
    }
}

export default MonettoLogo
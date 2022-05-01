import React from 'react'
import { Link } from "react-router-dom"

const LoginButton = () => {
  return (
    <>
      <Link to="/login" style={styles.button}>
        Log in
      </Link>
    </>
  )
}

const styles = {
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 'center',
    fontFamily: 'Poppins',
    fontWeight: '800',
    borderRadius: '15px',
    width: '175px',
    height: '50px',
    color: '#333333',
    backgroundColor: '#A490E5',
    marginRight: '50px',
    marginLeft: '30px',
    textDecoration: 'none'
  }
}

export default LoginButton
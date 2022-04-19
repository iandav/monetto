import React from 'react'
import { Link } from 'react-router-dom'

const SignupButton = () => {
  return (
    <>
        <Link to="/register" style={styles.button}>
            Sign up
        </Link>
    </>
  )
}

const styles = {
    button: {
        fontSize: '18px',
        color: 'white',
        textDecoration: 'none'
    }
}

export default SignupButton
import React from 'react'
import LoginButton from './LoginButton.js'
import MonettoLogo from './MonettoLogo.js'
import SignupButton from './SignupButton.js'

const Navbar = (props) => {
  return (
    <nav style={styles.nav}>
        <MonettoLogo />
        {
          props.showButtons ? 
            <div style={styles.wrapper}>
              <SignupButton />
              <LoginButton />
            </div>
            :
            null
        }

    </nav>
  )
}


const styles = {
    nav: {
        width: '100vw',
        height: '100px',
        backgroundColor: '#2B2B2B',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center'
    }
}

export default Navbar
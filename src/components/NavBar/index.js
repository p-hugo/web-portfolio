import React from 'react'
import styles from './NavBar.module.scss'
import NavContainer from './NavContainer'
export default ({transparent}) => (
  <nav className={styles.nav}>
    {/* TODO: <HamburgerMenu onClick={this.handleOnClick} /> */}
    <NavContainer transparent={transparent} />
  </nav>
)

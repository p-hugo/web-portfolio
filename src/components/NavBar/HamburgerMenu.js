import React from 'react'
import PropTypes from 'prop-types'
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = ({ triggered, handleClick }) => (
  <div
      className={
        triggered
          ? `${styles.burger_menu} ${styles.active}`
          : styles.burger_menu
      }
      onClick={handleClick}
    >
      <div className={styles.burger_line} />
      <div className={styles.burger_line} />
      <div className={styles.burger_line} />
    </div>
)

HamburgerMenu.propTypes = {
  triggered: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default HamburgerMenu

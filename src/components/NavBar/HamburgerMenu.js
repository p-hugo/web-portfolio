import React, { Component } from 'react'
import styled from 'styled-components'
import styles from './HamburgerMenu.module.scss'
const FixedIcon = styled.div`
  position: fixed;
  z-index: 10000;
  top: 10px;
  width: 100px;
  height: 100px;
  transition: all 0.35s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`

export default class HamburgerMenu extends Component {
  constructor () {
    super()
    this.state = {
      triggered: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      triggered: !prevState.triggered
    }))
  }

  render () {
    const { triggered } = this.state
    return (
      <FixedIcon>
        <div
          className={
            triggered
              ? `${styles.burger_menu} ${styles.active}`
              : styles.burger_menu
          }
          onClick={this.handleClick}
        >
          <div className={styles.burger_line} />
          <div className={styles.burger_line} />
          <div className={styles.burger_line} />
        </div>
      </FixedIcon>
    )
  }
}

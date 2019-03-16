import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './NavBar.module.scss'
import NavContainer from './NavContainer'
import HamburgerMenu from './HamburgerMenu'
export default class NavBar extends Component {
  static propTypes = {
    transparent: PropTypes.bool.isRequired
  }

  constructor (props) {
    super(props)
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
    const { transparent } = this.props
    const { triggered } = this.state
    return (
      <>
        <HamburgerMenu triggered={triggered} handleClick={this.handleClick}/>
        <nav className={styles.nav}>
          <NavContainer transparent={transparent} triggered={triggered}/>
        </nav>
      </>
    )
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import { container, trans, show } from './NavContainer.module.scss'
import NavItem from './NavItem'

const NavContainer = ({ transparent, triggered }) => (
  <div className={getClasses(transparent, triggered)}>
    <NavItem to='/'>Welcome</NavItem>
    <NavItem to='/about/'>About</NavItem>
    <NavItem to='/projects/'>Projects</NavItem>
  </div>
)

NavContainer.propTypes = {
  transparent: PropTypes.bool.isRequired,
  triggered: PropTypes.bool.isRequired
}

function getClasses (transparent, triggered) {
  let classes = ''
  if (transparent) classes += `${trans} `
  if (triggered) classes += `${show} `
  classes += `${container}`
  return classes
}

export default NavContainer

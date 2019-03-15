import React from 'react'
import {container, trans} from './NavContainer.module.scss'
import NavItem from './NavItem'
export default ({transparent}) => (
  <div className={transparent ? `${container} ${trans}`: container}>
    <NavItem to="/">Welcome</NavItem>
    <NavItem to="/about">About</NavItem>
    <NavItem to="/react">React</NavItem>
    <NavItem to="/creative-corner">Creative Corner</NavItem>
  </div>
)

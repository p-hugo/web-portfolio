import React from 'react'
import { Link } from 'gatsby'
import styles from './NavItem.module.scss'
const NavItem = ({ to, active, children }) => (
  <Link className={styles.item} to={to} activeClassName={styles.active}>
    {children}
  </Link>
)
export default NavItem

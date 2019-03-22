import React from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Content from '../components/Content'
import { FaReact } from 'react-icons/fa'
import styles from '../styles/icons.module.scss'
// TODO: add css shapes of triangles, circles, squares, etc to add some visuals here
export default () => (
  <Layout>
    <NavBar />
    <Content>
        <code>
          import <FaReact className={`${styles.middle} rotate`} color="#63DBFB"/> from 'react';
        </code>
    </Content>
  </Layout>
)

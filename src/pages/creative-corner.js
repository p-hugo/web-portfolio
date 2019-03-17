import React from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Content from '../components/Content'

export default () => (
  <Layout>
    <NavBar />
    <Content>
      <h1>
        This is me trying to be creative{' '}
        <span role='img' aria-label='emoji thinking'>
          🤔
        </span>
      </h1>
    </Content>
  </Layout>
)

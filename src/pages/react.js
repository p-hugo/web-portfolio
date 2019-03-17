import React from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Content from '../components/Content'

export default () => (
  <Layout>
    <NavBar />
    <Content>
      <h1>
        Something good it's coming here, check back later{' '}
        <span role='img' aria-label='smiling emoji'>
          😆
        </span>
      </h1>
    </Content>
  </Layout>
)

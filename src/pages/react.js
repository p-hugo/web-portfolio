import React from 'react'
import Title from '../components/Title'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Content from '../components/Content'

export default () => (
  <Layout>
    <NavBar />
    <Content>
      <Title size={100} fw={600}>
        Something good it's coming here, check back later{' '}
        <span role='img' aria-label='smiling emoji'>
          😆
        </span>
      </Title>
    </Content>
  </Layout>
)

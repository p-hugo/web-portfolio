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
        This is me trying to be creative{' '}
        <span role='img' aria-label='emoji thinking'>
          🤔
        </span>
      </Title>
    </Content>
  </Layout>
)

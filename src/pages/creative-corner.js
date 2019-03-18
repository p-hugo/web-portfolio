import React from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Content from '../components/Content'
import Box from '../../static/img/box.svg';
import CenteredDiv from '../components/CenteredDiv'

export default () => (
  <Layout>
    <NavBar />
    <Content>
      <h1>
        The content here is being imported, please come back later
      </h1>
      <CenteredDiv>
        <Box />
      </CenteredDiv>
    </Content>
  </Layout>
)

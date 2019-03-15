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
        Hey there, nice to e-meet you! I'm Hugo
      </Title>
      <h1>Who Am I</h1>
      <p>
        I'm currently a student at Montclair State University, majoring in
        Information Technology and minoring in mathematics and compute science.
      </p>
    </Content>
  </Layout>
)

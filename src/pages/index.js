import React from 'react'
import Title from '../components/Title'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import { FaGithub, FaReact } from 'react-icons/fa'
import Content from '../components/Content'
import styles from '../styles/icons.module.scss'

export default () => (
  <Layout className="video-main" transparent>
    <video autoPlay muted loop id='video'>
      <source src='static/video/code_video.mp4' type='video/mp4' />
      Your browser does not support HTML5 video.
    </video>
    <NavBar transparent/>
    <Content>
      <Title size={100} fw={600}>
        I Build Modern Web Apps with Tomorrow's Tools{' '}
        <FaReact className={styles.middle} />
      </Title>
      <h2>
        I'm currently in the middle of importing all my work here, but in the
        mean time you can check out my github and see all the cool stuff I'm
        currently working on:
      </h2>
      
    </Content>
  </Layout>
)

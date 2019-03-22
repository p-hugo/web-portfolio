import React from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Content from '../components/Content'
import CenteredDiv from '../components/CenteredDiv'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import styles from '../styles/icons.module.scss'
import * as profile from '../../static/img/profile.jpg'
import { img, figure } from '../styles/img.module.scss'
import Map from '../components/Map'
export default () => (
  <Layout>
    <NavBar />
    <Content>
        <figure className={figure}>
          <img src={profile} className={img} alt='Hugo Perdomo' />
        </figure>
        <h1 className='c_red alt_font'>The Short Answer:</h1>
        <p>
          I'm a web developer based in NJ/NYC area who is about to graduate this
          Spring(2019) with a bachelor in Information Technology and Math.
        </p>
        <CenteredDiv>Connect with me:</CenteredDiv>
        <CenteredDiv>
          <a
            href='https://linkedin.com/in/hugoperdomo/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaLinkedin size='2rem' className={styles.center} />
          </a>
          <a
            href='https://twitter.com/Perdomoh07'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaTwitter size='2rem' className={styles.center} />
          </a>
        </CenteredDiv>
        <hr />
        <h1 className='c_blue alt_font'>The Long Answer:</h1>
        <p>I moved to New Jersey when I was 14 years old...</p>
        <Map />
    </Content>
  </Layout>
)

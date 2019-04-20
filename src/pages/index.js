import React from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import { FaGithub, FaReact, FaHtml5, FaCss3, FaJs, FaHeart } from 'react-icons/fa'
import Content from '../components/Content'
import styles from '../styles/icons.module.scss'
import CenteredDiv from '../components/CenteredDiv'
import * as video from '../../static/video/v001.mp4';

export default () => (
  <Layout className='video-main' transparent>
    <NavBar transparent />
    <video autoPlay muted loop id='video'>
      <source src={video} type='video/mp4' />
      Your browser does not support HTML5 video.
    </video>
    <Content>
      <h1>
        I Develop Modern Web Apps with {' '}
        <FaReact className={styles.middle} color="#62DBFB"/> 
        <FaJs className={styles.middle} color="#DEC001"/> 
        <FaHtml5 className={styles.middle} color="#FF5001" /> 
        <FaCss3 className={styles.middle} color="#0AA4F0"/> 
        and {" "}
        <FaHeart className={styles.middle} color="red" size="0.5em" />
        
      </h1>
      <p>
        I'm currently in the middle of importing all my work here, but in the
        mean time you can check out my github and see all the cool stuff I'm
        currently working on:
      </p>
      <CenteredDiv>
        <a
          href='https://github.com/p-hugo'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FaGithub size='4rem' className={styles.center} />
        </a>
      </CenteredDiv>
      <p className="attribution">Video by <a href="https://www.pexels.com/video/person-working-on-his-laptop-1851768/">Pexels</a></p>
    </Content>
    
  </Layout>
)

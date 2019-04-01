import React from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Content from '../components/Content'
import CenteredDiv from '../components/CenteredDiv'
import { FaLinkedin, FaTwitter, FaGithub, FaCodepen } from 'react-icons/fa'
import styles from '../styles/icons.module.scss'
import * as profile from '../../static/img/profile.jpg'
import { img, figure } from '../styles/img.module.scss'
import Map from '../components/Map'
import ToolBox from '../components/ToolBox';
export default () => (
  <Layout>
    <NavBar />
    <Content>
      <h1 className='c_blue alt_font'>I present to you: A Not-So-Short Bio</h1>
      <figure className={figure}>
        <img src={profile} className={img} alt='Hugo Perdomo' />
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
          <a
            href='https://codepen.io/perdomoh/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaCodepen size='2rem' className={styles.center} />
          </a>
          <a
            href='https://github.com/p-hugo'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaGithub size='2rem' className={styles.center} />
          </a>
        </CenteredDiv>
      </figure>
      <p>IT student who loves developing all things web related. Here is what my current toolbox looks like:</p>
      <ToolBox />
      <h2 className="alt_font">A little background</h2>
      <hr/>
      <p>
        As a freshman in college I thought pursuing a career in finance was the
        most secure option. A year in, I discovered that a "secure" plan doesn't
        always mean a plan that I will enjoy, and that was when I realized that
        I was in the wrong career path. A class about tech in business deeply
        marked me and made me realize that I really enjoy the world of computing
        and problem solving. I made the choice to pursue a career in tech and
        ever since I've been loving the community and the amazing things you can
        do with just a computer and creativity.
      </p>
      <p>
        I am also a huge fan of Hackathons, I think they are the reason why I've
        grown so much as a developer. Staying in touch and meeting new fellow
        developers really keeps me engaged and increased my desire to learn more
        and keep up with my peers.
      </p>
      <p>
        If you are trying to find me, I live in the NJ/NYC area. Here's a map of
        where I am located just because I think{' '}
        <a href='https://www.mapbox.com/' className='highlight'>
          Mapbox
        </a>{' '}
        is really awesome.
      </p>
      <Map />
    </Content>
  </Layout>
)

import React from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring/renderprops'
import * as Box from '../../static/img/box.svg'
import * as BoxShadow from '../../static/img/box-shadow.svg'

const springConfig = {
  mass: 0.2,
  tension: 190,
  friction: 606,
  clamp: false,
  precision: 0.8,
  velocity: 0,
  delay: 200,
  duration: 500
}

const styleMorph = {
  from: { transform: 'scale(0)', opacity: 0 },
  to: { transform: 'scale(1)', opacity: 1 }
}

const Container = styled.div`
  display: relative;
  width: 100%;
  height: 53vh;
  top: 0;
  left: 0;
  overflow: hidden;
`

const FloatingBox = () => (
  <Spring {...springConfig} {...styleMorph}>
    {props => (
      <Container style={props}>
        <Box class='move-up-down' />
        <BoxShadow class='shadow' />
      </Container>
    )}
  </Spring>
)


export default FloatingBox;
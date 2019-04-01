import React from 'react'
import styled from 'styled-components';
import * as Android from '../../static/img/android.svg'
import * as Babel from '../../static/img/babel.svg'
import * as Js from '../../static/img/js.svg'
import * as Node from '../../static/img/node.svg'
import * as Express from '../../static/img/express.svg'
import * as Mongo from '../../static/img/mongo.svg'
import * as Webpack from '../../static/img/webpack.svg'
import * as Sass from '../../static/img/sass.svg'
import * as Ts from '../../static/img/ts.svg'
import * as Java from '../../static/img/java.svg'
import * as Php from '../../static/img/php.svg'
import * as Python from '../../static/img/python.svg'
import * as Docker from '../../static/img/docker.svg'
import {FaReact}from 'react-icons/fa'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 5px;
  grid-template-rows: auto;
  justify-content: center;
  align-items: baseline;
  /* Small screens */
  @media (max-width: 636px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2px 0;
    align-items: center;
  }
  margin: 40px 0;
`
const ToolBox = () => (
  <Grid>
      <Js />
      <Ts />
      <Node />
      <FaReact size={"4em"} color="#62DBFB"/>
      <Webpack />
      <Babel />
      <Express />
      <Mongo />
      <Sass />
      <Docker />
      <Java />
      <Android/>
      <Php />
      <Python />
  </Grid>
)

export default ToolBox

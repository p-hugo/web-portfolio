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
import { FaReact } from 'react-icons/fa'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 30px 0px;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  background: #263043;
  width: calc(100%-10px);
  padding: 50px 10px;
  
  /* Small screens */
  @media (max-width: 636px) {
    grid-gap: 5px 0;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    * {
      width: 30px;
      height: 30px;
      justify-self: center;
    }
  }
  margin: 40px 0;
`

const ToolBox = () => (
  <Grid>
    <Js />
    <Ts />
    <Node />
    <FaReact size={"4em"} color="#62DBFB" />
    <Webpack />
    <Babel />
    <Express />
    <Mongo />
    <Sass />
    <Docker />
    <Java />
    <Android />
    <Php />
    <Python />
  </Grid>
)

export default ToolBox

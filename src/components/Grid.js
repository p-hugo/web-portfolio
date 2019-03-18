import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-template-rows: auto;
  /* Small screens */
  @media (max-width: 636px) {
    grid-template-columns: 1fr;
  }
  margin-bottom: 40px;
`

const Card = styled.div`
  width: 100%;
  height: 25vh;
  border: 2px solid transparent;
  background-color: var(--card-main);
  box-shadow: 0 3px 20px -10px black;
  transition: all 0.2s ease-in;
  text-align: center;
  :hover {
    border: 2px solid var(--blue-intense);
    box-shadow: 0 3px 20px -3px var(--blue-intense);
  }
`
export default () => (
  <Grid>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Grid>
)

import React from 'react'
import styled from 'styled-components'


const FlexGrid = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 40px 0;
`
const Card = styled.div`
  width: 33%;
  height: 25vh;
  border: 2px solid transparent;
  background: black;
  background-image: url('https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 3px 20px -10px black;
  transition: all 0.2s ease-in;
  text-align: center;
  filter: opacity(0.2);
  :hover {
    filter: opacity(1);
    border: 2px solid var(--blue-intense);
    box-shadow: 0 3px 20px -3px var(--blue-intense);
  }
  @media (max-width: 636px) {
    width: 100%
  }
`
export default () => (
  <FlexGrid>
    <Card />
  </FlexGrid>
)

import styled from 'styled-components'

const Title = styled.h1`
  font-size: ${props => (props.size ? `${props.size}px` : '50px')};
  margin: 10px 0 0 0;
  padding: 10px;
  margin: 10px auto;
  font-family: var(--font);
  font-weight: ${props => (props.fw ? props.fw : 700)};
  color: var(--blue-intense);
`

export default Title

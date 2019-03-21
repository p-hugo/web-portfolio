import styled from 'styled-components'

const Contain = styled.div`
  position: relative;
  margin: 0 0 50px 0;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
  width: 100%;
  @media only screen and (min-width: 320px) and (max-width: 636px) {
    height: 33vh;
  }

  @media only screen and (min-width: 637px) {
    height: 400px;
  }
`

export default Contain;

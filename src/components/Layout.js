import styled from 'styled-components'

const Layout = styled.div`
  margin: 0 auto;
  border: none;
  width: 100%;
  background-color: ${props => props.transparent ? "rgba(23, 33, 45, 0.5)" : props.theme.main};
  max-height: 100vh;
  min-height: 100vh;
  overflow: scroll;
`

Layout.defaultProps = {
  theme: {
    main: '#17212d'
  }
}

export default Layout;

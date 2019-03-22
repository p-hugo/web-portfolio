import styled from 'styled-components'

const Content = styled.main`
  margin: 0 auto;
  font-family: ${props => props.theme.main_font};
  color: ${props => props.theme.font_color};
  h1 {
    font-weight: 600;
  }

  p {
    line-height: 1.58;
  }

  @media only screen and (min-width: 637px) {
    width: 80%;
    p {
      font-size: 21px;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 42px;
    }
    h1 {
      font-size: 60px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 636px) {
    width: 95%;
    margin-top: 60px;
    p {
      font-size: 18px;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 34px;
    }
    h1 {
      font-size: 42px;
    }
  }

  code {
    background-color: #2A303C;
    display: block;
  }
`
Content.defaultProps = {
  theme: {
    main_font: `"Roboto", sans-serif;`,
    font_color: 'white'
  }
}


export default Content

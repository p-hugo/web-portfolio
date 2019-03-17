import styled from 'styled-components'

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    color: ${props => props.color ? props.color: null};
`

export default CenteredDiv;
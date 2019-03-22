import React from 'react'
import { useSpring, animated } from 'react-spring'

const from = {
    opacity: 0,
}

const to = {
    opacity: 1,
}

const config = {
    mass: 10,
    tension: 153,
    friction: 36,
    precision: 0.001

}
const properties = {
    from,
    to,
    delay: 200,
    config
}

function Fade({children}) {
    const props = useSpring({...properties})
    return <animated.div style={props}>{children}</animated.div>
}
export default Fade;